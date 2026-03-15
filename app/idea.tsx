import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function IdeaScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.push("/counter")}>
        <Text
          style={{
            color: "blue",
            fontWeight: "bold",
            fontSize: 24,
            textAlign: "center",
            marginBottom: 24,
          }}
        >
          Go to Counter
        </Text>
      </TouchableOpacity>

      <Text style={styles.text}>Idea</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
  },
});
