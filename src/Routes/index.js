import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";

// Importando páginas

import Login from "../screens/Login";
import Dashboard from "../screens/Dashboard";
import Shop from "../screens/Shop";

const Routers = {
  Login: {
    name: "Login",
    screen: Login,
  },
  Dashboard: {
    name: "Dashboard",
    screen: Dashboard,
  },
  Shop: {
    name: "Shop",
    screen: Shop,
  },
};

const navegation = createSwitchNavigator(Routers);

export default createAppContainer(navegation);
