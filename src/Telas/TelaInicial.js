import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground,} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function TelaInicial({ navigation }) {
  return (
    <ImageBackground
      source={require('../../assets/BG.png')}
      style={styles.container}
      resizeMode="cover"
    >
      <View style={styles.logoContainer}>
        <Image source={require('../../assets/logo.png')} style={styles.logo} />
        <Text style={styles.titulo}>EcoAware</Text>
        <Text style={styles.slogan}>Consciência ecológica na palma da sua mão</Text>
      </View>

      <Text style={styles.descricao}>
        Nosso aplicativo ajuda você a adotar práticas sustentáveis, localizar pontos de coleta
        e denunciar problemas ambientais com facilidade.
      </Text>

      <View style={styles.botoesContainer}>
        <TouchableOpacity
          style={styles.botao}
          onPress={() => navigation.navigate('Dicas')}
        >
          <Ionicons name="leaf-outline" size={20} color="#fff" />
          <Text style={styles.textoBotao}>Dicas Sustentáveis</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botao}
          onPress={() => navigation.navigate('Coleta')}
        >
          <Ionicons name="location-outline" size={20} color="#fff" />
          <Text style={styles.textoBotao}>Pontos de Coleta</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botao}
          onPress={() => navigation.navigate('Formulario')}
        >
          <Ionicons name="warning-outline" size={20} color="#fff" />
          <Text style={styles.textoBotao}>Denunciar</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
            style={styles.botao}
            onPress={() => navigation.navigate('Desenvolvedores')}
        >
            <Ionicons name="people-outline" size={20} color="#fff" />
            <Text style={styles.textoBotao}>Sobre os Desenvolvedores</Text>
        </TouchableOpacity>

      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 10,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2E7D32',
  },
  slogan: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
  },
  descricao: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginBottom: 30,
    paddingHorizontal: 10,
  },
  botoesContainer: {
    width: '100%',
  },
  botao: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4CAF50',
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
    justifyContent: 'center',
  },
  textoBotao: {
    color: '#fff',
    marginLeft: 10,
    fontSize: 16,
  },
});
