import React from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";

// Estilo da página

import styles from "./styles";

function Dashboard({ navigation }) {
  function logout() {
    return navigation.navigate("Login");
  }

  function goShop() {
    return navigation.navigate("Shop");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Bem-vindo(a)</Text>
      <Text style={styles.normalText}>
        Em nosso site desenvolvedores tem descontos!
      </Text>
      <Text style={styles.normalText}>
        Aproveite as ofertas que preparamos para você!
      </Text>
      <TouchableOpacity
        style={{
          backgroundColor: "steelblue",
          borderRadius: 24,
          marginTop: 12,
        }}
        onPress={goShop}
      >
        <Text
          style={{
            fontSize: 24,
            textAlign: "center",
            color: "#fff",
            padding: 12,
          }}
        >
          Acessar à loja
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: "green",
          borderRadius: 24,
          marginTop: 12,
        }}
      >
        <Text
          style={{
            fontSize: 24,
            textAlign: "center",
            color: "#fff",
            padding: 12,
          }}
        >
          Minhas compras
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: "grey",
          borderRadius: 24,
          marginTop: 12,
        }}
      >
        <Text
          style={{
            fontSize: 24,
            textAlign: "center",
            color: "#fff",
            padding: 12,
          }}
        >
          Configurações
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: "red",
          borderRadius: 24,
          marginTop: 12,
        }}
        onPress={logout}
      >
        <Text
          style={{
            width: 100,
            fontSize: 24,
            textAlign: "center",
            color: "#fff",
            padding: 12,
          }}
        >
          Sair
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default Dashboard;
