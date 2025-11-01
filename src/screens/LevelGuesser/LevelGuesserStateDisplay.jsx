import { Typography, Box } from "@mui/material";
import { GAMESTATE } from "@/utils/constants";
import { useLevelGuesserContext } from "@/context/LevelGuesser/useLevelGuesserContext";

function LevelGuesserStateDisplay() {
  const { gameState } = useLevelGuesserContext();
  switch (gameState) {
    case GAMESTATE.WIN:
      return (
        <Box sx={{ textAlign: "center" }}>
          <Typography color="success.main" variant="h4">
            You Won!
          </Typography>
          <Typography>Next round in </Typography>
        </Box>
      );

    case GAMESTATE.LOSS:
      return (
        <Box sx={{ textAlign: "center" }}>
          <Typography color="fail.main" variant="h4">
            You Lost!
          </Typography>
          <Typography>Try again? </Typography>
        </Box>
      );

    default:
      return null;
  }
}

export default LevelGuesserStateDisplay;
