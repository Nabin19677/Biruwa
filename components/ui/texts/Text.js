import { StyleSheet, Text } from "react-native";
import { moderateScale } from "../../../utils/scale";

export default function text(props) {
  return (
    <Text style={[style.text]} {...props}>
      {props.children}
    </Text>
  );
}

const style = StyleSheet.create({
  text: {
    fontSize: moderateScale(15),
    color: "rgba(0, 0, 0, 0.55)",
  },
});
