import { useDigimon } from "../hooks/useDigimon";
import { useGameState } from "../hooks/useGameState";
import { useEffect } from "react";
import { Container, Box, Card, Button, Typography } from "@mui/material";
import { GAMESTATE, LEVELS } from "../utils/constants";
import { GameStateDisplay } from "../components/GameStateDisplay";
import { DigimonImage } from "../components/DigimonImage";
import { TimedLoader } from "../components/TimedLoader";

function LevelGuesserScreen() {
  const { digimon, error, status, getRandomDigimon } = useDigimon();
  const { gameState, setWinner, resetGameState } = useGameState();

  useEffect(() => getRandomDigimon(), [getRandomDigimon]);
  console.log(gameState);

  function levelGuesserLogic(guess) {
    let isWinner = guess.some((level) => digimon.levels.includes(level));
    if (guess === LEVELS.OTHER && digimon.levels.length === 0) isWinner = true;
    setWinner(isWinner);
  }

  function newGame() {
    resetGameState(() => getRandomDigimon(digimon.id));
  }

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
        }}
      >
        <Card
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 2,
            p: 1,
          }}
        >
          {status.loading || status.standby ? (
            "Loading..."
          ) : status.success ? (
            <>
              <Typography variant="h4">{digimon.name}</Typography>
              <DigimonImage src={digimon.image.href} />
            </>
          ) : (
            `Error: ${error.message}`
          )}
        </Card>
      </Box>
      <GameStateDisplay state={gameState} />
      {gameState === GAMESTATE.WIN || gameState === GAMESTATE.LOSS ? (
        <TimedLoader callback={newGame} />
      ) : null}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          gap: 2,
        }}
      >
        <Button
          disabled={gameState !== GAMESTATE.STANDBY}
          onClick={() => levelGuesserLogic(LEVELS.BABY)}
        >
          Baby
        </Button>
        <Button
          disabled={gameState !== GAMESTATE.STANDBY}
          onClick={() => levelGuesserLogic(LEVELS.CHILD)}
        >
          Child
        </Button>
        <Button
          disabled={gameState !== GAMESTATE.STANDBY}
          onClick={() => levelGuesserLogic(LEVELS.ADULT)}
        >
          Adult
        </Button>
        <Button
          disabled={gameState !== GAMESTATE.STANDBY}
          onClick={() => levelGuesserLogic(LEVELS.PERFECT)}
        >
          Perfect
        </Button>
        <Button
          disabled={gameState !== GAMESTATE.STANDBY}
          onClick={() => levelGuesserLogic(LEVELS.ULTIMATE)}
        >
          Ultimate
        </Button>
        <Button
          disabled={gameState !== GAMESTATE.STANDBY}
          onClick={() => levelGuesserLogic(LEVELS.OTHER)}
        >
          Other
        </Button>
      </Box>
    </Container>
  );
}

export { LevelGuesserScreen };
