import React from "react";
import { View, StyleSheet, TextInput, Button, Text } from 'react-native';

export default function Login({navigation}){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Login no App</Text>
            <TextInput style={styles.input} placeholder="Digite seu Email"></TextInput>
            <TextInput style={styles.input} placeholder="Digite sua senha"></TextInput>
            <View style={styles.viewBotao}>
                <Button title="Logar"></Button>
                <Button title="Criar Conta" onPress={() => navigation.navigate('Criar Conta')}></Button>
            </View>
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
    viewBotao:{
        flexDirection: 'row'
    }, 
    text:{
        fontSize: 50,
    }
});