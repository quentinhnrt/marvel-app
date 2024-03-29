import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnBoarding from "~/screens/GuestScreens/OnBoarding";

import SignInScreen from "~/screens/GuestScreens/SignInScreen";
import SignUpScreen from "~/screens/GuestScreens/SignUpScreen";

const Stack = createNativeStackNavigator();

export default function GuestNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        initialRouteName="OnBoarding"
      >
        <Stack.Screen
          name="OnBoarding"
          component={OnBoarding}
        />
        <Stack.Screen
          name="SignIn"
          component={SignInScreen}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
