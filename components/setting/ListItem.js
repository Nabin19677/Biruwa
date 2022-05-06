import { useState } from "react";
import { Avatar, ListItem, Icon, Switch } from "@rneui/themed";
import { Text, View } from "react-native";

export default function listItem({ name, icon }) {
  return (
    <ListItem
      containerStyle={{
        justifyContent: "space-between",
        padding: 0,
        paddingHorizontal: 10,
      }}
      bottomDivider
    >
      <View
        style={{
          paddingVertical: 15,
          paddingHorizontal: 10,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View style={{ width: 32 }}>
          <Icon name={icon} type="font-awesome-5" />
        </View>

        <Text style={{ marginLeft: 10 }}>{name}</Text>
      </View>

      <ListItem.Chevron />
    </ListItem>
  );
}
