import { createNativeStackNavigator } from "@react-navigation/native-stack";

//components
import AuthScreen from "../../screens/auth_screens/AuthScreen";
import SignInScreen from "../../screens/auth_screens/SignInScreen";
import SignUpScreen from "../../screens/auth_screens/SignUpScreen";

const Stack = createNativeStackNavigator();

export default function AuthNavigator(props) {
  return (
    <Stack.Navigator
      initialRouteName="auth_main"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="auth_main" component={AuthScreen} />
      <Stack.Screen name="signin" component={SignInScreen} />
      <Stack.Screen name="signup" component={SignUpScreen} />
    </Stack.Navigator>
  );
}
