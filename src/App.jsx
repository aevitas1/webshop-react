import "./App.css";
import Layout from "./components/Layout";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { Theme } from "./theme/Theme";

function App() {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <CssBaseline />
        <Layout />
      </ThemeProvider>
    </>
  );
}

export default App;
