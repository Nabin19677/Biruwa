import { Image, useTheme } from "@rneui/themed";
import { StyleSheet, View } from "react-native";
import { Text as Heading } from "@rneui/themed";
import Slider from "../ui/Slider";

export default function PlantListItem({ plant }) {
  const { theme } = useTheme();

  const nameArray = plant.name.split(" ");
  const firstName = nameArray[0];
  const lastName = nameArray.splice(1).join(" ");

  return (
    <View
      style={[style.container, { backgroundColor: theme?.colors.background }]}
    >
      <View style={style.image}>
        <Image
          containerStyle={style.imageContainer}
          source={{ uri: plant.img_url }}
        />
      </View>
      <View style={style.data}>
        <View>
          <Heading h4 h4Style={{ fontSize: 20 }}>
            {firstName}
          </Heading>
          <Heading h4 h4Style={{ fontSize: 16 }}>
            {lastName}
          </Heading>
        </View>
        <View>
          <Slider icon="sun" value={plant.light_level} />
          <Slider icon="tint" value={plant.water_level} />
        </View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 15,
    flexDirection: "row",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  image: {
    // backgroundColor: "green",
    margin: 10,
  },
  imageContainer: {
    aspectRatio: 1,
    width: 100,
    height: 100,
  },
  data: {
    // backgroundColor: "blue",
    flex: 1,
    padding: 5,
  },
});
