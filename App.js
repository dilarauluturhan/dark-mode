import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "nativewind";
import { Switch, Text, View } from "react-native";

export default function App() {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  return (
    <View className="flex-1 items-center justify-center bg-neutral-100 dark:bg-neutral-800 space-y-6">
      <StatusBar style={colorScheme == "dark" ? "light" : "dark"} />
      <View className="flex-row justify-center items-center space-x-2">
        <Text className="text-xl dark:text-white">Toggle Theme</Text>
        <Switch
          value={colorScheme == "dark"}
          thumbColor={colorScheme ? "#3572EF" : "#f4f3f4"}
          onChange={toggleColorScheme}
        />
      </View>
      <Text className="text-blue-800 dark:text-white mx-4 text-justify">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.{" "}
      </Text>
    </View>
  );
}
