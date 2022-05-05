import { createNativeStackNavigator } from "@react-navigation/native-stack";

//components
import HomeScreen from "../../screens/app_screens/HomeScreen";
const Stack = createNativeStackNavigator();

export default function UserAreaNavigator(props) {
  return (
    <Stack.Navigator
      initialRouteName="home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="home" component={HomeScreen} />
    </Stack.Navigator>
  );
}
