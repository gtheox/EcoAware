import React, { useState } from 'react';
import { SafeAreaView, Text, StyleSheet, TouchableOpacity, ImageBackground, View, TextInput, Alert, KeyboardAvoidingView, Platform, ScrollView, Keyboard } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TextInputMask } from 'react-native-masked-text';

export default function TelaDenuncia({ navigation }) {
  const [nome, setNome] = useState('');
  const [cep, setCep] = useState('');
  const [estado, setEstado] = useState('');
  const [cidade, setCidade] = useState('');
  const [endereco, setEndereco] = useState('');
  const [numero, setNumero] = useState('');
  const [descricao, setDescricao] = useState('');

  async function buscarCep(cepDigitado) {
    const cepLimpo = cepDigitado.replace(/\D/g, '');
    setCep(cepDigitado);

    if (cepLimpo.length === 8) {
      try {
        const response = await fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`);
        const data = await response.json();

        if (data.erro) {
          Alert.alert("CEP não encontrado");
          setEstado('');
          setCidade('');
          setEndereco('');
        } else {
          setEstado(data.uf);
          setCidade(data.localidade);
          setEndereco(data.logradouro);
        }
      } catch (error) {
        Alert.alert("Erro ao buscar CEP");
        console.error(error);
      }
    }
  }

  async function enviarDenuncia() {
    if (!cep || !endereco || !cidade || !estado || !numero || descricao.trim() === '') {
      Alert.alert("Erro", "Preencha todos os campos obrigatórios!");
      return;
    }

    const novaDenuncia = {
      nome: nome || "Anônimo",
      cep,
      estado,
      cidade,
      endereco,
      numero,
      descricao,
      data: new Date().toLocaleString(),
    };

    try {
      const denunciasSalvas = await AsyncStorage.getItem('DENUNCIAS');
      let lista = denunciasSalvas ? JSON.parse(denunciasSalvas) : [];

      lista.push(novaDenuncia);
      await AsyncStorage.setItem('DENUNCIAS', JSON.stringify(lista));

      Alert.alert("Denúncia enviada!", "Agradecemos sua colaboração.");

      setNome('');
      setCep('');
      setEstado('');
      setCidade('');
      setEndereco('');
      setNumero('');
      setDescricao('');
      Keyboard.dismiss();
    } catch (error) {
      Alert.alert("Erro", "Não foi possível salvar a denúncia.");
      console.error(error);
    }
  }

  return (
    <ImageBackground
      source={require('../../assets/BG.png')}
      style={styles.container}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.btnVoltar}>
        <Ionicons name="chevron-back" size={40} color="white" onPress={() => navigation.goBack()} />
        <Text style={{ fontSize: 25, left: 20, color: "white" }}>Denuncie aqui</Text>
      </SafeAreaView>

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          <View style={styles.content}>
            <TextInput
              style={styles.input}
              placeholder="Seu nome (opcional)"
              placeholderTextColor="#ccc"
              value={nome}
              onChangeText={setNome}
            />

            <TextInputMask
              type={'zip-code'}
              style={styles.input}
              placeholder="CEP *"
              placeholderTextColor="#ccc"
              value={cep}
              onChangeText={buscarCep}
            />

            <TextInput
              style={styles.input}
              placeholder="Estado"
              placeholderTextColor="#ccc"
              value={estado}
              editable={false}
            />

            <TextInput
              style={styles.input}
              placeholder="Cidade"
              placeholderTextColor="#ccc"
              value={cidade}
              editable={false}
            />

            <TextInput
              style={styles.input}
              placeholder="Endereço"
              placeholderTextColor="#ccc"
              value={endereco}
              editable={false}
            />

            <TextInput
              style={styles.input}
              placeholder="Número *"
              placeholderTextColor="#ccc"
              keyboardType="numeric"
              value={numero}
              onChangeText={setNumero}
            />

            <TextInput
              style={[styles.input, { height: 100 }]}
              placeholder="Descreva o ocorrido *"
              placeholderTextColor="#ccc"
              value={descricao}
              onChangeText={setDescricao}
              multiline
            />

            <TouchableOpacity style={styles.btn} onPress={enviarDenuncia}>
              <Text style={styles.btnText}>Enviar denúncia</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.btn, { backgroundColor: '#555', marginTop: 15 }]}
              onPress={() => navigation.navigate('TelaHistDenuncias')}
            >
              <Text style={styles.btnText}>Ver histórico de denúncias</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 40,
  },
  btnVoltar: {
    flexDirection: 'row',
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 1,
  },
  content: {
    marginTop: 120,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    backgroundColor: 'white',
    width: '100%',
    padding: 12,
    borderRadius: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  btn: {
    backgroundColor: '#3b82f6',
    padding: 15,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
  },
  btnText: {
    color: 'white',
    fontSize: 16,
  },
});
