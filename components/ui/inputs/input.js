import { StyleSheet, View } from "react-native";
import { Input } from "@rneui/themed";
import Text from "../texts/Text";
import ErrorText from "../texts/ErrorText";

export default function input(props) {
  return (
    <View style={style.container}>
      <Input label={<Text>{props.name}</Text>} {...props} />
      {/* <ErrorText>Not good</ErrorText> */}
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});
