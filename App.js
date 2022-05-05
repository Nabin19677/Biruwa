import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { store } from "./store";

import MainNavigator from "./navigator/MainNavigator";

export default function App() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    </SafeAreaProvider>
  );
}
