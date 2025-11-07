import { Paper, styled, type PaperProps } from "@mui/material";

const ChipBox = styled(Paper)<PaperProps>(({ theme }) => ({
  backgroundColor: theme.palette.containerBackground.main,
  border: `1px solid ${theme.palette.border.main}`,
  borderRadius: 16,
  padding: theme.spacing(1),
  paddingLeft: theme.spacing(1),
  paddingRight: theme.spacing(1),
}));

export default ChipBox;
