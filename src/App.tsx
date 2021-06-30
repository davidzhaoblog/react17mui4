import { CssBaseline, ThemeProvider } from "@material-ui/core";
import { CookiesProvider } from "react-cookie";
import { useTranslation } from "react-i18next";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import MasterLayout from "./layout/MasterLayout";
import store from "./store/Store";
import theme from "./theme";
import "./i18n"

export default function App() {
  const { t } = useTranslation(["UIStringResourcePerApp"]);
  document.title = t("UIStringResourcePerApp:Application_Title");

  return (
    <CookiesProvider>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <BrowserRouter>
            <CssBaseline />
            <MasterLayout theme={theme} />
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    </CookiesProvider>
  );
}