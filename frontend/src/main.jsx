import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { WorkProvider } from "./components/context/WorkContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <WorkProvider>
    <App />
  </WorkProvider>
  // {/* </React.StrictMode> */}
);
