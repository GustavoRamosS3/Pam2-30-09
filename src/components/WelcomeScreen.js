import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const WelcomeScreen = ({ route }) => {
    const { usuario } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bem-vindo, {usuario.nome}!</Text>
            <Text style={styles.email}>Email: {usuario.email}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#2196f3"
    },
    title: {
        fontSize: 24,
        color: '#ffff'
    },
    email: {
        fontSize: 18,
        color: '#ffff'

    },
});

export default WelcomeScreen;
