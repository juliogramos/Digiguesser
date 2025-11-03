import { Box } from "@mui/material";
import {
  type Level,
  type ButtonStatus,
  type LevelGuesserResults,
  LEVELVALUES,
} from "@/utils/constants";
import DigimonIconButton from "@/components/DigimonIconButton";

interface LevelButtonGroupProps {
  onClick: (arg: Level) => void;
  disabledCondition: boolean;
  results: LevelGuesserResults;
  altNaming: boolean;
}

function LevelButtonGroup({
  onClick,
  disabledCondition,
  results,
  altNaming,
}: LevelButtonGroupProps) {
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
      {Object.entries(LEVELVALUES).map(([key, value]) => {
        const typedKey = key as Level;
        const buttonStatus: ButtonStatus = winners.includes(typedKey)
          ? "winner"
          : loser === key
          ? "loser"
          : "normal";

        return (
          <DigimonIconButton
            variant="contained"
            color="secondary"
            label={!altNaming ? value.LABEL : value.ALT}
            imageSrc={value.IMG}
            aria-label={!altNaming ? value.LABEL : value.ALT}
            disabled={disabledCondition}
            onClick={() => onClick(typedKey)}
            size={buttonStatus !== "winner" ? "medium" : "large"}
            key={key}
            sx={{
              "&.Mui-disabled": {
                color:
                  buttonStatus === "winner"
                    ? "success.main"
                    : buttonStatus === "loser"
                    ? "error.main"
                    : "disabled.main",
                display: buttonStatus === "normal" ? "none" : "inline-flex",
                border: "none",
              },
            }}
          />
        );
      })}
    </Box>
  );
}

export default LevelButtonGroup;
