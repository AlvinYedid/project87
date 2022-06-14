import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigator from "./tabNavigator";
import PostScreen from "../Screens/postScreen";

const Stack = createStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName = "Home"
            screenOptions = {{headerShown : false}}
        >
            <Stack.Screen name="Home" component={TabNavigator} />
            <Stack.Screen name="StoryScreen" component={PostScreen} />
        </Stack.Navigator>
    );
};

export default StackNavigator;

