import React from "react";

import InfiniteScroll from "react-infinite-scroll-component";
import {
  Box,
  ImageList,
  ImageListItem,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import { SearchResponse } from "../../api";
import Loading from "./Loading";

interface MasonryGridProps {
  fetchMore: () => Promise<void>;
  data: SearchResponse[];
  searchTerm: string;
  isLoading: boolean;
}

export default function MasonryGrid(props: MasonryGridProps) {
  const { data, searchTerm, fetchMore, isLoading } = props;
  const theme = useTheme();
  const largeScreenDown = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <React.Fragment>
      <Box mb={3}>
        <Typography fontSize="medium" variant="body2">
          Showing results for: <strong>{searchTerm}</strong>
        </Typography>
      </Box>

      <InfiniteScroll
        dataLength={data.length}
        next={fetchMore}
        hasMore={true}
        loader={<React.Fragment></React.Fragment>}
      >
        <ImageList variant="masonry" cols={largeScreenDown ? 1 : 4} gap={0}>
          {data.map((d, index) => (
            <ImageListItem key={index}>
              <img
                alt={d.title}
                src={d.images.fixed_width.url}
                loading="lazy"
              />
            </ImageListItem>
          ))}
          {isLoading && <Loading />}
        </ImageList>
      </InfiniteScroll>
    </React.Fragment>
  );
}
