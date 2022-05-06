import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

//components
import MyPlants from "../../screens/app_screens/MyPlants";
import Shop from "../../screens/app_screens/Shop";
import Setting from "../../screens/app_screens/Setting";
const Tab = createMaterialBottomTabNavigator();

export default function UserAreaNavigator(props) {
  return (
    <Tab.Navigator>
      <Tab.Screen name="myplants" component={MyPlants} />
      <Tab.Screen name="shop" component={Shop} />
      <Tab.Screen name="setting" component={Setting} />
    </Tab.Navigator>
  );
}
