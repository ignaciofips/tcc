import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Platform,
  TouchableOpacity,
  TextInput,
  Pressable,
  FlatList,
  Modal,
  Alert,
} from "react-native";
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";

// Import das bibliotecas de ícones que já vem com o próprio Expo
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AntDesign from "@expo/vector-icons/AntDesign";

// Importando a biblioteca para colocar data nos textinputs
import DateTimePicker from "@react-native-community/datetimepicker";

// Importando os estilos
import styles from "./style/cadastrouserstyle";

// Importando o componente de modal personalizado
import CustomModal from './CustomModal';



export default function CadastroUser({ navigation }) {

  const [nome, setNome] = useState('')
  const [nomeUser, setNomeUser] = useState('')
  const [idade, setIdade] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validateForm = () => {
    let formErrors = {};
    let isValid = true;

    if (!nome.trim()) {
      formErrors.nome = '*';
      isValid = false;
    }

    if (!nomeUser.trim()) {
      formErrors.nomeUser = '*';
      isValid = false;
    }

    if (!idade.trim()) {
      formErrors.idade = '*';
      isValid = false;
    }

    const trimmedEmail = (email || '').trim(); // Garante que email é uma string e faz o trim
    if (!trimmedEmail) {
      formErrors.email = '*';
      isValid = false;
    } else if (!validateEmail(trimmedEmail)) {
      formErrors.email = 'Email deve conter um @ e um domínio válido';
      isValid = false;
    }

    if (!senha.trim()) {
      formErrors.senha = '*';
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      // Se todas as validações passarem, você pode prosseguir com o envio dos dados
      Alert.alert('Sucesso', 'Cadastro realizado com sucesso');
    } else {
      Alert.alert('Erro', 'Por favor, preencha todos os campos corretamente');
    }
  };


  // Estado para gerenciar a data selecionada
  const [date, setDate] = useState(new Date());
  // Estado para controlar a visibilidade do DateTimePicker
  const [show, setShow] = useState(false);
  // Estado para armazenar o texto da data no TextInput
  const [text, setText] = useState("");
  // Estado para controlar a visibilidade do modal
  const [modalVisible, setModalVisible] = useState(false);

  // Função para atualizar a data e o texto ao selecionar uma data
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date; // Se não houver data selecionada, usa a data atual
    setShow(Platform.OS === "ios"); // Controla a visibilidade do DateTimePicker para iOS
    setDate(currentDate); // Atualiza o estado da data

    // Formata a data para o formato desejado
    let tempDate = new Date(currentDate);
    let fDate =
      tempDate.getDate() +
      "/" +
      (tempDate.getMonth() + 1) +
      "/" +
      tempDate.getFullYear();
    setText(fDate); // Atualiza o texto exibido no TextInput
  };

  // Função para exibir o DateTimePicker
  const showMode = () => {
    setShow(true); // Define o estado para exibir o DateTimePicker
  };

  const Areas = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "Tech",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Analista de Banco de Dados",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Desenvolvimento Back-end",
    },
  ];

  const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.tagtext}>{title}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.innerContainer}>
          {/* Seção para o nome completo */}
          <View style={styles.titlecont}>
            <Text style={styles.title}>Insira seu nome:</Text>
            <View style={styles.formcont}>
              <TextInput
                placeholder="Coloque seu nome completo"
                placeholderTextColor={"#9A9B9A"}
                style={styles.input}
                onChange={(text) => setNome(text)}
              />
              {errors.nome && <Text style={styles.errorText}>{errors.nome}</Text>}
            </View>
          </View>

          {/* Seção para o nome de usuário */}
          <View style={styles.titlecont}>
            <Text style={styles.title}>Insira seu nome de usuário:</Text>
            <View style={styles.formcont}>
              <TextInput
                placeholder="Coloque seu nome de usuário"
                placeholderTextColor={"#9A9B9A"}
                style={styles.input}
                onChange={(text) => setNomeUser(text)}
              />
              {errors.nomeUser && <Text style={styles.errorText}>{errors.nomeUser}</Text>}
              <View
                style={{
                  flexDirection: "row",
                  padding: 10,
                  gap: 10,
                  alignItems: "center",
                  justifyContent: "center",
                  width: 300,
                }}
              >
                <Ionicons name="alert-circle-sharp" size={24} color="#56c596" />
                <Text>
                  O nome que escolher aparecerá em seu perfil quando estiver
                  finalizado.
                </Text>
              </View>
            </View>
          </View>
          

          {/* Seção para a data de nascimento */}
          <View style={styles.titlecont}>
            <Text style={styles.title}>Insira sua data de nascimento:</Text>
            <View style={styles.formcont}>
              <Pressable onPress={showMode}>
                <TextInput
                  placeholder="__/__/____"
                  placeholderTextColor={"#1b1b1b"}
                  style={styles.input}
                  value={text} // Mostra a data formatada
                  editable={false} // O campo não é editável diretamente pelo usuário
                  onChange={(text) => setIdade(text)}
                />
              {errors.idade && <Text style={styles.errorText}>{errors.idade}</Text>}
              </Pressable>
              {show && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={date} // Define a data inicial do DateTimePicker
                  mode={"date"} // Define o modo como 'date'
                  display="default" // Usa o modo de exibição padrão
                  onChange={onChange} // Função chamada quando a data é alterada
                  maximumDate={new Date(2023, 11, 31)} // Define a data máxima que pode ser selecionada
                  minimumDate={new Date(1900, 0, 1)} // Define a data mínima que pode ser selecionada
                />
              )}
            </View>
          </View>

          {/* Seção para o email */}
          <View style={styles.titlecont}>
            <Text style={styles.title}>Insira seu email:</Text>
            <View style={styles.formcont}>
              <TextInput
                placeholder="Coloque seu melhor email"
                placeholderTextColor={"#9A9B9A"}
                style={styles.input}
                onChangeText={(text) => setEmail(text)}
              />
              {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
            </View>
          </View>

          {/* Seção para a senha */}
          <View style={styles.titlecont}>
            <Text style={styles.title}>Insira sua senha:</Text>
            <View style={styles.formcont}>
              <TextInput
                placeholder="Crie uma senha forte"
                placeholderTextColor={"#9A9B9A"}
                style={styles.input}
                secureTextEntry={true} // Oculta o texto da senha
                onChange={(text) => setSenha(text)}
              />
              {errors.senha && <Text style={styles.errorText}>{errors.senha}</Text>}
            </View>
          </View>

          {/* Seção para as tags */}
          <View style={styles.flatlistcont}>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 150 }}
            >
              <Text style={styles.title}>
                Selecione suas áreas de {"\n"}preferência:
              </Text>
              <TouchableOpacity onPress={() => setModalVisible(true)}>
                <AntDesign name="questioncircle" size={24} color="#56c596" />
              </TouchableOpacity>
            </View>

            <View style={{marginVertical: 20}}>
              <TouchableOpacity>
                <Text style={{fontWeight: 'bold', fontSize: 20, color:'#56c596'}} onPress={()=> navigation.navigate("Pesquisar por Áreas")}>Ver Áreas</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.formcont}>
              <Text style={{fontWeight: 'bold', fontSize: 20, color:'#1b1b1b', marginBottom: 10}}>Áreas Selecionadas:</Text>
              <FlatList
                data={Areas}
                renderItem={({ item }) => <Item title={item.title} />}
                keyExtractor={(item) => item.id}
                horizontal={true}
              />
            </View>
          </View>

          {/* Seção para os botões de navegação */}
          <View style={styles.submitcont}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.goBack()}
            >
              <MaterialIcons name="arrow-back-ios" size={24} color="black" />
              <Text style={styles.textbutton}>Voltar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
              <Text style={styles.textbutton}>Próximo</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <CustomModal visible={modalVisible} onClose={() => setModalVisible(false)} />
    </SafeAreaView>
  );
}
