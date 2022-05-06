import { ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Avatar, Text as Heading } from "@rneui/themed";
import Text from "../../components/ui/texts/Text";
import DailyTips from "../../components/daily-tips";
import Button from "../../components/ui/buttons/Button";
import { plants } from "../../utils/dummy_data";

import moment from "moment";
import PlantList from "../../components/plants/PlantList";

export default function MyPlants() {
  const addNewPlant = () => {};

  return (
    <SafeAreaView style={style.container}>
      <ScrollView style={style.box}>
        <View style={style.greeting}>
          <View>
            <Heading h2>Hello, Anil</Heading>
            <Text>{moment(new Date()).format("MMMM D, YYYY")}</Text>
          </View>
          <View>
            <Avatar
              rounded
              size="large"
              source={require("../../assets/avatar.png")}
            />
          </View>
        </View>
        <View style={{ marginTop: 50 }}>
          <DailyTips text="Coffee or tea can be used as a plant food" />
        </View>
        <View style={{ marginTop: 50 }}>
          <Button title="ADD PLANT" onPress={addNewPlant} />
        </View>
        <View style={{ marginTop: 50, marginBottom: 20 }}>
          <Heading h4>My Plants</Heading>

          <PlantList data={plants} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    paddingHorizontal: "5%",
  },
  greeting: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
  },
});
