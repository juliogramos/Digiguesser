import { Box, styled, type BoxProps } from "@mui/material";

const ChipBox = styled(Box)<BoxProps>(({ theme }) => ({
  borderRadius: 16,
  backgroundColor: theme.palette.grey[300],
  padding: theme.spacing(1),
  paddingLeft: theme.spacing(1),
  paddingRight: theme.spacing(1),
  border: `1px solid ${theme.palette.grey[400]}`,
}));

export default ChipBox;
