import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <div>
        <GlobalStyle/>
        <h1>Hello Component App</h1>
      </div>
    </ThemeProvider>
  )
}

