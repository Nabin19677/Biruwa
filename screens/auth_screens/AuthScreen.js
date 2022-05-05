import { StyleSheet, Text, View } from "react-native";
import globalStyle from "../../style";

import Button from "../../components/ui/Button";
import Logo from "../../components/ui/Logo";
import Header from "../../components/ui/texts/Header";

export default function AuthScreen() {
  return (
    <View style={globalStyle.container}>
      <View style={style.logo}>
        <Logo />
      </View>
      <View style={style.welcomeText}>
        <Header>Welcome</Header>
      </View>
      <View style={style.buttonContainer}>
        <Button title="SIGN IN" type="outline" />
        <Button title="SIGN UP" />
      </View>
      <View style={style.socialMedia}>
        <View>
          <Text>Login with Social Media</Text>
        </View>
        <View>
          <Text>Google / Facebook</Text>
        </View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  logo: {},
  welcomeText: {},
  buttonContainer: {},
  socialMedia: {},
});
