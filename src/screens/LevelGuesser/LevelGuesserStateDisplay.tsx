import { Typography, Box } from "@mui/material";
import type { GameState } from "@/utils/constants";

interface LevelGuesserStateDisplayProps {
  gameState: GameState;
  streak: number;
  highscore: number;
}

function LevelGuesserStateDisplay({
  gameState,
  streak,
  highscore,
}: LevelGuesserStateDisplayProps) {
  switch (gameState) {
    case "win":
      return (
        <Box sx={{ textAlign: "center" }}>
          <Typography color="success.main" variant="h3">
            You Won!
          </Typography>
          <Typography>
            Your streak: <strong>{streak}</strong>
          </Typography>
        </Box>
      );

    case "loss":
      return (
        <Box sx={{ textAlign: "center" }}>
          <Typography color="error.main" variant="h3">
            You Lost!
          </Typography>
          <Typography>Final Score: {streak}</Typography>
          <Typography>High score: {highscore}</Typography>
        </Box>
      );

    default:
      return null;
  }
}

export default LevelGuesserStateDisplay;
