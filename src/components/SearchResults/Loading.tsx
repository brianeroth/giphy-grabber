import React from "react";

import { Skeleton } from "@mui/material";

export default function Loading() {
  const randomHeights = [150, 275, 250, 175];

  return (
    <React.Fragment>
      {randomHeights.map((n, index) => (
        <Skeleton
          key={index}
          variant="rectangular"
          animation="wave"
          height={n}
        />
      ))}
    </React.Fragment>
  );
}
