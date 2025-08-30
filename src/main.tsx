import { StrictMode } from "react";

import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./app/app";
import Providers from "./app/providers";
import "./index.css";
// import "./transition.css";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./app/providers/theme-provider";
const queryClient = new QueryClient();
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Providers>
      <ThemeProvider>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter basename="/web-portfolio">
            <App />
          </BrowserRouter>
        </QueryClientProvider>
      </ThemeProvider>
    </Providers>
  </StrictMode>,
);
