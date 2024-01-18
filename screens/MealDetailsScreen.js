import { Text, View } from "react-native";

function MealDetailsScreen({ route }) {
  const mealId = route.params.mealId;
  return (
    <View>
      <Text>the is meal detail - {mealId}</Text>
    </View>
  );
}

export default MealDetailsScreen;
