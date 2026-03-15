import ShoppingListItem from "@/components/ShoppingListItem";
import { StyleSheet, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <ShoppingListItem name="Coffee" />
      <ShoppingListItem name="Tea" isCompleted={true} />
      <ShoppingListItem name="Milk" isCompleted={true} />
      <ShoppingListItem name="Sugar" isCompleted={true} />
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
