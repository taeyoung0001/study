import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import NaviBar from "./components/nav.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <NaviBar />
    <App />
  </BrowserRouter>
);
