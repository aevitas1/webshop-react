import { createTheme } from "@mui/material/styles";
import MuiButton from "./MuiButton";
import typography from "./typography";
import palette from "./palette";
import MuiLink from "./MuiLink";
import MuiContainer from './MuiContainer';

export const Theme = createTheme({
    palette,
    components: {
        MuiButton,
        MuiLink,
        MuiContainer
    },
    typography,
});