import { CircularProgress, Typography, Box } from "@mui/material";
import { GAMESTATE } from "../utils/constants";
import { useEffect, useState } from "react";

function Loader({ duration = 3, callback }) {
  const timeSlice = 100 / duration;

  const [count, setCount] = useState(duration);
  const [progress, setProgress] = useState(0);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    if (finished) return;

    setProgress(timeSlice);

    const timer = setInterval(() => {
      setProgress((prevProgress) => prevProgress + timeSlice);
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

function GameStateDisplay({
  state,
  loadTime = 3,
  resetTime = 3,
  loadCallBack,
  resetCallback,
}) {
  switch (state) {
    case GAMESTATE.STANDBY:
      return <Typography>Make your guess!</Typography>;

    case GAMESTATE.WIN:
      return (
        <>
          <Typography>You won!</Typography>
          <Loader duration={resetTime} callback={resetCallback} />
        </>
      );

    case GAMESTATE.LOSS:
      return (
        <>
          <Typography>You lost!</Typography>
          <Loader duration={resetTime} callback={resetCallback} />
        </>
      );

    default:
      return <Typography>ERROR: Impossible State</Typography>;
  }
}

export { GameStateDisplay };
