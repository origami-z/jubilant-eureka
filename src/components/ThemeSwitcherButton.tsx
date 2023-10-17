import { Button } from "@salt-ds/core";
import { DarkIcon, LightIcon } from "@salt-ds/icons";

export const ThemeSwitcherButton = ({
  appThemeMode,
  setAppThemeMode,
}: {
  appThemeMode: "dark" | "light";
  setAppThemeMode: React.Dispatch<React.SetStateAction<"dark" | "light">>;
}) => {
  return (
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
  );
};
