import { StyleSheet, Text, PixelRatio } from "react-native";

export default function Header(props) {
  return <Text style={[style.text]}>{props.children}</Text>;
}

const style = StyleSheet.create({
  text: {
    fontSize: 32,
  },
});
