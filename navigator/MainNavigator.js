import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useSelector } from "react-redux";

//Components
import LoginScreen from "../screens/auth_screens/LoginScreen";
import HomeScreen from "../screens/app_screens/HomeScreen";

//Navigators
const Stack = createNativeStackNavigator();

export default function MainNavigator(props) {
  const authState = useSelector((state) => state.auth);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="login">
        {authState.userToken == null ? (
          <Stack.Screen name="login" component={LoginScreen} />
        ) : (
          <Stack.Screen name="home" component={HomeScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
