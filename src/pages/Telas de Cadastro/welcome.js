import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./style/welcomestyle";

export default function Welcome({ navigation }) {
  const [loading, setLoading] = useState(false);

  //animação de carregamento ao clicar no botão de cadastro
  const submitAnimação = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigation.navigate("CadastroUser");
    }, 2000);
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <LinearGradient
          colors={["#f2f2f2", "#e1f5ed", "#f7fffc", "#56c596"]}
          style={styles.background}
        />
        <View style={styles.container}>
          <View style={{ alignItems: "center", marginTop: 70 }}>
            <Image
              source={require("../../../assets/img/WorkUP logo.png")}
              style={{ width: 230, height: 50, marginTop: 100 }}
            />
            <Text style={{ fontSize: 15, fontWeight: "800" }}>
              Aqui, você desperta o seu melhor.
            </Text>
          </View>

          <View style={styles.logincont}>
            <Text style={{ fontWeight: "bold", fontSize: 18 }}>Faça seu login</Text>
            <TextInput
              style={styles.loginInput}
              placeholder="Nome de usuário ou email"
              placeholderTextColor={"#969696"}
            />
            <TextInput
              style={styles.loginInput}
              placeholder="Senha"
              placeholderTextColor={"#969696"}
            />
            <TouchableOpacity style={styles.loginButton}>
              <Text style={{ color: "#000", fontSize: 18, fontWeight: "bold" }}>Login</Text>
            </TouchableOpacity>
          </View>

          <Text style={{ fontWeight: "bold", fontSize: 18 }}>Ou</Text>

          <View style={{ alignItems: "center", gap: 15 }}>
            <TouchableOpacity
              style={styles.cadastroButton}
              onPress={submitAnimação}
              disabled={loading}
            >
              {loading ? (
                <ActivityIndicator color="#FFFFFF" />
              ) : (
                <Text style={{ color: "#fff", fontSize: 18, fontWeight: "bold" }}>
                  Cadastre-se
                </Text>
              )}
            </TouchableOpacity>

            <TouchableOpacity style={styles.googleButton}>
              <Image
                source={require("../../../assets/img/google.png")}
                style={{ width: 20, height: 20 }}
              />
              <Text
                style={{
                  color: "#000",
                  fontSize: 15,
                  fontWeight: "700",
                  paddingRight: 5,
                }}
              >
                Google
              </Text>
            </TouchableOpacity>

            <View style={{ alignItems: "center" }}>
              <Text>Ao efetuar cadastro ou login, você concorda com nossos</Text>
              <Text style={{ fontWeight: "800" }}>
                Termos de Serviço e Política de Privacidade.
              </Text>
            </View>
          </View>
          <View style={{ paddingBottom: 10 }}>
            <Text>© 2024 Dynamo. Todos os direitos reservados.</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}