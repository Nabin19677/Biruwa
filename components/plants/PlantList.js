import { StyleSheet, View } from "react-native";
import PlantListItem from "./PlantListItem";

export default function PlantList({ data }) {
  return (
    <View>
      {data.map((plant) => (
        <PlantListItem key={plant.id} plant={plant} />
      ))}
    </View>
  );
}

const style = StyleSheet.create({});
