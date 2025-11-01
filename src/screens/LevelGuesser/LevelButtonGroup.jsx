import imgBaby from "@/assets/button_baby.webp";
import imgChild from "@/assets/button_child.webp";
import imgAdult from "@/assets/button_adult.webp";
import imgPerfect from "@/assets/button_perfect.webp";
import imgUltimate from "@/assets/button_ultimate.webp";
import imgOther from "@/assets/button_other.webp";
import { Box } from "@mui/material";
import { BUTTONSTATUS, LEVELS } from "@/utils/constants";
import { useLevelGuesserContext } from "@/context/LevelGuesser/useLevelGuesserContext";
import DigimonIconButton from "@/components/DigimonIconButton";

function getLevelProps(level) {
  let imageSrc;
  let label;
  switch (level) {
    case LEVELS.BABY:
      imageSrc = imgBaby;
      label = "Baby";
      break;

    case LEVELS.CHILD:
      imageSrc = imgChild;
      label = "Child";
      break;

    case LEVELS.ADULT:
      imageSrc = imgAdult;
      label = "Adult";
      break;

    case LEVELS.PERFECT:
      imageSrc = imgPerfect;
      label = "Pefect";
      break;

    case LEVELS.ULTIMATE:
      imageSrc = imgUltimate;
      label = "Ultimate";
      break;

    default:
      imageSrc = imgOther;
      label = "Other";
      break;
  }
  return { imageSrc, label };
}

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
        const buttonStatus = winners.includes(value)
          ? BUTTONSTATUS.WINNER
          : loser === value
          ? BUTTONSTATUS.LOSER
          : BUTTONSTATUS.NORMAL;

        const { imageSrc, label } = getLevelProps(value);

        return (
          <DigimonIconButton
            variant="contained"
            color="secondary"
            fontSize="small"
            imageSrc={imageSrc}
            label={label}
            aria-label={value}
            level={value}
            disabled={disabledCondition}
            onClick={() => onClick(value)}
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
