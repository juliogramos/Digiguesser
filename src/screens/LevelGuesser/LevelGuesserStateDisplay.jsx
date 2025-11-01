import { Typography, Box } from "@mui/material";
import { GAMESTATE } from "@/utils/constants";
import { useLevelGuesserContext } from "@/context/LevelGuesser/useLevelGuesserContext";

function LevelGuesserStateDisplay() {
  const { gameState, streak, highscore } = useLevelGuesserContext();
  switch (gameState) {
    case GAMESTATE.WIN:
      return (
        <Box sx={{ textAlign: "center" }}>
          <Typography color="success.main" variant="h4">
            You Won!
          </Typography>
          <Typography>
            Your streak: <strong>{streak}</strong>
          </Typography>
          <Typography>Next round in... </Typography>
        </Box>
      );

    case GAMESTATE.LOSS:
      return (
        <Box sx={{ textAlign: "center" }}>
          <Typography color="fail.main" variant="h4">
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
