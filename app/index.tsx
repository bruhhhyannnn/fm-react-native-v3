import ShoppingListItem from "@/components/ShoppingListItem";
import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Link
        href={"/idea"}
        style={{
          color: "blue",
          fontWeight: "bold",
          fontSize: 24,
          textAlign: "center",
          marginBottom: 24,
        }}
      >
        <Text>Go to Idea</Text>
      </Link>
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
