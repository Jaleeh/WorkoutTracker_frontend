import { Feather } from "@expo/vector-icons";
import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import SessionsScreen from "../screens/SessionsScreen";
import Icon from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();
const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        headerStyle: { backgroundColor: "" },
        tabBarStyle: {
          backgroundColor: "#FF5f00",
          borderRadius: 15,
          height: 90,
          position: "absolute",
          left: 30,
          bottom: 30,
          right: 30,
        },
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "grey",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View>
              <Feather name="home" size={24} color={color} focused={focused} />
            </View>
          ),
          headerShown: true,
        }}
      />
      {/* <Tab.Screen
        name="Sessions"
        component={SessionsScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View>
              <MaterialCommunityIcons
                name="weight-lifter"
                size={24}
                color={color}
                focused={focused}
              />
            </View>
          ),
          headerShown: true,
        }}
      /> */}
    </Tab.Navigator>
  );
};

export default Tabs;
