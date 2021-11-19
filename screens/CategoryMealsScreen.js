import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import Colors from "../constant/Colors";
import MealList from "../components/MealList";
import { useSelector } from "react-redux";

const CategoryMealScreen = (props) => {
  const catId = props.navigation.getParam("categoryId");
  const availableMeals = useSelector((state) => state.meals.filteredMeals);

  const displayMeals = availableMeals.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );

  if (displayMeals.length === 0) {
    return (
      <View style={styles.content}>
        <Text>No meals found, maybe check your filters </Text>
      </View>
    );
  }
  return (
    <MealList listData={displayMeals} navigation={props.navigation}></MealList>
  );
};

CategoryMealScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);

  return {
    headerTitle: selectedCategory.title,
    headerStyle: {
      backgroundColor: Colors.primaryColor,
    },
  };
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoryMealScreen;
