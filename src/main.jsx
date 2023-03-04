import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { AppProvider } from "./context/AppContext";
import { LoginProvider } from "./context/LoginContext";
import { QueryClient, QueryClientProvider } from "react-query";

import "@fontsource/montserrat";
import "@fontsource/montserrat/300.css";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/700.css";
import "@fontsource/montserrat/800.css";
import "@fontsource/montserrat/900.css";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppProvider>
      <Router>
        <LoginProvider>
          <QueryClientProvider client={queryClient}>
            <App />
          </QueryClientProvider>
        </LoginProvider>
      </Router>
    </AppProvider>
  </React.StrictMode>
);
