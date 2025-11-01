import { Card } from "@mui/material";

function GameCard({ children, ...props }) {
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
      }}
      {...props}
    >
      {children}
    </Card>
  );
}

export default GameCard;
