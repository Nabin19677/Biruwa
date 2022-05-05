import { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useDispatch, useSelector } from "react-redux";
import { login } from "./../../store/auth/auth.actions";
import Header from "../../components/ui/texts/Header";
import Button from "../../components/ui/Button";
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

            <Button title="SIGN IN" onPress={signIn} />
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
    flex: 2,
    justifyContent: "center",
    paddingHorizontal: 25,
  },
  body: {
    flex: 4,
    top: -60,
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    backgroundColor: "white",
    justifyContent: "center",
  },
  formbox: {
    justifyContent: "center",
    alignItems: "center",
  },
});
