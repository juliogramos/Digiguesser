import { Box } from "@mui/material";
import type { SxProps } from "@mui/material/styles";

interface ChipBoxProps {
  children: React.ReactNode;
  sx: SxProps;
  [x: string]: unknown;
}

function ChipBox({ sx, children, ...props }: ChipBoxProps) {
  return (
    <Box
      sx={{
        borderRadius: 16,
        backgroundColor: "disabled.main",
        p: 1,
        px: 2,
        border: "1px solid gray",
        ...sx,
      }}
      {...props}
    >
      {children}
    </Box>
  );
}

export default ChipBox;
