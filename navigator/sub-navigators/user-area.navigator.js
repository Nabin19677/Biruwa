import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Icon } from "@rneui/themed";
import colors from "../../styles/constants";
//components
import MyPlants from "../../screens/app_screens/MyPlants";
import Shop from "../../screens/app_screens/Shop";
import Setting from "../../screens/app_screens/Setting";
import { StyleSheet } from "react-native";
const Tab = createMaterialBottomTabNavigator();

export default function UserAreaNavigator(props) {
  return (
    <Tab.Navigator
      barStyle={style.barStyle}
      activeColor="#f0eef6"
      inactiveColor="#dddddd"
    >
      <Tab.Screen
        name="myplants"
        component={MyPlants}
        options={{
          tabBarLabel: "My Plants",
          tabBarIcon: ({ color }) => (
            <Icon name="seedling" type="font-awesome-5" color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="shop"
        component={Shop}
        options={{
          tabBarLabel: "Shop",
          tabBarIcon: ({ color }) => (
            <Icon name="shopping-basket" type="font-awesome-5" color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="setting"
        component={Setting}
        options={{
          tabBarLabel: "Setting",
          tabBarIcon: ({ color }) => (
            <Icon name="cog" type="font-awesome-5" color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const style = StyleSheet.create({
  barStyle: {
    backgroundColor: colors.primary_color,
    paddingVertical: 3,
  },
});
