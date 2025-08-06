import { useEffect, useState } from "react";
import PlayIcon from "@mui/icons-material/PlayCircle";
import StopIcon from "@mui/icons-material/StopCircle";

const Timer: React.FC = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer: number;
    if (isRunning) {
      timer = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isRunning]);

  const formatTime = (totalSeconds: number) => {
    const hrs = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
    const mins = String(Math.floor((totalSeconds % 3600) / 60)).padStart(
      2,
      "0"
    );
    const secs = String(totalSeconds % 60).padStart(2, "0");
    return `${hrs}:${mins}:${secs}`;
  };

  return (
    <div className="w-full bg-white rounded-md text-black text-4xl text-center py-3 font-mono flex justify-center items-center gap-4">
      <button onClick={() => setIsRunning((prev) => !prev)}>
        {isRunning ? (
          <StopIcon sx={{ fontSize: 42 }} />
        ) : (
          <PlayIcon sx={{ fontSize: 42 }} />
        )}
      </button>
      <span>{formatTime(seconds)}</span>
    </div>
  );
};

export default Timer;
