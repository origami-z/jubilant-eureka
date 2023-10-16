import { SaltProvider } from "@salt-ds/core";
import { useState } from "react";
import { DEFAULT_REACT_TYPESCRIPT_CRA_FILES } from "./components/sandpack";
import { DEFAULT_TOKENS } from "./themes/sample-tokens/default";
import { getInitialPreviewMode, getInitialTheme } from "./utils";

import "./App.css";
import { ThemePanel } from "./components/ThemePanel";
import { KitchenSink } from "./components/KitchenSink";

// Gets theme from URL if any
const initialTheme = getInitialTheme(DEFAULT_TOKENS);
const initialPreviewMode = getInitialPreviewMode("light");
const CUSTOM_SETUP = DEFAULT_REACT_TYPESCRIPT_CRA_FILES(
  initialTheme,
  initialPreviewMode as any
);

const App = () => {
  const [appTheme, setAppTheme] = useState<"light" | "dark">("light");
  return (
    <SaltProvider mode={appTheme} applyClassesTo="root">
      <KitchenSink />
      <ThemePanel
        initialTheme={initialTheme}
        onToggleAppThemeMode={() =>
          setAppTheme((prev) => (prev === "light" ? "dark" : "light"))
        }
      />
    </SaltProvider>
  );
};
export default App;
