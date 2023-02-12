import { Fab } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { useWindowScroll } from "react-use";

const Y_SCROLL_THRESHOLD = 500;

export default function Navigation() {
  const { y } = useWindowScroll();

  return (
    <Fab
      sx={{
        display: y > Y_SCROLL_THRESHOLD ? "block" : "none",
        position: "fixed",
        bottom: (theme) => theme.spacing(2),
        right: (theme) => theme.spacing(2),
      }}
      color="primary"
      aria-label="scroll to top"
      onClick={() => window.scroll({ top: 0, behavior: "smooth" })}
    >
      <ArrowUpwardIcon />
    </Fab>
  );
}
