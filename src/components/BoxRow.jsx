import { Box } from "@mui/material";

function BoxRow({ children, ...props }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-end",
        gap: 4,
      }}
      {...props}
    >
      {children}
    </Box>
  );
}

export default BoxRow;
