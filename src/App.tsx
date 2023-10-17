import { Button, SaltProvider } from "@salt-ds/core";
import { DarkIcon, LightIcon } from "@salt-ds/icons";
import { useState } from "react";
import { KitchenSink } from "./components/KitchenSink";
import { ThemePanel } from "./components/ThemePanel";

import "./App.css";

const App = () => {
  const [appThemeMode, setAppThemeMode] = useState<"light" | "dark">("light");
  return (
    <SaltProvider mode={appThemeMode} applyClassesTo="root">
      <KitchenSink />
      <Button
        variant="secondary"
        onClick={() =>
          setAppThemeMode((prev) => (prev === "light" ? "dark" : "light"))
        }
        aria-label="Toggle theme mode"
        className="theme-mode-toggle"
      >
        {appThemeMode === "dark" ? (
          <DarkIcon aria-label="Dark mode" />
        ) : (
          <LightIcon aria-label="Light mode" />
        )}
      </Button>
      <ThemePanel />
    </SaltProvider>
  );
};
export default App;
