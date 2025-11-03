import { Typography, Switch } from "@mui/material";
import {
  type Level,
  LOADTIMES,
  DEFAULTRESULTS,
  LEVELVALUES,
} from "@/utils/constants";
import DigimonIconButton from "@/components/DigimonIconButton";
import DigimonImage from "@/components/DigimonImage";
import GameCard from "@/components/GameCard";
import TimedLoader from "@/components/TimedLoader";
import TitleCard from "@/components/TitleCard";
import BoxRow from "@/components/BoxRow";
import ChipBox from "@/components/ChipBox";
import LevelGuesserStateDisplay from "./LevelGuesserStateDisplay";
import LevelButtonGroup from "./LevelButtonGroup";
import useDigimon from "@/hooks/useDigimon";
import useLocalStorageSwitch from "@/hooks/useLocalStorageSwitch";
import useGameState from "@/hooks/useGameState";
import useStreak from "@/hooks/useStreak";
import imgTry from "@/assets/button_try.webp";
import { EmojiEvents } from "@mui/icons-material";
import { useState, useCallback } from "react";
import { preload } from "react-dom";

function LevelGuesserScreen() {
  const { gameState, setWinner, resetGameState } = useGameState();
  const [results, setResults] = useState(DEFAULTRESULTS);
  const clearResults = useCallback(() => setResults(DEFAULTRESULTS), []);
  const { streak, highscore, increaseStreak, resetStreak } = useStreak();
  const { digimon, isLoading, getRandomDigimon } = useDigimon();
  const { state: altNaming, toggleState: toggleAltNaming } =
    useLocalStorageSwitch("alt-naming");

  preload(imgTry, {
    as: "image",
  });

  function levelGuesserLogic(userGuess: Level) {
    // Gets the levels off the Digimon
    // Doing it like that because of the Baby and Other cases where multiple values
    //  are in the same "category"
    const winnerLevels: Level[] = [];
    digimon?.levels.forEach((level) => {
      Object.entries(LEVELVALUES).every(([key, value]) => {
        const typedKey = key as Level;
        if (value.VALUES.includes(level)) {
          winnerLevels.push(typedKey);
          return false;
        }
        return true;
      });
    });

    // Handle case where digimon comes with no levels
    if (winnerLevels.length === 0) winnerLevels.push("Other");

    let isWinner = false;
    if (winnerLevels.includes(userGuess)) isWinner = true;

    setWinner(isWinner);
    setResults({ winners: winnerLevels, loser: isWinner ? null : userGuess });
    if (isWinner) increaseStreak();
  }

  function newGame() {
    if (gameState === "loss") resetStreak();
    clearResults();
    resetGameState(getRandomDigimon);
  }

  return (
    <>
      <TitleCard subTitle="Level Guesser" width={600} />

      <BoxRow>
        <ChipBox>
          <Typography variant="body2">Score: {streak}</Typography>
        </ChipBox>

        <ChipBox>
          <BoxRow sx={{ gap: 1 }}>
            <EmojiEvents sx={{ color: "#d3af37" }} />
            <Typography variant="body2">High Score: {highscore}</Typography>
          </BoxRow>
        </ChipBox>

        <ChipBox>
          <BoxRow sx={{ gap: 1, alignItems: "center" }}>
            <Switch
              size="small"
              checked={altNaming}
              onChange={toggleAltNaming}
            />
            <Typography variant="body2">Alt. naming</Typography>
          </BoxRow>
        </ChipBox>
      </BoxRow>

      <GameCard>
        <Typography variant="h3">
          {isLoading ? "Loading..." : digimon?.name}
        </Typography>
        <DigimonImage src={digimon?.image?.href ?? undefined} />

        <BoxRow>
          <LevelGuesserStateDisplay
            gameState={gameState}
            streak={streak}
            highscore={highscore}
          />
          {gameState === "win" ? (
            <TimedLoader callback={newGame} duration={LOADTIMES.LEVELGUESSER} />
          ) : gameState === "loss" ? (
            <DigimonIconButton
              imageSrc={imgTry}
              label="Try Again"
              variant="contained"
              color="secondary"
              onClick={newGame}
            />
          ) : null}
        </BoxRow>
        <LevelButtonGroup
          onClick={levelGuesserLogic}
          disabledCondition={gameState !== "standby"}
          results={results}
          altNaming={altNaming}
        />
      </GameCard>
    </>
  );
}

export default LevelGuesserScreen;
