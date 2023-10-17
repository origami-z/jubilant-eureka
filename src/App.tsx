import { SaltProvider } from "@salt-ds/core";
import { useState } from "react";
import { KitchenSink } from "./components/KitchenSink";
import { ThemePanel } from "./components/ThemePanel";
import { ThemeSwitcherButton } from "./components/ThemeSwitcherButton";

import "./App.css";

const App = () => {
  const [appThemeMode, setAppThemeMode] = useState<"light" | "dark">("light");
  return (
    <SaltProvider mode={appThemeMode} applyClassesTo="root">
      <KitchenSink />
      <ThemeSwitcherButton
        appThemeMode={appThemeMode}
        setAppThemeMode={setAppThemeMode}
      />
      <ThemePanel />
    </SaltProvider>
  );
};
export default App;
