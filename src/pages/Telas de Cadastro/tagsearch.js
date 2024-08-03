import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ScrollView, TextInput } from "react-native";

//importando os componentes de navegação
import { NavigationContainer } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  TransitionSpecs,
  CardStyleInterpolators,
} from "@react-navigation/native-stack";

import MaterialIcons from "@expo/vector-icons/MaterialIcons";

import styles from "./style/tagsearchstyle";

export default function TagSearch({ navigation }) {
  return (
    <SafeAreaView style={styles.safeareaview}>
    <View style={styles.headercont}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}
      >
        <MaterialIcons name="arrow-back-ios" size={24} color="black" />
      </TouchableOpacity>
      <Text style={styles.title}>Pesquisar por Áreas de seu interesse:</Text>
    </View>
    <TextInput
      style={styles.input}
      placeholder="Pesquisar..."
    />
    </SafeAreaView>
  );
}
