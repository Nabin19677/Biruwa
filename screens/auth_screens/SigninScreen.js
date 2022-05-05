import { StyleSheet, View } from "react-native";

import Header from "../../components/ui/texts/Header";

export default function SignInScreen() {
  return (
    <View style={style.container}>
      <View>
        <Header>Sign In!</Header>
      </View>
      <View></View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {},
});
