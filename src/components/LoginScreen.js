import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const LoginScreen = ({ navigation }) => { // Adicione a prop navigation aqui
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    async function handleLogin() {
      const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'User-Agent': 'insomnia/8.6.1' },
        body: JSON.stringify({ email, senha: password }) // Corrigido aqui
      };
  
      try {
        const response = await fetch('http://localhost:8080/usuario/login', options);
        const data = await response.json();
        
        // Verifique se a resposta tem os dados do usuário e navegue se for o caso
        if (data && data.usuario) { // Supondo que a resposta contém um objeto `usuario`
          navigation.navigate('Welcome', { usuario: data.usuario }); // Passa os dados do usuário
        } else {
          Alert.alert('Credenciais inválidas', 'Tente novamente.');
        }
      } catch (err) {
        console.error(err);
      }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholder="Senha"
                secureTextEntry
                value={password} // Corrigido aqui
                onChangeText={setPassword} // Corrigido aqui
            />
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
        backgroundColor: "#2196f3"
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        color: "#ffff"
    },
    input: {
        height: 40,
        borderColor: '#ffff',
        color: '#ffff',
        borderWidth: 1,
        marginBottom: 15,
        paddingHorizontal: 10,
    },
    button: {
        backgroundColor: 'rgba(255, 255, 255, 0.3)', 
        borderColor: '#ffff',
        borderWidth: 1,
        borderRadius: 5,
        paddingVertical: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: '#ffff',
        fontSize: 16,
    },
});

export default LoginScreen;
