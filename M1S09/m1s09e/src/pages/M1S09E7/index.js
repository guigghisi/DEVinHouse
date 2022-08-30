import React from "react";
export default function M1S09E7() {
  const [progress, setProgress] = React.useState(0);
  function handleClick() {
    setProgress(0);
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 100;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);
    return () => {
      clearInterval(timer);
    };
  }
  return (
    <div>
      <span>The Sims 4</span>
      <br />
      <progress value={progress} max={100}></progress>
      <br />
      {progress === 100 ? (
        <span>Download completo</span>
      ) : (
        <span>{parseInt(progress)}%</span>
      )}
      <br />
      <button className="botao" onClick={handleClick}>
        Download
      </button>
    </div>
  );
}
