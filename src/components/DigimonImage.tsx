import { CircularProgress, Box } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { DIGIMONIMAGESIZE } from "@/utils/constants";

interface DigimonImageProps {
  src: string | undefined;
}

function DigimonImage({ src }: DigimonImageProps) {
  const [loading, setLoading] = useState(true);
  const imageRef = useRef<HTMLImageElement>(null);

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
        width: "100%",
        height: "100%",
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
          }}
          onLoad={() => setLoading(false)}
        />
      </span>
    </Box>
  );
}

export default DigimonImage;
