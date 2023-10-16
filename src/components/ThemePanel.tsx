import { FlexItem, FlexLayout, Panel } from "@salt-ds/core";
import { useState } from "react";
import { ThemeEditor } from "./ThemeEditor";

import "./ThemePanel.css";

export const ThemePanel = ({
  initialTheme,
  onToggleAppThemeMode,
}: {
  initialTheme: any;
  onToggleAppThemeMode: () => void;
}) => {
  const [customTheme, setCustomTheme] = useState<any>(initialTheme);

  // TODO: set style injected into head, with `getCodeForCSS`

  return (
    <Panel className="theme-panel">
      <ThemeEditor
        themeObj={customTheme}
        onThemeObjChange={(newTheme) => setCustomTheme(newTheme)}
        onToggleAppThemeMode={onToggleAppThemeMode}
      />
    </Panel>
  );
};
