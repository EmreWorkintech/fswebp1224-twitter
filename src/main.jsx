import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min.js";
import { ToastContainer } from "react-toastify";
import { UserContextProvider } from "./contexts/UserContext.jsx";
import { Provider } from "react-redux";
import { myStore } from "./store/store.js";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <UserContextProvider>
        <Provider store={myStore}>
          <QueryClientProvider client={queryClient}>
            <App />
            <ReactQueryDevtools initialIsOpen />
          </QueryClientProvider>
        </Provider>
      </UserContextProvider>
      <ToastContainer />
    </BrowserRouter>
  </StrictMode>
);
