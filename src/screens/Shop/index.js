import React from "react";
import {
  View,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
} from "react-native";

// Estilo da página

import styles from "./styles";

// Img eletros

import img1 from "../../img/eletros_img/fogao-consul-inox.jpg";

function Dashboard({ navigation }) {
  function back() {
    return navigation.navigate("Dashboard");
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text
          style={{
            textAlign: "center",
            fontSize: 48,
            fontWeight: "bold",
            color: "#fff",
            padding: 16,
          }}
        >
          Veja nossa lista de produtos
        </Text>
        <Image
          style={{ width: 420, height: 400 }}
          source={require("../../img/eletros_img/fogao-consul-inox.jpg")}
        />
        <View style={{ padding: 18 }}>
          <Text style={{ textAlign: "center", fontSize: 22, color: "#fff" }}>
            Fogão 4 Bocas Massinha
          </Text>
          <Text style={{ textAlign: "center", fontSize: 18, color: "green" }}>
            R$ 500,00
          </Text>
          <Text style={{ textAlign: "center", fontSize: 16, color: "red" }}>
            R$ 670,00
          </Text>
        </View>

        <Image
          style={{ width: 420, height: 400 }}
          source={require("../../img/eletros_img/fogao-consul-inox.jpg")}
        />
        <View style={{ padding: 18 }}>
          <Text style={{ textAlign: "center", fontSize: 22, color: "#fff" }}>
            Fogão 4 Bocas Massinha
          </Text>
          <Text style={{ textAlign: "center", fontSize: 18, color: "green" }}>
            R$ 500,00
          </Text>
          <Text style={{ textAlign: "center", fontSize: 16, color: "red" }}>
            R$ 670,00
          </Text>
        </View>
        <Image
          style={{ width: 420, height: 400 }}
          source={require("../../img/eletros_img/fogao-consul-inox.jpg")}
        />
        <View style={{ padding: 18 }}>
          <Text style={{ textAlign: "center", fontSize: 22, color: "#fff" }}>
            Fogão 4 Bocas Massinha
          </Text>
          <Text style={{ textAlign: "center", fontSize: 18, color: "green" }}>
            R$ 500,00
          </Text>
          <Text style={{ textAlign: "center", fontSize: 16, color: "red" }}>
            R$ 670,00
          </Text>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: "grey",
            borderRadius: 24,
            margin: 12,
          }}
          onPress={back}
        >
          <Text
            style={{
              fontSize: 24,
              textAlign: "center",
              color: "#fff",
              padding: 12,
              margin: 8,
            }}
          >
            Voltar
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

export default Dashboard;
