import { StyleSheet } from "react-native";

export default  StyleSheet.create({

    safeAreaView: {
      flex: 1,
      backgroundColor: "#000",
    },
    scrollView: {
      flexGrow: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    background: {
      ...StyleSheet.absoluteFillObject,
    },
    container: {
      flex: 1,
      justifyContent: "space-around",
      alignItems: "center",
    },
    logincont: {
      marginTop: 20,
      alignItems: "center",
    },
    loginInput: {
      width: 350,
      padding: 10,
      marginVertical: 10,
      borderWidth: 1,
      borderColor: "#1b1b1b",
      borderRadius: 5,
    },
    loginButton: {
      backgroundColor: '#fff',
      borderWidth: 3,
      borderColor: '#56c596',
      padding: 10,
      borderRadius: 5,
      alignItems: "center",
      marginTop: 10,
      width: 350,
      margin: 15,
      elevation: 3,
    },
    cadastroButton: {
      backgroundColor: "#56c596",
      padding: 10,
      borderRadius: 5,
      alignItems: "center",
      width: 350,
      margin: 15,
      elevation: 3,
    },
    googleButton: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: 'center',
      backgroundColor: "#fff",
      padding: 10,
      gap: 5,
      borderRadius: 5,
      borderWidth: 1,
      borderColor: "#ccc",
      width: 350,
      elevation: 3,
    },
  });
  