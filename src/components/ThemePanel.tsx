import { Button, FlexItem, FlexLayout, Panel } from "@salt-ds/core";
import { useEffect, useRef, useState } from "react";
import { ThemeEditor } from "./ThemeEditor";

import "./ThemePanel.css";
import { DEFAULT_REACT_TYPESCRIPT_CRA_FILES, getCodeForCSS } from "./sandpack";
import { getInitialPreviewMode, getInitialTheme } from "../utils";
import { DEFAULT_TOKENS } from "../themes/sample-tokens/default";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@salt-ds/icons";
import { ArrowLeft } from "@salt-ds/lab/dist-types/common-hooks";

const THEME_PANEL_CUSTOM_CLASS = "theme-panel-custom-theme";

// Gets theme from URL if any
const initialTheme = getInitialTheme(DEFAULT_TOKENS);
const initialPreviewMode = getInitialPreviewMode("light");
const CUSTOM_SETUP = DEFAULT_REACT_TYPESCRIPT_CRA_FILES(
  initialTheme,
  initialPreviewMode as any
);

export const ThemePanel = () => {
  const [customTheme, setCustomTheme] = useState<any>(initialTheme);

  const rootRef = useRef<HTMLDivElement | null>(null);
  const styleElement = useRef<HTMLStyleElement | null>(null);

  const [showPanel, setShowPanel] = useState(true);

  useEffect(() => {
    console.log("rootRef", rootRef.current);
    if (rootRef.current) {
      const saltThemeElement = rootRef.current.closest(".salt-theme");
      if (saltThemeElement) {
        saltThemeElement.classList.add(THEME_PANEL_CUSTOM_CLASS);

        styleElement.current = document.createElement("style");
        document.head.appendChild(styleElement.current);

        styleElement.current.setAttribute("type", "text/css");
        // styleElement.current.setAttribute("data-salt-style", testId || "");
        styleElement.current.textContent = getCodeForCSS(
          customTheme,
          THEME_PANEL_CUSTOM_CLASS
        );
      } else {
        console.warn("Can not find element with `.salt-theme`");
      }
    }
  }, []);

  useEffect(() => {
    if (styleElement.current) {
      styleElement.current.textContent = getCodeForCSS(
        customTheme,
        THEME_PANEL_CUSTOM_CLASS
      );
    } else {
      console.warn("No styleElement found, skip updating CSS styles");
    }
  }, [customTheme]);

  useEffect(() => {
    console.log({ customTheme });
  }, [customTheme]);

  return (
    <Panel className="theme-panel" ref={rootRef}>
      {showPanel ? (
        <ThemeEditor
          themeObj={customTheme}
          onThemeObjChange={(newTheme) => setCustomTheme(newTheme)}
        />
      ) : null}
      <Button
        className="show-hide-button"
        variant="secondary"
        onClick={() => setShowPanel((s) => !s)}
      >
        {showPanel ? <ChevronRightIcon /> : <ChevronLeftIcon />}
      </Button>
    </Panel>
  );
};
