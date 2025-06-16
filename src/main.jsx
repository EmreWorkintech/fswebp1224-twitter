import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min.js";
import { ToastContainer } from "react-toastify";
import { UserContextProvider } from "./contexts/UserContext.jsx";
import { Provider } from "react-redux";
import { myStore } from "./store/store.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <UserContextProvider>
        <Provider store={myStore}>
          <App />
        </Provider>
      </UserContextProvider>
      <ToastContainer />
    </BrowserRouter>
  </StrictMode>
);
