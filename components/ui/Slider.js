import { Slider, Icon, useTheme } from "@rneui/themed";
import { StyleSheet, View } from "react-native";
export default function slider({ value, icon }) {
  const { theme } = useTheme();

  return (
    <View style={style.container}>
      <View>
        <Icon
          name={icon}
          raised
          type="font-awesome-5"
          size={13}
          color={theme?.colors.secondary}
        />
      </View>

      <View style={{ width: "80%" }}>
        <Slider
          value={value}
          maximumValue={100}
          minimumValue={0}
          minimumTrackTintColor={theme?.colors.primary}
          maximumTrackTintColor={theme?.colors.grey5}
          thumbStyle={{ backgroundColor: "transparent" }}
          thumbProps={{
            children: <></>,
          }}
          disabled={true}
        />
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
