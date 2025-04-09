import React from 'react';
import {
  SafeAreaView, Text, StyleSheet, TouchableOpacity, Image, ImageBackground, View, Linking} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

    export default function TelaDesenvoledores({ navigation }) {
      const desenvolvedores = [
        {
          nome: 'Gabriel Teodoro Gonçalves Rosa',
          rm: '555962',
          imagem: require('../../assets/gabriel.png'),
          linkedin: 'https://www.linkedin.com/in/gabriel-teodoro-gon%C3%A7alves-rosa-a26970236/',
          github: 'https://github.com/gtheox',
        },
        {
          nome: 'Luka Yuiti Ura SHibuya',
          rm: '558123',
          imagem: require('../../assets/luka.png'),
          linkedin: 'https://www.linkedin.com/in/luka-shibuya-b62a322b3/',
          github: 'https://github.com/lukashibuya',
        },
        {
          nome: 'Eduardo Ribeiro Giovannini',
          rm: '555030',
          imagem: require('../../assets/du.png'),
          linkedin: 'https://www.linkedin.com/in/eduardo-giovannini-157216262/',
          github: 'https://github.com/DuGiovannini',
        },
       
      ];
    
      return (
        <ImageBackground
          source={require('../../assets/BG.png')}
          style={styles.container}
          resizeMode="cover"
        >
          <SafeAreaView style={styles.btnVoltar}>
            <Ionicons
              name="chevron-back"
              size={40}
              color="white"
              onPress={() => navigation.goBack()}
            />
            <Text style={styles.titulo}>Desenvolvedores</Text>
          </SafeAreaView>
    
          <View style={styles.content}>
            {desenvolvedores.map((dev, index) => (
              <View key={index} style={styles.card}>
                <Image source={dev.imagem} style={styles.foto} />
                <Text style={styles.nome}>{dev.nome}</Text>
                <Text style={styles.rm}>RM: {dev.rm}</Text>
    
                <View style={styles.links}>
                  <TouchableOpacity onPress={() => Linking.openURL(dev.linkedin)}>
                    <Ionicons name="logo-linkedin" size={28} color="#0e76a8" />
                  </TouchableOpacity>
    
                  <TouchableOpacity onPress={() => Linking.openURL(dev.github)}>
                    <Ionicons name="logo-github" size={28} color="#000" />
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
        </ImageBackground>
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
      },
      btnVoltar: {
        flexDirection: 'row',
        position: 'absolute',
        top: 40,
        left: 20,
        zIndex: 1,
        alignItems: 'center',
      },
      titulo: {
        fontSize: 25,
        left: 20,
        color: 'white',
      },
      content: {
        flex: 1,
        marginTop: 100,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        paddingHorizontal: 20,
        paddingBottom: 20,
      },
      card: {
        backgroundColor: 'rgba(255,255,255,0.9)',
        borderRadius: 15,
        padding: 15,
        alignItems: 'center',
        width: '90%',
      },
      foto: {
        width: 90,
        height: 90,
        borderRadius: 45,
        marginBottom: 10,
      },
      nome: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#2E7D32',
      },
      rm: {
        fontSize: 14,
        color: '#555',
        marginBottom: 10,
      },
      links: {
        flexDirection: 'row',
        gap: 20,
      },
    });