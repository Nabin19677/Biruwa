import { useEffect } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/auth/auth.actions";
import { moderateScale } from "../../utils/scale";
import Header from "../../components/ui/texts/Header";
import Text from "../../components/ui/texts/Text";
import Button from "../../components/ui/buttons/Button";
import SmallButton from "../../components/ui/buttons/SmallButton";
import Input from "../../components/ui/inputs/input";
import colors from "../../styles/constants";

export default function SignInScreen(props) {
  const authState = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const signIn = () => {
    dispatch(login());
  };

  useEffect(() => {
    if (authState.userToken != null) {
      props.navigation.navigate({ name: "userarea" });
    }
  }, [authState]);

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
        <Header white>Sign In!</Header>
      </LinearGradient>
      <View style={style.body}>
        <View style={style.formbox}>
          <View>
            <View>
              <Input placeholder="example@gmail.com" name="Email" />
              <Input placeholder="···········" name="Password" />
            </View>
            <View style={style.forgotPassword}>
              <Text>Forgot Password?</Text>
            </View>
            <View>
              <Button title="SIGN IN" onPress={signIn} />
            </View>
            <View style={style.bottom}>
              <Text style={style.smallText}>Don't have account?</Text>
              <SmallButton title="SIGN UP" type="clear" onPress={signUp} />
            </View>
          </View>
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
  },
  smallText: {
    fontSize: moderateScale(12),
    color: "rgba(0, 0, 0, 0.30)",
  },
});
