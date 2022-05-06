import { ScrollView, StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { moderateScale } from "../../utils/scale";
import Header from "../../components/ui/texts/Header";
import Text from "../../components/ui/texts/Text";
import Button from "../../components/ui/buttons/Button";
import SmallButton from "../../components/ui/buttons/SmallButton";
import Input from "../../components/ui/inputs/input";
import colors from "../../styles/constants";

export default function SignUpScreen(props) {
  const signIn = () => {
    props.navigation.navigate({ name: "signin" });
  };

  const signUp = () => {
    props.navigation.navigate({ name: "signup" });
  };
  return (
    <View style={style.container}>
      <LinearGradient
        colors={[colors.primary_color, "transparent"]}
        end={{ x: 2.1, y: 1 }}
        style={style.top}
      >
        <View>
          <Header white>Create Your Account</Header>
        </View>
      </LinearGradient>
      <View style={style.body}>
        <View style={style.formbox}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View>
              <Input placeholder="Your Name" name="Name" />
              <Input placeholder="example@gmail.com" name="Email" />
              <Input placeholder="···········" name="Password" />

              <Input placeholder="···········" name="Confirm Password" />
            </View>
            <View style={style.forgotPassword}>
              <Text>Forgot Password?</Text>
            </View>
            <View>
              <Button title="SIGN UP" onPress={signUp} />
            </View>
            <View style={style.bottom}>
              <Text style={style.smallText}>Don't have account?</Text>
              <SmallButton title="SIGN IN" type="clear" onPress={signIn} />
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  top: {
    height: "35%",
    justifyContent: "center",
    paddingLeft: "5%",
  },
  body: {
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    backgroundColor: "white",
    position: "absolute",
    width: "100%",
    height: "80%",
    top: "25%",
    padding: "5%",
  },
  formbox: {
    paddingTop: "5%",
    flex: 1,
    justifyContent: "center",
  },

  forgotPassword: {
    alignItems: "flex-end",
    justifyContent: "flex-end",
    marginRight: 13,
    marginBottom: 25,
  },
  bottom: {
    alignItems: "flex-end",
    justifyContent: "flex-end",
    marginRight: 13,
    marginTop: 35,
    paddingVertical: 20,
  },
  smallText: {
    fontSize: moderateScale(12),
    color: "rgba(0, 0, 0, 0.30)",
  },
});
