import MonacoEditor from "@monaco-editor/react";
import { StackLayout, Card, ToggleButton, Tooltip } from "@salt-ds/core";
import { DocumentIcon } from "@salt-ds/icons";
import { useState } from "react";
import { TemplatePicker } from "./visual-editor/TemplatePicker";
import { ThemeRenderer } from "./visual-editor/ThemeRenderer";

import "./ThemeEditor.css";

export const ThemeEditor = ({
  themeObj,
  onThemeObjChange,
  applyTheme,
  onApplyThemeChange,
}: {
  themeObj: any;
  onThemeObjChange: (newThemeObj: any) => void;
  applyTheme: boolean;
  onApplyThemeChange: (newValue: boolean) => void;
}) => {
  const [themeName, setThemeName] = useState("Custom theme");
  const [showCodeEditor, setShowCodeEditor] = useState(false);
  return (
    <StackLayout className="theme-editor" style={{ height: "100%" }} gap={1}>
      <Card
        className={
          "theme-renderer-card" + (showCodeEditor ? " code-editor-card" : "")
        }
      >
        <StackLayout className="theme-renderer-card-inner">
          <TemplatePicker
            onThemeObjChange={(newTheme, newName) => {
              onThemeObjChange(newTheme);
              setThemeName(newName);
            }}
            themeObj={themeObj}
            applyTheme={applyTheme}
            onApplyThemeChange={onApplyThemeChange}
          />
          <Tooltip content="Use code editor to change value type or modify">
            <ToggleButton
              className="show-code-editor-toggle"
              selected={showCodeEditor}
              onChange={() => setShowCodeEditor((prev) => !prev)}
              value={undefined}
            >
              <DocumentIcon aria-hidden /> JSON
            </ToggleButton>
          </Tooltip>
          {showCodeEditor ? (
            <MonacoEditor
              width="100%"
              height="100%"
              language="json"
              theme="vs-light"
              // TODO: find a reliable way to update code editor value, when
              // 1. select theme template / update from visual editor would update code
              // 2. code from monaco would only update theme object when being valid
              key={themeName}
              defaultValue={JSON.stringify(themeObj, null, 2)}
              onChange={(value) => {
                try {
                  onThemeObjChange(JSON.parse(value || ""));
                } catch {
                  console.log("Invalid JSON, ignore updating theme");
                }
              }}
            />
          ) : (
            <ThemeRenderer
              name={themeName}
              themeObj={themeObj}
              onThemeObjChange={(newTheme) => onThemeObjChange(newTheme)}
            />
          )}
        </StackLayout>
      </Card>
    </StackLayout>
  );
};
