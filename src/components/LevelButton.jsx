import imgBaby from "../assets/button_baby.webp";
import imgChild from "../assets/button_child.webp";
import imgAdult from "../assets/button_adult.webp";
import imgPerfect from "../assets/button_perfect.webp";
import imgUltimate from "../assets/button_ultimate.webp";
import imgOther from "../assets/button_other.webp";
import { BUTTONSTATUS, LEVELS } from "../utils/constants";
import { Button, Avatar } from "@mui/material";

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

function LevelButton({ level, onClick, status, ...props }) {
  const { imageSrc, label } = getLevelProps(level);
  console.log(label, status);
  return <Button {...props}>{label}</Button>;
}

export { LevelButton };
