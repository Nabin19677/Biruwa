import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useSelector } from "react-redux";

//Components
import AuthNavigator from "./sub-navigators/auth.navigator";
import UserAreaNavigator from "./sub-navigators/user-area.navigator";

//Navigators
const Stack = createNativeStackNavigator();

export default function MainNavigator(props) {
  const authState = useSelector((state) => state.auth);
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="auth"
        screenOptions={{
          headerShown: false,
        }}
      >
        {authState.userToken == null ? (
          <Stack.Screen name="auth" component={AuthNavigator} />
        ) : (
          <Stack.Screen name="userarea" component={UserAreaNavigator} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
