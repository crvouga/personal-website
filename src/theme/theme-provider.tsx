import { CssBaseline } from "@material-ui/core";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { PropsWithChildren } from "react";
import { createTheme } from "./theme";

interface IThemeProviderProps extends PropsWithChildren<{}> {}

export default function ThemeProvider(props: IThemeProviderProps) {
  const { children } = props;

  return (
    <MuiThemeProvider theme={createTheme("light")}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
}
