import { Button, Avatar, type ButtonProps } from "@mui/material";
import { ICONSIZE } from "@/utils/constants";

interface DigimonIconButtonProps {
  imageSrc: string;
  label: string;
}

function DigimonIconButton({
  imageSrc,
  label,
  ...props
}: DigimonIconButtonProps & ButtonProps) {
  return (
    <Button
      aria-label={label}
      startIcon={
        <Avatar
          src={imageSrc}
          sx={{
            height: ICONSIZE.HEIGHT,
            width: ICONSIZE.WIDTH,
            imageRendering: "crisp-edges",
          }}
          variant="square"
        />
      }
      {...props}
    >
      {label}
    </Button>
  );
}

export default DigimonIconButton;
