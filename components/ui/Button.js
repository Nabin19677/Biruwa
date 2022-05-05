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
    paddingHorizontal: 150,
  },
  containerStyle: {
    marginHorizontal: 5,
    marginVertical: 10,
  },
});
