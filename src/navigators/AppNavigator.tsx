import {Ionicons} from "@expo/vector-icons";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {NavigationContainer} from "@react-navigation/native";

import HomeScreen from "~/screens/AppScreens/HomeScreen";
import SaveScreen from "~/screens/AppScreens/SaveScreen";
import SettingsScreen from "~/screens/AppScreens/SettingsScreen";

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({route}) => ({
                    tabBarIcon: ({focused, color, size}) => {
                        let iconName = "";

                        switch (route.name) {
                            case "Home":
                                iconName = focused ? "home" : "home-outline";
                                break;
                            case "MySaves":
                                iconName = focused ? "bookmark" : "bookmark-outline";
                                break;
                            case "Settings":
                                iconName = focused ? "settings" : "settings-outline";
                                break;
                        }

                        return (
                            <Ionicons
                                name={iconName as "key"}
                                size={size}
                                color={color}
                            />
                        );
                    },
                    tabBarActiveTintColor: "black",
                    tabBarInactiveTintColor: "gray",
                    headerShown: false
                })}
            >
                <Tab.Screen
                    name="Home"
                    component={HomeScreen}
                />
                <Tab.Screen
                    name="MySaves"
                    component={SaveScreen}
                />
                <Tab.Screen
                    name="Settings"
                    component={SettingsScreen}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
