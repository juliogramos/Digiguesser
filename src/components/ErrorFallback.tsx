import { Typography } from "@mui/material";
import GameCard from "./GameCard";
import DigimonIconButton from "./DigimonIconButton";
import imgTry from "@/assets/button_try.webp";

interface ErrorInterface {
  error: number;
  message: string;
}

interface ErrorFallbackProps {
  error: ErrorInterface;
}

function ErrorFallback({ error }: ErrorFallbackProps) {
  return (
    <GameCard
      sx={{
        p: 2,
        gap: 2,
        height: "fit-content",
        justifyContent: "center",
        alignItems: "center",
      }}
      role="error"
    >
      <Typography variant="h1" color="error">
        There was an error
      </Typography>
      <Typography textAlign="center">
        <strong>{error.message}</strong>
      </Typography>

      <Typography>
        If the error persists, please contact the developer.
      </Typography>

      <DigimonIconButton
        imageSrc={imgTry}
        label="Try Again"
        variant="contained"
        onClick={() => window.location.reload()}
      />
    </GameCard>
  );
}

export default ErrorFallback;
