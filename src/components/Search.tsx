import React, { useState } from "react";

import { InputAdornment, IconButton, FilledInput } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useLocalStorage } from "react-use";

import SearchHistory from "./SearchHistory";

const MAX_SEARCH_HISTORY_NUM = 7;

interface SearchProps {
  searchGiphy: (query: string) => Promise<void>;
}

export default function Search(props: SearchProps) {
  const { searchGiphy } = props;
  const [query, setQuery] = useState("");
  const [searchHistory, setSearchHistory] = useLocalStorage<string[]>(
    "searchHistory",
    []
  );

  const doSearch = (q: string = query) => {
    if (q !== query) {
      setQuery(q);
    }

    // ignore empty searches from here on
    if (q === "") {
      return;
    }

    // only add to search history if the query isn't already the
    // first item in the history
    if (!!searchHistory && q !== searchHistory[0]) {
      setSearchHistory([q, ...searchHistory].slice(0, MAX_SEARCH_HISTORY_NUM));
    }
    searchGiphy(q);
  };

  return (
    <React.Fragment>
      <FilledInput
        fullWidth
        placeholder="Search..."
        hiddenLabel
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            doSearch();
          }
        }}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              color="secondary"
              aria-label="submit search"
              onClick={() => doSearch()}
            >
              <SearchIcon
                sx={{
                  transform: "rotate(90deg)",
                }}
                fontSize="large"
              />
            </IconButton>
          </InputAdornment>
        }
      />
      <SearchHistory doSearch={doSearch} searchHistory={searchHistory} />
    </React.Fragment>
  );
}
