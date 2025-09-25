import { useEffect, useRef } from "react";

const DEFAULT_URL =
  "https://www.tiktok.com/@fdez.uxui/video/7420022429612903713";

export default function TikTokEmbed({
  url = DEFAULT_URL,
  maxWidth = 605,
  minWidth = 325,
  title = "Follow me on my TikTok :)",
}) {
  const ref = useRef(null);
  const videoId = url?.match(/\/video\/(\d+)/)?.[1];

  useEffect(() => {
    if (!url || !ref.current) return;
    const existing = document.getElementById("tiktok-embed-script");
    if (!existing) {
      const s = document.createElement("script");
      s.id = "tiktok-embed-script";
      s.src = "https://www.tiktok.com/embed.js";
      s.async = true;
      document.body.appendChild(s);
    } else {
      // Let TikTok re-scan embeds if possible
      try {
        // Some versions expose a global reload; if not, the script auto-detects.
        window.tiktokEmbed?.load?.();
      } catch (_) {}
    }
  }, [url]);

  if (!url) return null;

  return (
    <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", gap: 8, borderRadius: 12 }}>
      <h1 style={{ margin: 0, fontSize: 24, textAlign: "center" }}>{title}</h1>
      <blockquote
        ref={ref}
        className="tiktok-embed"
        cite={url}
        data-video-id={videoId}
        style={{ maxWidth, minWidth, margin: 0 }}
      >
        <section>
          <a href={url} target="_blank" rel="noopener noreferrer" title="@fdez.uxui">
            @fdez.uxui
          </a>{" "}
          View on TikTok
        </section>
      </blockquote>
    </div>
  );
}
