import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import Colors from "../constant/Colors";
import FavoritesScreen from "../screens/FavoritesScreen";
import React from "react";
import FiltersScreen from "../screens/FiltersScreen";

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { createDrawerNavigator } from "react-navigation-drawer";

const defaultStackNavOption = {
  headerStyle: {
    backgroundColor: Colors.primaryColor,
  },
  navigationOptions: { headerTitle: "Meal Categories" },
};

const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
      navigationOptions: { headerTitle: "Meal Categories" },
    },
    CategoryMeals: {
      screen: CategoryMealsScreen,
    },
    MealDetail: MealDetailScreen,
  },
  {
    defaultNavigationOptions: defaultStackNavOption,
  }
);

const FavNavigator = createStackNavigator(
  {
    Favorite: FavoritesScreen,
    MealDetail: MealDetailScreen,
  },
  {
    defaultNavigationOptions: defaultStackNavOption,
  }
);

const MealsFavTabNavigator = createMaterialBottomTabNavigator(
  {
    Meals: {
      screen: MealsNavigator,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <Ionicons
              name="ios-restaurant"
              size={25}
              color={tabInfo.tintColor}
            ></Ionicons>
          );
        },
        tabBarColor: Colors.accentColor,
      },
    },

    Favorites: {
      screen: FavNavigator,
      navigationOptions: {
        tabBarLabel: "favorites!",
        tabBarIcon: (tabInfo) => {
          return (
            <Ionicons
              name="ios-star"
              size={25}
              color={tabInfo.tintColor}
            ></Ionicons>
          );
        },
        tabBarColor: Colors.accentColor,
      },
    },
  },

  {
    tabBarOptions: {
      activeTintColor: Colors.primaryColor,
    },
  }
);
const FilterNavigator = createStackNavigator(
  { Filters: FiltersScreen },
  {
    // navigationOptions: {
    //   drawerLabel: "Filters!!!!",
    // },
    defaultNavigationOptions: defaultStackNavOption,
  }
);

MainNavigator = createDrawerNavigator(
  {
    MealsFavs: MealsFavTabNavigator,
    Filters: FilterNavigator,
  },
  {
    contentOptions: Colors.primaryColor,
  }
);

export default createAppContainer(MainNavigator);
