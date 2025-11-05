import { Card, styled, type CardProps } from "@mui/material";

const GameCard = styled(Card)<CardProps>(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  gap: theme.spacing(2),
  padding: theme.spacing(1),
  paddingBottom: theme.spacing(2),
  maxHeight: 600,
  maxWidth: 600,
  height: "100%",
  width: "100%",
  [theme.breakpoints.down("sm")]: {
    justifyContent: "space-evenly",
  },
  backgroundColor: theme.palette.containerBackground.main,
  border: `1px solid ${theme.palette.border.main}`,
  borderRadius: theme.spacing(1),
}));

export default GameCard;
