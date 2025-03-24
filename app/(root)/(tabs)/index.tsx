import { Link } from "expo-router";
import { Text, View } from "react-native";
import { Home } from "lucide-react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View className="flex">
        <Home size={16} />
        <Text className="text-lg my-10 font-rubik-extrabold">Home</Text>
      </View>
      <Link href="/sign-in">Sign In</Link>
      <Link href="/explore">Explore</Link>
      <Link href="/profile">Profile</Link>
      <Link href="/properties/1">Property</Link>
    </View>
  );
}
