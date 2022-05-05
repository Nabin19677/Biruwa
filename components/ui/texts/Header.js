import { StyleSheet, Text } from "react-native";
import { moderateScale } from "../../../utils/scale";

export default function header(props) {
  return (
    <Text style={[style.text]} {...props}>
      {props.children}
    </Text>
  );
}

const style = StyleSheet.create({
  text: {
    fontSize: moderateScale(32),
  },
});
