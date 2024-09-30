import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import credenciais from '../data/credenciais';

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleLogin = () => {
        const usuario = credenciais.find(u => u.email === email && u.senha === senha);
        
        if (usuario) {
            navigation.navigate('Welcome', { usuario });
        } else {
            Alert.alert('Credenciais inválidas', 'Tente novamente.');
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
            />
            <TextInput
                style={styles.input}
                placeholder="Senha"
                secureTextEntry
                value={senha}
                onChangeText={setSenha}
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
