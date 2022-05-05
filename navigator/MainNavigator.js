import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useSelector } from "react-redux";

//Components
import AuthScreen from "../screens/auth_screens/AuthScreen";
import HomeScreen from "../screens/app_screens/HomeScreen";

//Navigators
const Stack = createNativeStackNavigator();

export default function MainNavigator(props) {
  const authState = useSelector((state) => state.auth);
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="home"
        screenOptions={{
          headerShown: false,
        }}
      >
        {authState.userToken == null ? (
          <Stack.Screen name="auth" component={AuthScreen} />
        ) : (
          <Stack.Screen name="home" component={HomeScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
