import Plant from "./models/Plant";
import User from "./models/User";

export const user = new User("_1234", "Anil Khadka", "21");

export const plants = [
  new Plant(
    "_p1234",
    "Ageratum",
    "Ageratum houstonianum",
    "https://extension.umass.edu/plant-identification/sites/plant-identification/files/styles/150x150/public/plant/images/growth/Ageratum%201%20Plant.jpg?itok=JNvkKVYa"
  ),
  new Plant(
    "_p1235",
    "Blue Sage",
    "Salvia farinacea",
    "https://extension.umass.edu/plant-identification/sites/plant-identification/files/styles/150x150/public/plant/images/growth/Salvia%206%20plant_0.jpg?itok=8Ve-JZ32"
  ),
  new Plant(
    "_p1236",
    "Daylily",
    "Hemerocallis hybrids",
    "https://extension.umass.edu/plant-identification/sites/plant-identification/files/styles/150x150/public/plant/images/flowers/Hemerocallis%205%20flower_0.jpg?itok=WSxuEqgG"
  ),
  new Plant(
    "_p1237",
    "Dusty Miller",
    "Senecio cineraria",
    "https://extension.umass.edu/plant-identification/sites/plant-identification/files/styles/150x150/public/plant/images/growth/Senecio%202%20plant.JPG?itok=aqjq2F4k"
  ),
  new Plant(
    "_p1238",
    "China Pink",
    "Dianthus chinensis",
    "https://extension.umass.edu/plant-identification/sites/plant-identification/files/styles/150x150/public/plant/images/growth/Dianthus%201%20plant_0.JPG?itok=6guWByCS"
  ),
];
