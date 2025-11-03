import { Box, Typography, useTheme } from "@mui/material";
import arrows from "../assets/img_arrow_dot.svg";

interface TitleCardProps {
  subTitle: string | null;
  [x: string]: unknown;
}

function TitleCard({ subTitle = null, ...props }: TitleCardProps) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "column", md: "row" },
        justifyContent: "center",
        alignItems: "center",
        gap: 2,
        p: 1,
        borderTop: "1px solid",
        borderBottom: "1px solid",
        borderColor: "primary.main",
        maxWidth: "100%",
        backgroundColor: theme.palette.background.default,
        ...props,
      }}
    >
      <Typography variant="h1" color="primary.main">
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
          <Typography variant="h2">{subTitle}</Typography>
        </Box>
      ) : null}
    </Box>
  );
}

export default TitleCard;
