import React from "react";

import { Box, List, ListItem, Button, Typography } from "@mui/material";

interface SearchHistoryProps {
  doSearch: (q: string) => void;
  searchHistory: string[] | undefined;
}

export default function SearchHistory(props: SearchHistoryProps) {
  const { doSearch, searchHistory } = props;

  if (!searchHistory || searchHistory.length === 0) {
    return <React.Fragment></React.Fragment>;
  }

  return (
    <Box sx={{ display: "flex", alignItems: "center", overflowX: "auto" }}>
      <Typography fontSize="small" variant="body2" sx={{ width: "7%" }}>
        Previous Searches:
      </Typography>
      <List sx={{ display: "flex" }}>
        {searchHistory.map((s, index) => (
          <ListItem key={index}>
            <Button variant="text" onClick={() => doSearch(s)}>
              {s}
            </Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
