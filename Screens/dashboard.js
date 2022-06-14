import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "../Navigation/drawerNavigator";

export default function DashboardScreen() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}
