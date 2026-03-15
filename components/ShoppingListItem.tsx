import { theme } from "@/theme";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";

type Props = {
  name: string;
};

export default function ShoppingListItem({ name }: Props) {
  const handleDelete = () => {
    Alert.alert(
      `Are you sure you want to delete ${name}}?`,
      "Description or subtext",
      [{ text: "TEXT", style: "destructive" }, {}],
    );
  };

  return (
    <View style={styles.itemContainer}>
      <Text>{name}</Text>
      <TouchableOpacity
        style={styles.buttonStyle}
        activeOpacity={0.8}
        onPress={handleDelete}
      >
        <Text style={styles.buttonText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    borderBottomWidth: 1,
    borderBottomColor: "#1a759f",
    paddingVertical: 16,
    paddingHorizontal: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  buttonStyle: {
    backgroundColor: theme.colorBlack,
    padding: 8,
    borderRadius: 6,
  },
  buttonText: {
    color: theme.colorWhite,
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
});
