import { Avatar, Icon } from "@rneui/themed";
import { StyleSheet, View } from "react-native";
import Text from "../components/ui/texts/Text";
import { Text as Heading, useTheme } from "@rneui/themed";

export default function DailyTips({ text }) {
  const { theme } = useTheme();

  return (
    <View style={[style.container, { backgroundColor: theme?.colors.grey5 }]}>
      <View>
        <Icon
          name="umbrella"
          type="font-awesome-5"
          size={48}
          color={theme?.colors.secondary}
        />
      </View>
      <View style={style.textbox}>
        <Text>Daily Tips</Text>
        <Heading h4 style={{ color: theme?.colors.primary }}>
          {text}
        </Heading>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    padding: 12,
    borderRadius: 8,
  },
  textbox: {
    flex: 1,
    flexGrow: 1,
    marginLeft: 20,
  },
});
