import { SaltProvider } from "@salt-ds/core";
import { useState } from "react";
import { DEFAULT_REACT_TYPESCRIPT_CRA_FILES } from "./components/sandpack";
import { DEFAULT_TOKENS } from "./themes/sample-tokens/default";
import { getInitialPreviewMode, getInitialTheme } from "./utils";

import "./App.css";
import { ThemePanel } from "./components/ThemePanel";
import { KitchenSink } from "./components/KitchenSink";

const App = () => {
  const [appTheme, setAppTheme] = useState<"light" | "dark">("light");
  return (
    <SaltProvider mode={appTheme} applyClassesTo="root">
      <KitchenSink />
      <ThemePanel
        onToggleAppThemeMode={() =>
          setAppTheme((prev) => (prev === "light" ? "dark" : "light"))
        }
      />
    </SaltProvider>
  );
};
export default App;
