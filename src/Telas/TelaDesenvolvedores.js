import React from 'react';
import { SafeAreaView, Text, StyleSheet, TouchableOpacity, Image, ImageBackground, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function TelaDesenvoledores({ navigation }) {
  return (
    <ImageBackground
      source={require('../../assets/BG.png')}
      style={styles.container}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.btnVoltar}>
        <Ionicons name="chevron-back" size={40} color="white" onPress={() => navigation.goBack()}/>
        <Text style={{ fontSize: 25, left :20, color: "white" }}>Desenvolvedores</Text>
      </SafeAreaView>

      <View style={styles.content}>
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
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
});
