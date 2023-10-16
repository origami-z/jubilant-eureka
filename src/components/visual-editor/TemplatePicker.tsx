import { ShareIcon, LightIcon, DarkIcon } from "@salt-ds/icons";
import { Dropdown, DropdownButton, Toolbar, ToolbarButton } from "@salt-ds/lab";
import { DEFAULT_TOKENS } from "../../themes/sample-tokens/default";
import { SampleToken1 } from "../../themes/sample-tokens/sample1";
import { shareTheme } from "../../utils";
import {
  APP_TEMPLATE_1,
  APP_TEMPLATE_2,
  APP_TEMPLATE_F,
} from "../sandpack/code-templates";
import { useTheme } from "@salt-ds/core";

const ThemeTemplate = [
  {
    name: "Sample 0",
    theme: DEFAULT_TOKENS,
  },
  {
    name: "Sample 1",
    theme: SampleToken1,
  },
];

const AppCodeTemplate = [
  {
    name: "Product home page",
    template: APP_TEMPLATE_F,
  },
  {
    name: "List with buttons",
    template: APP_TEMPLATE_1,
  },
  {
    name: "Toolbar with grid",
    template: APP_TEMPLATE_2,
  },
];

export const TemplatePicker = ({
  themeObj,
  onThemeObjChange,
  onToggleAppThemeMode,
}: {
  themeObj: any;
  onThemeObjChange?: (newThemeObj: any, name: string) => void;
  onToggleAppThemeMode: () => void;
}) => {
  const { mode } = useTheme();

  return (
    <Toolbar className="template-picker-toolbar">
      <Dropdown
        aria-label="Pick theme template"
        selected={null}
        source={ThemeTemplate}
        itemToString={(item) => (item ? item.name : "")}
        onSelectionChange={(_, item) =>
          item && onThemeObjChange?.(item.theme, "Custom theme -" + item.name)
        }
        triggerComponent={<DropdownButton label={"Theme template"} />}
        width={160}
      />

      <ToolbarButton onClick={() => onToggleAppThemeMode()} data-align-end>
        {/* TODO: Salt Toolbar button doesn't reflect children change */}
        {mode === "dark" ? (
          <>
            <DarkIcon aria-label="Dark mode" /> Dark mode
          </>
        ) : (
          <>
            <LightIcon aria-label="Light mode" /> Light mode
          </>
        )}
      </ToolbarButton>
      <ToolbarButton onClick={() => shareTheme(themeObj)} data-align-end>
        <ShareIcon /> Theme
      </ToolbarButton>
    </Toolbar>
  );
};
