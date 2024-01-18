import { MEALS } from "../data/dummy-data";
import { StyleSheet, Text, View } from "react-native";

function MealsOverviewScrren({ route }) {
  const catId = route.params.categoryId
  return (
    <View style={styles.container}>
      <Text>Meal Overview Screen - { catId }</Text>
    </View>
  );
}

export default MealsOverviewScrren;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
