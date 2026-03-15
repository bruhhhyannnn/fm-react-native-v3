import ShoppingListItem from "@/components/ShoppingListItem";
import { StyleSheet, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <ShoppingListItem name="Coffee" />
      <ShoppingListItem name="dsadsa" />
      <ShoppingListItem name="aa" />
      <ShoppingListItem name="ttt" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    justifyContent: "center",
  },
});
