import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import App from "./app";
import { Theme } from "./design-system/components/theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <RecoilRoot>
    <BrowserRouter>
      <Theme>
        <App />
      </Theme>
    </BrowserRouter>
  </RecoilRoot>
);
