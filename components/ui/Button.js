import { Button } from "@rneui/themed";
import { StyleSheet } from "react-native";

export default function button(props) {
  return (
    <Button
      buttonStyle={style.buttonStyle}
      containerStyle={style.containerStyle}
      {...props}
    ></Button>
  );
}

const style = StyleSheet.create({
  buttonStyle: {
    borderRadius: 15,
    padding: 15,
    fontSize: 22,
  },
  containerStyle: {
    marginHorizontal: 5,
  },
});