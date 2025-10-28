import { useDigimon } from "../hooks/useDigimon";
import { useGameState } from "../hooks/useGameState";
import { useEffect } from "react";
import { Container, Box, Card, Button, Typography } from "@mui/material";
import { GAMESTATE, LEVELS } from "../utils/constants";
import { GameStateDisplay } from "../components/GameStateDisplay";
import { DigimonImage } from "../components/DigimonImage";
import { TimedLoader } from "../components/TimedLoader";
import { TitleCard } from "../components/TitleCard";
import { LevelButton } from "../components/LevelButton";

function LevelGuesserScreen() {
  const { digimon, error, status, getRandomDigimon, clearDigimon } =
    useDigimon();
  const { gameState, setWinner, resetGameState } = useGameState();

  useEffect(() => getRandomDigimon(), [getRandomDigimon]);
  console.log(gameState);

  function levelGuesserLogic(guess) {
    let isWinner = guess.some((level) => digimon.levels.includes(level));
    if (guess === LEVELS.OTHER && digimon.levels.length === 0) isWinner = true;
    setWinner(isWinner);
  }

  function newGame() {
    clearDigimon();
    resetGameState(() => getRandomDigimon(digimon.id));
  }

  return (
    <Container>
      <TitleCard subTitle="Level Guesser" />
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 2,
          p: 1,
          maxWidth: 600,
          maxHeight: 600,
          width: "100%",
          height: "100%",
        }}
      >
        <Typography variant="h3">
          {status.loading || status.standby ? "Loading..." : digimon.name}
        </Typography>
        <DigimonImage src={digimon?.image.href ?? null} />

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "flex-end",
            gap: 2,
          }}
        >
          <GameStateDisplay state={gameState} />
          {gameState === GAMESTATE.WIN || gameState === GAMESTATE.LOSS ? (
            <TimedLoader callback={newGame} duration={100} />
          ) : null}
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          <LevelButton
            level={LEVELS.BABY}
            disabled={gameState !== GAMESTATE.STANDBY}
            onClick={levelGuesserLogic}
          >
            Baby
          </LevelButton>
          <LevelButton
            level={LEVELS.CHILD}
            disabled={gameState !== GAMESTATE.STANDBY}
            onClick={levelGuesserLogic}
          >
            Child
          </LevelButton>
          <LevelButton
            level={LEVELS.ADULT}
            disabled={gameState !== GAMESTATE.STANDBY}
            onClick={levelGuesserLogic}
          >
            Adult
          </LevelButton>
          <LevelButton
            level={LEVELS.PERFECT}
            disabled={gameState !== GAMESTATE.STANDBY}
            onClick={levelGuesserLogic}
          >
            Perfect
          </LevelButton>
          <LevelButton
            level={LEVELS.ULTIMATE}
            disabled={gameState !== GAMESTATE.STANDBY}
            onClick={levelGuesserLogic}
          >
            Ultimate
          </LevelButton>
          <LevelButton
            level={LEVELS.OTHER}
            disabled={gameState !== GAMESTATE.STANDBY}
            onClick={levelGuesserLogic}
          >
            Other
          </LevelButton>
        </Box>
      </Card>
    </Container>
  );
}

export { LevelGuesserScreen };
