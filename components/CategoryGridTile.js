import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  TouchableNativeFeedback,
  Platform,
} from "react-native";

const CategoryGridTile = (props) => {
  let TochableCmp = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TochableCmp = TouchableNativeFeedback;
  }
  return (
    <View style={styles.gridItem}>
      <TochableCmp style={styles.gridItem} onPress={props.onSelect}>
        <View
          style={{ ...styles.container, ...{ backgroundColor: props.color } }}
        >
          <Text style={styles.title} numberOfLine={2}>
            {props.title}
          </Text>
        </View>
      </TochableCmp>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 120,
    borderRadius: 10,
    overflow: "hidden",
    elevation: 5,
  },
  container: {
    flex: 1,
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,

    padding: 15,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  title: {
    fontSize: 22,
  },
});

export default CategoryGridTile;
