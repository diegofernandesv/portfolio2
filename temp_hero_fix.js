const fs = require('fs');

// Read the Hero.jsx file
let content = fs.readFileSync('src/components/Hero.jsx', 'utf8');

// Find and replace the problematic useEffect block
const oldBlock = `    if (!preventRestart) {
      window.addEventListener("resize", handleResize);
    }
    return () => {
      if (restartBtn) {
        restartBtn.removeEventListener("click", initAnimation);
      }
      window.removeEventListener("resize", handleResize);
      if (mainTl) mainTl.kill();
    };
  }, [onAnimationComplete]);`;

const newBlock = `    if (!preventRestart) {
      window.addEventListener("resize", handleResize);
    }
    return () => {
      if (restartBtn) {
        restartBtn.removeEventListener("click", initAnimation);
      }
      if (!preventRestart) {
        window.removeEventListener("resize", handleResize);
      }
      if (mainTl) mainTl.kill();
    };
  }, [onAnimationComplete, preventRestart]);`;

content = content.replace(oldBlock, newBlock);

// Write back to file
fs.writeFileSync('src/components/Hero.jsx', content);
console.log('Hero component syntax fixed');
