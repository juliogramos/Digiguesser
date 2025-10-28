import { Typography } from "@mui/material";
import { GAMESTATE } from "../utils/constants";

function GameStateDisplay({ state }) {
  switch (state) {
    case GAMESTATE.STANDBY:
      return <Typography>Make your guess!</Typography>;

    case GAMESTATE.WIN:
      return (
        <>
          <Typography>You won!</Typography>
        </>
      );

    case GAMESTATE.LOSS:
      return (
        <>
          <Typography>You lost!</Typography>
        </>
      );

    default:
      return <Typography>ERROR: Impossible State</Typography>;
  }
}

export { GameStateDisplay };
