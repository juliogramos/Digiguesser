import {
  Typography,
  Switch,
  Stack,
  Divider,
  Link as MUILink,
  FormControlLabel,
} from "@mui/material";
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
import DisclaimerDialog from "@/components/DisclaimerDialog";
import DarkModeSwitch from "@/components/DarkModeSwitch";

function LevelGuesserScreen() {
  const { gameState, setWinner, resetGameState } = useGameState();
  const [results, setResults] = useState(DEFAULTRESULTS);
  const clearResults = useCallback(() => setResults(DEFAULTRESULTS), []);
  const { streak, highscore, increaseStreak, resetStreak } = useStreak();
  const { digimon, isLoading, getRandomDigimon } = useDigimon(375);
  const { state: altNaming, toggleState: toggleAltNaming } =
    useLocalStorageSwitch("alt-naming");
  const [disclaimer, setDisclaimer] = useState(false);

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
      <Stack
        direction="row"
        useFlexGap
        spacing={2}
        sx={{
          alignItems: "center",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <Typography variant="h1" color="primary.main">
          DigiGuessr
        </Typography>
        <ChipBox>
          <Stack
            direction="row"
            divider={
              <Divider
                aria-hidden="true"
                orientation="vertical"
                sx={{ bgcolor: "border.main" }}
                flexItem
              />
            }
            spacing={1}
            sx={{ alignItems: "center" }}
          >
            <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
              <EmojiEvents sx={{ color: "#d3af37" }} />
              <Typography variant="body2">Score: {streak}</Typography>
            </Stack>

            <Typography variant="body2">High: {highscore}</Typography>
          </Stack>
        </ChipBox>

        <ChipBox>
          <Stack direction="row" sx={{ alignItems: "center" }} spacing={1}>
            <FormControlLabel
              control={
                <Switch
                  size="small"
                  checked={altNaming}
                  onChange={toggleAltNaming}
                />
              }
              label={<Typography variant="body2">Dub levels</Typography>}
            />
          </Stack>
        </ChipBox>
      </Stack>

      <GameCard>
        <Typography variant="h2">
          {isLoading ? "Loading..." : digimon?.name}
        </Typography>
        <DigimonImage src={digimon?.image} />

        <Stack direction="row" spacing={4} sx={{ alignItems: "flex-end" }}>
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
              onClick={newGame}
            />
          ) : null}
        </Stack>
        <LevelButtonGroup
          onClick={levelGuesserLogic}
          disabledCondition={gameState !== "standby"}
          results={results}
          altNaming={altNaming}
        />
      </GameCard>
      <ChipBox>
        <Stack
          direction="row"
          spacing={2}
          divider={
            <Divider
              aria-hidden="true"
              orientation="vertical"
              sx={{ bgcolor: "border.main" }}
              flexItem
            />
          }
          sx={{
            alignItems: "center",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <DarkModeSwitch />
          <MUILink
            variant="body2"
            onClick={() => setDisclaimer(true)}
            sx={{ cursor: "pointer" }}
            color="primary.main"
          >
            Disclaimer
          </MUILink>
          <MUILink
            variant="body2"
            href="https://github.com/juliogramos/Digiguessr"
            sx={{ cursor: "pointer", paddingRight: 1 }}
            color="primary.main"
          >
            Github
          </MUILink>
        </Stack>
      </ChipBox>
      <DisclaimerDialog
        open={disclaimer}
        onClose={() => setDisclaimer(false)}
      />
    </>
  );
}

export default LevelGuesserScreen;
