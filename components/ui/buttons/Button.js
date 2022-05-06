import { Button } from "@rneui/themed";
import { StyleSheet } from "react-native";

export default function button(props) {
  return <Button buttonStyle={style.buttonStyle} {...props}></Button>;
}

const style = StyleSheet.create({
  buttonStyle: {
    borderRadius: 15,
    paddingVertical: 15,
  },
});
