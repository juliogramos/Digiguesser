import { Stack, styled, type StackProps } from "@mui/material";

const GameCard = styled(Stack)<StackProps>(({ theme }) => ({
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  gap: theme.spacing(2),
  p: theme.spacing(1),
  pb: theme.spacing(2),
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
