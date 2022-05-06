import { Button } from "@rneui/themed";
import { StyleSheet } from "react-native";

export default function SmallButton(props) {
  return (
    <Button
      buttonStyle={style.buttonStyle}
      containerStyle={style.containerStyle}
      titleStyle={style.titleStyle}
      {...props}
    ></Button>
  );
}

const style = StyleSheet.create({
  buttonStyle: {},
  containerStyle: {},
  titleStyle: {
    fontSize: 14,
  },
});
