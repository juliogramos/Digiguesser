import { Box } from "@mui/material";

function ChipBox({ sx, children, ...props }) {
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
