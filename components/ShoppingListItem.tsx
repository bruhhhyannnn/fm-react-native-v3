import { theme } from "@/theme";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";

type Props = {
  name: string;
  isCompleted?: boolean;
};

export default function ShoppingListItem({ name, isCompleted }: Props) {
  const handleDelete = () => {
    Alert.alert(
      `Are you sure you want to delete ${name}}?`,
      "Description or subtext",
      [{ text: "TEXT", style: "destructive" }, {}],
    );
  };

  return (
    <View
      style={[
        styles.itemContainer,
        isCompleted ? styles.completedContainer : undefined,
      ]}
    >
      <Text style={isCompleted ? styles.completedText : undefined}>{name}</Text>
      <TouchableOpacity
        style={[
          styles.buttonStyle,
          isCompleted ? styles.completedButton : undefined,
        ]}
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
    borderBottomColor: theme.colorCerulean,
    paddingVertical: 16,
    paddingHorizontal: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  completedContainer: {
    backgroundColor: theme.colorLightGray,
    borderBottomWidth: 1,
    borderBottomColor: theme.colorLightGray,
  },
  completedText: {
    color: theme.colorGray,
    textDecorationLine: "line-through",
    textDecorationColor: theme.colorGray,
  },
  buttonStyle: {
    backgroundColor: theme.colorBlack,
    padding: 8,
    borderRadius: 6,
  },
  completedButton: {
    backgroundColor: theme.colorGray,
  },
  buttonText: {
    color: theme.colorWhite,
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
});
