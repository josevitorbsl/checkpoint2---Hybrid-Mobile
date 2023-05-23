import React from "react";
import { View, StyleSheet, TextInput, Button, Text } from 'react-native';

export default function Login(){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Crie sua conta no App</Text>
            <TextInput style={styles.input} placeholder="Digite seu Email"></TextInput>
            <TextInput style={styles.input} placeholder="Digite sua senha"></TextInput>
            <Button title="Criar Conta" >
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 180,
        alignItems: 'center',
        backgroundColor: 'cyan'
    },
    input: {
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 5,
        marginTop: 10,
        marginBottom: 10,
        height: 40,
        width: 200,
        backgroundColor: 'white'
    },
    text:{
        fontSize: 50,
    }
});