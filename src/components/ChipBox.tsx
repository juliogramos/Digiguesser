import { Box, styled, type BoxProps } from "@mui/material";

const ChipBox = styled(Box)<BoxProps>(({ theme }) => ({
  backgroundColor: theme.palette.containerBackground.main,
  border: `1px solid ${theme.palette.border.main}`,
  borderRadius: 16,
  padding: theme.spacing(1),
  paddingLeft: theme.spacing(1),
  paddingRight: theme.spacing(1),
}));

export default ChipBox;
