import { StyleSheet, View } from "react-native";
import { Text, useTheme, Divider, Icon } from "@rneui/themed";
import { SafeAreaView } from "react-native-safe-area-context";
import ProfileInfoCard from "./../../components/profileInfoCard";
import DarkModeListItem from "../../components/setting/DarkModeListItem";
import ListItem from "../../components/setting/ListItem";
import Button from "../../components/ui/buttons/Button";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/auth/auth.actions";

export default function Setting() {
  const authState = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const theme = useTheme();

  const signout = () => {
    dispatch(logout());
  };

  return (
    <SafeAreaView style={style.container}>
      <View style={style.box}>
        <View>
          <Text h3 h3Style={{ color: theme?.colors?.secondary }}>
            Setting
          </Text>
        </View>
        <View style={style.profileCard}>
          <ProfileInfoCard
            name="Anil Khadka"
            email="anil.khadka3777@gmail.com"
          />
        </View>
        <View style={{ marginTop: 50 }}>
          <DarkModeListItem />
          <ListItem name="Notification" icon="bell" />
          <ListItem name="Favourite" icon="heart" />
          <ListItem name="Privacy" icon="lock" />
          <ListItem name="Language" icon="globe" />
          <ListItem name="Help" icon="bell" />
        </View>
        <View style={{ marginVertical: 50 }}>
          <Button title="LOG OUT" type="outline" onPress={signout} />
        </View>
      </View>
      <View style={style.footer}>
        <Divider width={2} />
        <View style={style.social}>
          <View style={style.iconsContainer}>
            <Icon name="instagram" type="font-awesome" />
            <Icon name="facebook" type="font-awesome" />
            <Icon name="twitter" type="font-awesome" />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
  },
  box: {
    paddingHorizontal: "5%",
  },
  profileCard: {
    marginTop: 25,
  },

  social: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
  },
  iconsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "20%",
  },
});
