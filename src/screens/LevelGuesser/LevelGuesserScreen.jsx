import { Box, Typography } from "@mui/material";
import { GAMESTATE, LEVELS, LEVELVALUES, LOADTIMES } from "@/utils/constants";
import {
  DigimonIconButton,
  DigimonImage,
  GameCard,
  TimedLoader,
  TitleCard,
} from "@/components";
import LevelGuesserStateDisplay from "./LevelGuesserStateDisplay";
import LevelButtonGroup from "./LevelButtonGroup";
import { useDigimon } from "@/hooks";
import { useLevelGuesserContext } from "@/context/LevelGuesser/useLevelGuesserContext";
import imgTry from "@/assets/button_try.webp";

function LevelGuesserScreen() {
  const { gameState, resetGameState, setWinner, setResults, clearResults } =
    useLevelGuesserContext();
  const { digimon, error, isLoading, isError, getRandomDigimon } = useDigimon();

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
    resetGameState(getRandomDigimon);
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
          <LevelGuesserStateDisplay />
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
