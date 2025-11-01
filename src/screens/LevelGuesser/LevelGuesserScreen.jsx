import { Typography, Chip } from "@mui/material";
import { GAMESTATE, LEVELS, LEVELVALUES, LOADTIMES } from "@/utils/constants";
import {
  DigimonIconButton,
  DigimonImage,
  GameCard,
  TimedLoader,
  TitleCard,
  BoxRow,
} from "@/components";
import LevelGuesserStateDisplay from "./LevelGuesserStateDisplay";
import LevelButtonGroup from "./LevelButtonGroup";
import { useDigimon } from "@/hooks";
import { useLevelGuesserContext } from "@/context/LevelGuesser/useLevelGuesserContext";
import imgTry from "@/assets/button_try.webp";
import { EmojiEvents } from "@mui/icons-material";

function LevelGuesserScreen() {
  const {
    gameState,
    resetGameState,
    setWinner,
    setResults,
    clearResults,
    streak,
    highscore,
    increaseStreak,
    resetStreak,
  } = useLevelGuesserContext();
  const { digimon, isLoading, getRandomDigimon } = useDigimon();

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
    if (isWinner) increaseStreak();
  }

  function newGame() {
    resetStreak();
    clearResults();
    resetGameState(getRandomDigimon);
  }

  return (
    <>
      <TitleCard subTitle="Level Guesser" width={600} />

      <BoxRow>
        <Chip label={"Score: " + streak} />
        <Chip
          icon={<EmojiEvents color="gold" />}
          label={"High Score: " + highscore}
        />
      </BoxRow>

      <GameCard>
        <Typography variant="h3">
          {isLoading ? "Loading..." : digimon.name}
        </Typography>
        <DigimonImage src={digimon?.image.href ?? null} />

        <BoxRow>
          <LevelGuesserStateDisplay />
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
        />
      </GameCard>
    </>
  );
}

export { LevelGuesserScreen };
