import { Typography, Switch } from "@mui/material";
import {
  GAMESTATE,
  LEVELS,
  LOADTIMES,
  DEFAULTRESULTS,
} from "@/utils/constants";
import {
  DigimonIconButton,
  DigimonImage,
  GameCard,
  TimedLoader,
  TitleCard,
  BoxRow,
  ChipBox,
} from "@/components";
import LevelGuesserStateDisplay from "./LevelGuesserStateDisplay";
import LevelButtonGroup from "./LevelButtonGroup";
import {
  useDigimon,
  useLocalStorageSwitch,
  useGameState,
  useStreak,
} from "@/hooks";
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

  function levelGuesserLogic(userGuess) {
    // Gets the levels off the Digimon
    // Doing it like that because of the Baby and Other cases where multiple values
    //  are in the same "category"
    let winnerIds = [];
    digimon.levels.forEach((level) => {
      Object.entries(LEVELS).every(([, value]) => {
        if (value.VALUES.includes(level)) {
          winnerIds.push(value.ID);
          return false;
        }
        return true;
      });
    });

    // Handle case where digimon comes with no levels
    if (winnerIds.length === 0) winnerIds.push(LEVELS.OTHER.ID);

    let isWinner = false;
    if (winnerIds.includes(userGuess)) isWinner = true;

    setWinner(isWinner);
    setResults({ winners: winnerIds, loser: isWinner ? null : userGuess });
    if (isWinner) increaseStreak();
  }

  function newGame() {
    if (gameState === GAMESTATE.LOSS) resetStreak();
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
            <EmojiEvents color="gold" />
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
          {isLoading ? "Loading..." : digimon.name}
        </Typography>
        <DigimonImage src={digimon?.image.href ?? null} />

        <BoxRow>
          <LevelGuesserStateDisplay
            gameState={gameState}
            streak={streak}
            highscore={highscore}
          />
          {gameState === GAMESTATE.WIN ? (
            <TimedLoader callback={newGame} duration={LOADTIMES.LEVELGUESSER} />
          ) : gameState === GAMESTATE.LOSS ? (
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
          disabledCondition={gameState !== GAMESTATE.STANDBY}
          results={results}
          altNaming={altNaming}
        />
      </GameCard>
    </>
  );
}

export default LevelGuesserScreen;
