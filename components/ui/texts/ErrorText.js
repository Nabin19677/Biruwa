import { StyleSheet, Text } from "react-native";
import { moderateScale } from "../../../utils/scale";
import colors from "../../../styles/constants";

export default function errorText(props) {
  return (
    <Text style={[style.text]} {...props}>
      {props.children}
    </Text>
  );
}

const style = StyleSheet.create({
  text: {
    fontSize: moderateScale(10),
    color: colors.error_color,
  },
});
