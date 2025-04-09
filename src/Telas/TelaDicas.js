import React from 'react';
import { SafeAreaView, Text, StyleSheet, TouchableOpacity, Image, ImageBackground, View, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function TelaDicas({ navigation }) {
  return (
    <ImageBackground
      source={require('../../assets/BG.png')}
      style={styles.container}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.btnVoltar}>
        <Ionicons name="chevron-back" size={40} color="white" onPress={() => navigation.goBack()} />
        <Text style={styles.titulo}>Dicas Sustentáveis</Text>
      </SafeAreaView>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.card}>
          <Text style={styles.cardTitulo}>🌱 Plante Árvores</Text>
          <Text style={styles.cardTexto}>
            Plantar árvores ajuda a melhorar a qualidade do ar, combater o aquecimento global e promover a biodiversidade urbana.
          </Text>
          <Image source={require('../../assets/plante.png')} style={styles.cardImagem} />
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitulo}>♻️ Recicle Sempre</Text>
          <Text style={styles.cardTexto}>
            Separe corretamente o lixo reciclável, contribua para a reutilização de materiais e evite o descarte inadequado.
          </Text>
          <Image source={require('../../assets/recicle.png')} style={styles.cardImagem} />
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitulo}>🚴‍♂️ Use transporte alternativo</Text>
          <Text style={styles.cardTexto}>
            Caminhar ou andar de bicicleta reduz a emissão de gases poluentes e ainda melhora sua saúde!
          </Text>
          <Image source={require('../../assets/bicicleta.png')} style={styles.cardImagem} />
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btnVoltar: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 1,
  },
  titulo: {
    fontSize: 25,
    color: "white",
    marginLeft: 20,
    fontWeight: 'bold',
  },
  scrollContent: {
    paddingTop: 100,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 15,
    marginBottom: 20,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  cardTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cardTexto: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
  },
  cardImagem: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
});
