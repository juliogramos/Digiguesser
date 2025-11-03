import { Card } from "@mui/material";
import type { SxProps } from "@mui/material";

interface GameCardProps {
  children: React.ReactNode;
  sx: SxProps;
  [x: string]: unknown;
}

function GameCard({ children, sx, ...props }: GameCardProps) {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 2,
        p: 1,
        maxWidth: 600,
        maxHeight: 600,
        width: "100%",
        height: "100%",
        pb: 2,
        ...sx,
      }}
      {...props}
    >
      {children}
    </Card>
  );
}

export default GameCard;
