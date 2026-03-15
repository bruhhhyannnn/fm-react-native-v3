import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Tabs } from "expo-router";

export default function RootLayout() {
  return (
    // the reason we used the color value from tabBarIcon is this below, it will change automatically from the top level
    <Tabs screenOptions={{ tabBarActiveTintColor: "red" }}>
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            return (
              <MaterialCommunityIcons
                name="format-list-bulleted"
                size={size}
                color={color}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="counter"
        options={{
          title: "Counter",
          tabBarIcon: ({ color, size }) => {
            return (
              <MaterialCommunityIcons
                name="clock-outline"
                size={size}
                color={color}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="idea"
        options={{
          title: "Idea",
          tabBarIcon: ({ color, size }) => {
            return (
              <MaterialCommunityIcons
                name="lightbulb-outline"
                size={size}
                color={color}
              />
            );
          },
        }}
      />
      {/* Using modals: */}
      {/* <Stack.Screen
        name="idea"
        options={{
          title: "Idea",
          presentation: "modal",
          animation: "slide_from_bottom",
        }}
      /> */}
    </Tabs>
  );
}
