import { StyleSheet, View } from "react-native";
import { Icon } from "@rneui/themed";
import colors from "../../styles/constants";

import Button from "../../components/ui/buttons/Button";
import Logo from "../../components/ui/Logo";
import Header from "../../components/ui/texts/Header";
import Text from "../../components/ui/texts/Text";

export default function AuthScreen({ navigation }) {
  const signIn = () => {
    navigation.navigate({ name: "signin" });
  };
  const signUp = () => {
    navigation.navigate({ name: "signup" });
  };
  return (
    <View style={style.container}>
      <View style={style.logo}>
        <Logo />
      </View>
      <View style={style.welcomeText}>
        <Header>Welcome</Header>
      </View>
      <View style={style.buttonContainer}>
        <Button title="SIGN IN" type="outline" onPress={signIn} />
        <Button title="SIGN UP" onPress={signUp} />
      </View>
      <View style={style.socialMedia}>
        <View>
          <Text>Login with Social Media</Text>
        </View>
        <View style={style.iconGroup}>
          <Icon
            raised
            name="google"
            type="font-awesome"
            color={colors.google_color}
          />
          <Icon
            raised
            name="facebook"
            type="font-awesome"
            color={colors.facebook_color}
          />
        </View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {},
  welcomeText: {
    marginVertical: 30,
  },
  buttonContainer: {
    marginVertical: 30,
    width: "90%",
    justifyContent: "space-between",
    flexGrow: 0.05,
  },
  socialMedia: {
    alignItems: "center",
  },
  iconGroup: {
    flexDirection: "row",
    marginTop: 5,
  },
});
