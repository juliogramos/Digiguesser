import { useState, useEffect } from "react";
import { Box, CircularProgress, Typography } from "@mui/material";

function TimedLoader({ duration = 3, callback }) {
  const timeSlice = 100 / duration;

  const [count, setCount] = useState(duration);
  const [progress, setProgress] = useState(0);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    if (finished) return;

    setProgress(timeSlice);

    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        let newProgress = prevProgress + timeSlice;
        return newProgress > 100 ? 100 : newProgress;
      });
      setCount((prevCount) => prevCount - 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [finished, timeSlice]);

  useEffect(() => {
    if (count <= 0) {
      setFinished(true);
      callback();
    }
  }, [callback, count]);

  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress variant="determinate" value={progress} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="caption" component="div">
          {count > 0 ? count : null}
        </Typography>
      </Box>
    </Box>
  );
}

export default TimedLoader;
