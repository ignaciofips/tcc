import React, { useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, Animated, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const CustomModal = ({ visible, onClose }) => {
  // Configuração da animação da seta
  const translateAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (visible) {
      // Configura a animação para reiniciar sempre que o modal for aberto
      const animation = Animated.loop(
        Animated.sequence([
          Animated.timing(translateAnim, {
            toValue: 10,
            duration: 500,
            useNativeDriver: true,
          }),
          Animated.timing(translateAnim, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true,
          }),
        ])
      );
      animation.start();

      // Função de limpeza para parar a animação quando o modal for fechado
      return () => animation.stop();
    }
  }, [visible, translateAnim]);

  return (
    <Modal
      transparent={true}
      animationType="fade"
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>O que são as Áreas de Preferência?</Text>
          <Text style={styles.modalMessage}>
            As áreas de preferência são setores do mercado de trabalho que você tem interesse. Ao selecionar essas áreas, as vagas correspondentes serão destacadas no seu perfil, facilitando a busca por oportunidades alinhadas aos seus interesses.
          </Text>

          <View style={styles.exempcont}>
            <View style={styles.tagcont}>
              <Text style={styles.tagtext}>Tecnologia</Text>
            </View>

            <Animated.View style={{ transform: [{ translateY: translateAnim }] }}>
              <MaterialIcons name="keyboard-arrow-down" size={24} color="#56c596" />
            </Animated.View>
            <Image
              source={require("../../../assets/img/vagaexemple.png")}
              style={{ width: 220, height: 220, }}
            />
          </View>
          <TouchableOpacity onPress={onClose} style={styles.okButton}>
            <Text style={styles.okButtonText}>OK</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: 320,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
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
  exempcont: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
    width: 100,
    paddingVertical: 20,
  },
  tagcont: {
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    width: 130,
    padding: 10,
    borderRadius: 20,
  },
  tagtext: {
    color: '#fff',
    fontSize: 20,
  },
});

export default CustomModal;
