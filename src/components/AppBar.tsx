import { AppBar, Box, IconButton, Typography } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

import darkLogo from "../assets/giphy-icon-dark.png";
import lightLogo from "../assets/giphy-icon-light.png";

const LOGO_DIMENSIONS = 25;

interface GiphyGrabberAppBarProps {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function GiphyGrabberAppBar(props: GiphyGrabberAppBarProps) {
  const { isDarkMode, setIsDarkMode } = props;

  return (
    <AppBar>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box py={1.5} sx={{ display: "flex", alignItems: "center" }}>
          <Box
            mr={1.5}
            sx={{ height: LOGO_DIMENSIONS, width: LOGO_DIMENSIONS }}
          >
            <img src={isDarkMode ? darkLogo : lightLogo} alt="Giphy logo" />
          </Box>
          <Typography variant="h1">Giphy Grabber</Typography>
        </Box>

        <IconButton onClick={() => setIsDarkMode(!isDarkMode)}>
          {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </Box>
    </AppBar>
  );
}
