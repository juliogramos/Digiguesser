import { useGameState } from "../hooks/useGameState";
import { Container, Box, Card, Button, Typography } from "@mui/material";
import { GAMESTATE, LEVELS, LEVELVALUES, LOADTIMES } from "../utils/constants";
import { GameStateDisplay } from "../components/GameStateDisplay";
import { DigimonImage } from "../components/DigimonImage";
import { TimedLoader } from "../components/TimedLoader";
import { TitleCard } from "../components/TitleCard";
import { useState } from "react";
import { getRandomId } from "../utils/getRandomId";
import { useDigimon } from "../hooks/useDigimon";
import { LevelButtonGroup } from "../components/LevelButtonGroup";

function LevelGuesserScreen() {
  const [digimonId, setDigimonId] = useState(getRandomId);
  const { gameState, setWinner, resetGameState } = useGameState();
  const { digimon, error, isLoading, isError } = useDigimon(digimonId);
  const [results, setResults] = useState({ winners: [], loser: null });

  function levelGuesserLogic(userGuess) {
    // Gets the levels off the Digimon
    // Do it like that because of the Baby and Other cases where multiple values
    //  are in the same "category"
    let winnerLevels = [];
    digimon.levels.forEach((level) => {
      console.log("current", level);
      Object.entries(LEVELVALUES).every(([l, v]) => {
        console.log("this v", v);
        if (v.includes(level)) {
          winnerLevels.push(l);
          return false;
        }
        return true;
      });
    });

    // Handle case where digimon comes with no levels
    if (winnerLevels.length === 0) winnerLevels.push(LEVELS.OTHER);

    let isWinner = false;
    if (winnerLevels.includes(userGuess)) isWinner = true;

    setWinner(isWinner);
    setResults({ winners: winnerLevels, loser: isWinner ? null : userGuess });
  }

  function newGame() {
    resetGameState((prevId) => setDigimonId(getRandomId(prevId)));
  }

  return (
    <Container>
      <TitleCard subTitle="Level Guesser" width={600} />
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
          pb: 2,
        }}
      >
        <Typography variant="h3">
          {isLoading ? "Loading..." : digimon.name}
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
            <TimedLoader callback={newGame} duration={LOADTIMES.LEVELGUESSER} />
          ) : null}
        </Box>
        <LevelButtonGroup
          onClick={levelGuesserLogic}
          disabledCondition={gameState !== GAMESTATE.STANDBY}
          results={results}
        />
      </Card>
    </Container>
  );
}

export { LevelGuesserScreen };
