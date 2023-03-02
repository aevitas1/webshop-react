import { createTheme } from "@mui/material/styles";
import MuiButton from "./MuiButton";
import typography from "./typography";
import palette from "./palette";
import MuiLink from "./MuiLink";
import MuiContainer from './MuiContainer';
import MuiAccordion from "./Accordion/MuiAccordion";
import MuiAccordionDetails from "./Accordion/MuiAccordionDetails";
import MuiAccordionSummary from "./Accordion/MuiAccordionSummary";
import MuiTextField from "./MuiTextField";
import MuiModal from "./MuiModal";


export const Theme = createTheme({
    palette,
    components: {
        MuiButton,
        MuiLink,
        MuiContainer,
        MuiAccordion,
        MuiAccordionDetails,
        MuiAccordionSummary,
        MuiTextField,
        MuiModal
    },
    typography,
});