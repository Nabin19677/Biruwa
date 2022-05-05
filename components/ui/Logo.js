import { Image, StyleSheet, View } from "react-native";

export default function logo() {
  return (
    <View styles={style.container}>
      <Image
        styles={style.logo}
        source={require("../../assets/logo_256_text.png")}
      />
    </View>
  );
}

const style = StyleSheet.create({
  container: {},
  logo: {},
});
