import React, { useState } from 'react';
import {Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from './LoginScreenStyle.js'

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState('');

  async function handleLogin() {
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'User-Agent': 'insomnia/8.6.1' },
      body: JSON.stringify({ email: email, senha: password })
    };

    try {
      const response = await fetch('http://localhost:8080/usuario/login', options);
      
      if (response.ok) {
        const data = await response.json();
        setUserData(data);
        setError('');
      } else {
        setError('Credenciais inválidas!');
        setUserData(null);
      }
    } catch (err) {
      console.error(err);
      setError('Erro de conexão');
    }
  }

  if (userData) {
    return (
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeText}>Bem-vindo, {userData.data.usuario.nome}!</Text>
        <Text style={styles.infoText}>Email: {userData.data.usuario.email}</Text>
        <Text style={styles.infoText}>Sexo: {userData.data.usuario.sexo}</Text>
        <TouchableOpacity style={styles.logoutButton} onPress={() => setUserData(null)}>
          <Text style={styles.logoutButtonText}>Sair</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela de Login</Text>
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
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

export default LoginScreen;
