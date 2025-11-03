import { Card, styled, type CardProps } from "@mui/material";

const GameCard = styled(Card)<CardProps>(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  gap: theme.spacing(2),
  padding: theme.spacing(1),
  paddingBottom: theme.spacing(2),
  maxWidth: 600,
  maxHeight: 600,
  width: "100%",
  height: "100%",
  [theme.breakpoints.down("sm")]: {
    height: "fit-content",
    justifyContent: "space-evenly",
  },
}));

export default GameCard;
