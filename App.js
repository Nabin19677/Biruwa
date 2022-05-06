import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeProvider } from "@rneui/themed";
import { Provider } from "react-redux";
import { store } from "./store";

import MainNavigator from "./navigator/MainNavigator";
import theme from "./styles/theme";

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <MainNavigator />
        </Provider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
