import React from "react";
import { View, StyleSheet, Text, Button } from 'react-native';

export default function Jogo({navigation}) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>MODOS DE JOGO</Text>
            <View style={styles.botton}>
                <Button title="MODO FÁCIL" onPress={() => navigation.navigate('MODO FACIL')}></Button>
            </View>
            <View style={styles.botton}>
                <Button title="MODO MÉDIO" onPress={() => navigation.navigate('MODO MEDIO')}></Button>
            </View>
            <View style={styles.botton}>
                <Button title="MODO DIFÍCIL" onPress={() => navigation.navigate('MODO DIFICIL')}></Button>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 200,
        backgroundColor: 'cyan'
    },
    botton: {
        marginBottom: 10
    },
    text:{
        marginBottom: 10,
        fontSize: 40,
        textAlign: 'center'
    }
});