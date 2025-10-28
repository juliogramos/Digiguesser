import { Typography, Box } from "@mui/material";
import { GAMESTATE } from "../utils/constants";

function GameStateDisplay({ state }) {
  switch (state) {
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
          <Typography>Next round in </Typography>
        </Box>
      );

    default:
      return null;
  }
}

export { GameStateDisplay };
