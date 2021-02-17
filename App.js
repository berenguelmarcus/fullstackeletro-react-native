import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";

// Rotas
import Routers from "./src/Routes";

function App() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar hidden />
      <Routers />
    </View>
  );
}

export default App;
