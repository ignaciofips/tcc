import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  innerContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 80,
  },
  titlecont: {
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: "flex-start",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1b1b1b",
  },
  formcont: {
    width: "100%",
    paddingVertical: 10,
  },
  input: {
    borderWidth: 4,
    borderColor: "#56c596",
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 15,
    width: 350,
  },
  submitcont: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 360,
    paddingVertical: 20,
  },
  button: {
    alignItems: "center",
    flexDirection: "row",
  },
  textbutton: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1b1b1b",
  },
  flatlistcont: {
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: "flex-start",
  },
  flatlist: {
    backgroundColor: "#000",
    gap: 10,
  },
  item: {
    backgroundColor: "#1b1b1b",
    paddingVertical: 5,
    paddingHorizontal: 15,
    marginHorizontal: 5,
    borderRadius: 20,
    width: "auto",
    alignSelf: "flex-start",
  },
  tagtext: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  modalMessage: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  okButton: {
    backgroundColor: '#56c596',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    width: '100%',
  },
  okButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  errorText: {
    color: '#ff3d44',
    paddingHorizontal: 10
  }
});

