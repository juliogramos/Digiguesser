import { Box, Typography } from "@mui/material";
import { GAMESTATE, LEVELS, LEVELVALUES, LOADTIMES } from "../utils/constants";
import { GameStateDisplay } from "../components/GameStateDisplay";
import { DigimonImage } from "../components/DigimonImage";
import { TimedLoader } from "../components/TimedLoader";
import { TitleCard } from "../components/TitleCard";
import { useState } from "react";
import { getRandomId } from "../utils/getRandomId";
import { useDigimon } from "../hooks/useDigimon";
import { LevelButtonGroup } from "../components/LevelButtonGroup";
import { GameCard } from "../components/GameCard";
import { useGameContext } from "../hooks/useGameContext";
import { DigimonIconButton } from "../components/DigimonIconButton";
import imgTry from "../assets/button_try.webp";

function LevelGuesserScreen() {
  const { gameState, resetGameState, setWinner, setResults, clearResults } =
    useGameContext();
  const [digimonId, setDigimonId] = useState(getRandomId);
  const { digimon, error, isLoading, isError } = useDigimon(digimonId);

  function levelGuesserLogic(userGuess) {
    // Gets the levels off the Digimon
    // Do it like that because of the Baby and Other cases where multiple values
    //  are in the same "category"
    let winnerLevels = [];
    digimon.levels.forEach((level) => {
      Object.entries(LEVELVALUES).every(([l, v]) => {
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
    clearResults();
    resetGameState((prevId) => setDigimonId(getRandomId(prevId)));
  }

  return (
    <>
      <TitleCard subTitle="Level Guesser" width={600} />
      <GameCard>
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
            gap: 4,
          }}
        >
          <GameStateDisplay />
          {gameState === GAMESTATE.WIN ? (
            <TimedLoader callback={newGame} duration={LOADTIMES.LEVELGUESSER} />
          ) : gameState === GAMESTATE.LOSS ? (
            <DigimonIconButton
              imageSrc={imgTry}
              label="New Game"
              variant="contained"
              color="secondary"
              onClick={newGame}
            />
          ) : null}
        </Box>
        <LevelButtonGroup
          onClick={levelGuesserLogic}
          disabledCondition={gameState !== GAMESTATE.STANDBY}
        />
      </GameCard>
    </>
  );
}

export { LevelGuesserScreen };
