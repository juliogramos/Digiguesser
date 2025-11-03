import { Box } from "@mui/material";
import type { SxProps } from "@mui/material/styles";

interface BoxRowProps {
  children: React.ReactNode;
  sx: SxProps;
  props: unknown;
}

function BoxRow({ children, sx, ...props }: BoxRowProps) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-end",
        gap: 4,
        ...sx,
      }}
      {...props}
    >
      {children}
    </Box>
  );
}

export default BoxRow;
