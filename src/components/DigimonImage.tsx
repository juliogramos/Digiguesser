import { CircularProgress, Box, useTheme } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { DIGIMONIMAGESIZE } from "@/utils/constants";

interface DigimonImageProps {
  src: string | undefined;
}

function DigimonImage({ src }: DigimonImageProps) {
  const [loading, setLoading] = useState(true);
  const imageRef = useRef<HTMLImageElement>(null);
  const theme = useTheme();

  // During testing this wasn't actually necessary, but I still want to make
  //  sure that cached images still display properly
  useEffect(() => {
    if (imageRef.current && imageRef.current.complete) setLoading(false);
  }, []);

  useEffect(() => {
    if (src === undefined) setLoading(true);
  }, [src]);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        maxWidth: {
          xs: DIGIMONIMAGESIZE.SMALLWIDTH,
          sm: DIGIMONIMAGESIZE.WIDTH,
        },
        maxHeight: {
          xs: DIGIMONIMAGESIZE.SMALLHEIGHT,
          sm: DIGIMONIMAGESIZE.HEIGHT,
        },
        width: "100vw",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          display: loading ? "flex" : "none",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "grey.400",
        }}
      >
        <CircularProgress size="25%" />
      </Box>
      <span style={{ display: loading ? "none" : "block" }}>
        <img
          alt=""
          ref={imageRef}
          src={src}
          style={{
            width: "100%",
            height: "100%",
            border: `1px solid ${theme.palette.border.main}`,
            borderRadius: theme.spacing(1),
          }}
          onLoad={() => setLoading(false)}
        />
      </span>
    </Box>
  );
}

export default DigimonImage;
