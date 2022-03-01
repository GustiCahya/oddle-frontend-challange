import React from "react";
import Masonry from "react-masonry-css";
import { Box } from "@mui/material";

export default function GridMasonry({ children, sx }) {
  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1,
  };
  return (
    <Box sx>
      <Masonry
        breakpointCols={breakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {children}
      </Masonry>
    </Box>
  );
}
