import { useState } from "react";

import { Box, CssBaseline, Container, Typography } from "@mui/material";
import { Masonry } from "@mui/lab";
import { ThemeProvider } from "@mui/material/styles";

import { themeDark, themeLight } from "./theme";
import GiphyGrabberAppBar from "./components/AppBar";
import Search from "./components/Search";
import GiphyApi, { SearchResponse } from "./api";
import Navigation from "./components/Navigation";
import MasonryGrid from "./components/SearchResults/MasonryGrid";
import Loading from "./components/SearchResults/Loading";

const giphyApi = new GiphyApi();

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState<SearchResponse[] | undefined>(undefined);

  const searchGiphy = async (query: string) => {
    setData(undefined);
    setSearchTerm(query);
    setIsLoading(true);

    const response = await giphyApi.search(query);
    setData(response);
    setIsLoading(false);
  };

  const fetchMore = async () => {
    if (!data) {
      return;
    }

    setIsLoading(true);
    const response = await giphyApi.search(searchTerm, data.length);
    if (!!response) {
      setData([...data, ...response]);
    }
    setIsLoading(false);
  };

  return (
    <ThemeProvider theme={isDarkMode ? themeDark : themeLight}>
      <CssBaseline />
      <Container maxWidth="lg">
        <GiphyGrabberAppBar
          isDarkMode={isDarkMode}
          setIsDarkMode={setIsDarkMode}
        />
        <Search searchGiphy={searchGiphy} />

        <Box py={3}>
          {isLoading && (
            <Masonry columns={{ lg: 4 }} spacing={0}>
              <Loading />
            </Masonry>
          )}
          {!!data && data.length === 0 && (
            <Typography>No results found!</Typography>
          )}
          {!!data && data.length > 0 && (
            <MasonryGrid
              fetchMore={fetchMore}
              searchTerm={searchTerm}
              data={data}
              isLoading={isLoading}
            />
          )}
        </Box>
      </Container>
      <Navigation />
    </ThemeProvider>
  );
}

export default App;
