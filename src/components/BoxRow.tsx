import { Box, styled, type BoxProps } from "@mui/material";

const BoxRow = styled(Box)<BoxProps>(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "flex-end",
  gap: theme.spacing(4),
}));

export default BoxRow;
