import { Box } from "@mui/material";
import { LevelButton } from "./LevelButton";
import { BUTTONSTATUS, LEVELS } from "../utils/constants";

function LevelButtonGroup({ onClick, disabledCondition, results }) {
  const { winners, loser } = results;
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: 2,
      }}
    >
      {Object.entries(LEVELS).map(([key, value]) => {
        return (
          <LevelButton
            level={value}
            disabled={disabledCondition}
            onClick={onClick}
            key={key}
            status={
              winners.includes(value)
                ? BUTTONSTATUS.WINNER
                : loser === value
                ? BUTTONSTATUS.LOSER
                : BUTTONSTATUS.NORMAL
            }
          >
            {key.charAt(0).toUpperCase() + key.slice(1)}
          </LevelButton>
        );
      })}
    </Box>
  );
}

export { LevelButtonGroup };
