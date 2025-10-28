import { Box, Typography, useTheme } from "@mui/material";
import arrows from "../assets/img_arrow_dot.svg";

function TitleCard({ subTitle = null }) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "column", md: "row" },
        justifyContent: "center",
        alignItems: "center",
        gap: 2,
        backgroundColor: "background.main",
        p: 1,
        borderTop: "1px solid",
        borderBottom: "1px solid",
        borderColor: "primary.main",
        width: "100%",
      }}
    >
      <Typography
        variant="h1"
        color="primary.main"
        sx={{
          fontSize: { xs: "2rem", sm: theme.typography.h1.fontSize },
        }}
      >
        Digiguesser
      </Typography>
      {subTitle ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: 2,
          }}
        >
          <img src={arrows} height={20} />
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "1.5rem", sm: theme.typography.h2.fontSize },
            }}
          >
            {subTitle}
          </Typography>
        </Box>
      ) : null}
    </Box>
  );
}

export { TitleCard };
