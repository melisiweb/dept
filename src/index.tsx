import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import { Theme } from "./design-system/components/theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Theme>
      <App />
    </Theme>
  </React.StrictMode>
);
