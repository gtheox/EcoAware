import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, StyleSheet, ImageBackground, View, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function TelaHistDenuncias({ navigation }) {
  const [denuncias, setDenuncias] = useState([]);

  useEffect(() => {
    async function carregarDenuncias() {
      try {
        const dados = await AsyncStorage.getItem('DENUNCIAS');
        if (dados) {
          setDenuncias(JSON.parse(dados));
        }
      } catch (error) {
        console.error('Erro ao carregar denúncias:', error);
      }
    }

    const unsubscribe = navigation.addListener('focus', carregarDenuncias);
    return unsubscribe;
  }, [navigation]);

  return (
    <ImageBackground
      source={require('../../assets/BG.png')}
      style={styles.container}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.btnVoltar}>
        <Ionicons name="chevron-back" size={40} color="white" onPress={() => navigation.goBack()} />
        <Text style={styles.title}>Histórico de denúncias</Text>
      </SafeAreaView>

      <ScrollView contentContainerStyle={styles.scrollView}>
        {denuncias.length === 0 ? (
          <Text style={styles.semDados}>Nenhuma denúncia encontrada.</Text>
        ) : (
          denuncias.map((item, index) => (
            <View key={index} style={styles.card}>
              <Text style={styles.item}><Text style={styles.bold}>Nome:</Text> {item.nome}</Text>
              <Text style={styles.item}><Text style={styles.bold}>CEP:</Text> {item.cep}</Text>
              <Text style={styles.item}><Text style={styles.bold}>Estado:</Text> {item.estado}</Text>
              <Text style={styles.item}><Text style={styles.bold}>Cidade:</Text> {item.cidade}</Text>
              <Text style={styles.item}><Text style={styles.bold}>Endereço:</Text> {item.endereco}, Nº {item.numero}</Text>
              <Text style={styles.item}><Text style={styles.bold}>Descrição:</Text> {item.descricao}</Text>
              <Text style={styles.item}><Text style={styles.bold}>Data:</Text> {item.data}</Text>
            </View>
          ))
        )}
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  btnVoltar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 40,
    paddingLeft: 20,
  },
  title: {
    fontSize: 24,
    color: 'white',
    marginLeft: 20,
  },
  scrollView: {
    padding: 20,
  },
  card: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  item: {
    fontSize: 16,
    marginBottom: 5,
  },
  bold: {
    fontWeight: 'bold',
  },
  semDados: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    marginTop: 50,
  },
});
