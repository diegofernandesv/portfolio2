import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Scrolls to top on route changes
export default function ScrollToTop({ behavior = 'auto' }) {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If navigating to an in-page anchor, let the browser handle it
    if (hash) return;

    // Try smooth/auto scroll; fall back for older browsers
    try {
      window.scrollTo({ top: 0, left: 0, behavior });
    } catch (_) {
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }
  }, [pathname, hash, behavior]);

  return null;
}

