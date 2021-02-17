import React from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { NavigationEvents } from "react-navigation";

// Estilo da página

import styles from "./styles";

// Retorno do JSON
const fakeUser = {
  id: 1,
  email: "jose@teste.com",
  password: "123",
};

function Login({ navigation }) {
  function authentication() {
    // Fetch API
    if (fakeUser.email === user && fakeUser.password === password) {
      Alert.alert(
        "Obrigado José e Guilherme",
        "Desejo todo o sucesso do mundo para vocês!"
      );
      navigation.navigate("Dashboard");
    } else {
      Alert.alert(
        "E-mail ou senha incorretos",
        "Acesso negado, por favor verifique os seus dados!"
      );
    }
  }
  const [user, setUser] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.titleTextLogin}>Login</Text>
      <View>
        <TextInput
          style={{ textAlign: "center", color: "#fff" }}
          placeholder="Digite o seu e-mail"
          placeholderTextColor="#fff"
          value={user}
          onChangeText={(text) => setUser(text)}
        />
        <TextInput
          style={{ textAlign: "center", color: "#fff" }}
          placeholder="Digite a sua senha"
          placeholderTextColor="#fff"
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <TouchableOpacity
          style={{
            backgroundColor: "steelblue",
            borderRadius: 24,
            marginTop: 12,
          }}
          onPress={authentication}
        >
          <Text style={{ textAlign: "center", color: "#fff", padding: 8 }}>
            Entrar
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 12 }}>
        <Text style={{ textAlign: "center", color: "powderblue" }}>
          Não possue conta? Cadastre-se
        </Text>
        <Text style={{ textAlign: "center", color: "powderblue" }}>
          Esqueci minha senha
        </Text>
      </View>
    </View>
  );
}

export default Login;
