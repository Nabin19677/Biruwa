import { StyleSheet, Text } from "react-native";
import { moderateScale } from "../../../utils/scale";

export default function header(props) {
  return (
    <Text
      style={[
        style.text,
        { color: props.white ? "white" : "black" },
        props.style,
      ]}
    >
      {props.children}
    </Text>
  );
}

const style = StyleSheet.create({
  text: {
    fontSize: moderateScale(32),
  },
});
