import { StyleSheet } from "react-native";
import { Avatar, ListItem } from "@rneui/themed";
import TouchableScale from "react-native-touchable-scale";
import { LinearGradient } from "expo-linear-gradient";
import constants from "../styles/constants";

export default function profileInfoCard({ name, email }) {
  return (
    <ListItem
      Component={TouchableScale}
      friction={90}
      tension={100}
      activeScale={0.95} //
      linearGradientProps={{
        colors: [constants.primary_color, constants.secondary_color],
        start: { x: 0, y: 0 },
        end: { x: 1, y: 1 },
      }}
      ViewComponent={LinearGradient}
    >
      <Avatar rounded source={require("../assets/avatar.png")} />
      <ListItem.Content>
        <ListItem.Title style={{ color: "white", fontWeight: "bold" }}>
          {name}
        </ListItem.Title>
        <ListItem.Subtitle style={{ color: "white" }}>
          {email}
        </ListItem.Subtitle>
      </ListItem.Content>
      <ListItem.Chevron color="white" />
    </ListItem>
  );
}

const style = StyleSheet.create({});
