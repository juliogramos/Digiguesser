import { Box } from "@mui/material";
import { BUTTONSTATUS, LEVELS } from "@/utils/constants";
import { useLevelGuesserContext } from "@/context/LevelGuesser/useLevelGuesserContext";
import DigimonIconButton from "@/components/DigimonIconButton";

function LevelButtonGroup({ onClick, disabledCondition }) {
  const { results } = useLevelGuesserContext();
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
        const buttonStatus = winners.includes(value.ID)
          ? BUTTONSTATUS.WINNER
          : loser === value.ID
          ? BUTTONSTATUS.LOSER
          : BUTTONSTATUS.NORMAL;

        return (
          <DigimonIconButton
            variant="contained"
            color="secondary"
            fontSize="small"
            label={value.LABEL}
            imageSrc={value.IMG}
            aria-label={value}
            disabled={disabledCondition}
            onClick={() => onClick(value.ID)}
            size={buttonStatus !== BUTTONSTATUS.WINNER ? "medium" : "large"}
            key={key}
            sx={{
              "&.Mui-disabled": {
                color:
                  buttonStatus === BUTTONSTATUS.WINNER
                    ? "success.main"
                    : buttonStatus === BUTTONSTATUS.LOSER
                    ? "error.main"
                    : "disabled.main",
                display:
                  buttonStatus === BUTTONSTATUS.NORMAL ? "none" : "inline-flex",
                border: "none",
              },
            }}
          >
            {key.charAt(0).toUpperCase() + key.slice(1)}
          </DigimonIconButton>
        );
      })}
    </Box>
  );
}

export default LevelButtonGroup;
