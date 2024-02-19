import React from "react";
import {useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, Vibration, Keyboard, Pressable } from "react-native";

import ResultIMC from "./ResultIMC";
import styles from "./style";

export default function Form(){

    const [height, setHeight] = useState(null);
    const [weight, setWeight] = useState(null);
    const [messageImc, setMessageImc] = useState("preencha o peso e altura");
    const [imc, setImc] = useState(null);
    const [textButton, setTextButton] = useState("Calcular");
    const [errorMessage, setErrorMessage] = useState(null);

    //função que calcula o IMC
    function imcCalculator(){
        let heightFormat = height.replace(",",".")
        return setImc((weight / (heightFormat * heightFormat)).toFixed(2))
    }
    //função que irá validar se os campos estão preenchidos, caso não! Mostra uma mensagem e vibra o celular
    function verificationImc(){
        if(imc == null){
            Vibration.vibrate();
            setErrorMessage("Campo obrigatório*")
        }
    }
    //função que irá validar o IMC e chama as funções que calculam e verificam o IMC 
    function validationImc(){
        if(weight != null && height != null){
            imcCalculator()
            setHeight(null)
            setWeight(null)
            setMessageImc("Seu IMC é igual:");
            setTextButton("Calcular Novamente")
            setErrorMessage(null)
            return
        }
        verificationImc()
        setImc(null)
        setTextButton("Calcular")
        setMessageImc("preencha o peso e altura")
    }

    return(
        <Pressable onPress={Keyboard.dismiss} style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Altura</Text>
                <Text style={styles.errorMessage}>{errorMessage}</Text>
                <TextInput
                    style={styles.formInput}
                    onChangeText={setHeight}
                    value={height}
                    placeholder="Ex.: 1.75"
                    keyboardType="numeric"
                />

                <Text style={styles.formLabel}>Peso</Text>
                <Text style={styles.errorMessage}>{errorMessage}</Text>
                <TextInput
                    style={styles.formInput}
                    onChangeText={setWeight}
                    value={weight}
                    placeholder="Ex.: 75.365"
                    keyboardType="numeric"
                />

                <TouchableOpacity style={styles.buttonCalculator}
                    onPress={() => { validationImc() }}
                >
                    <Text style={styles.textButtonCalculator}> {textButton} </Text>
                </TouchableOpacity>
            </View>
                <ResultIMC messageResultImc={messageImc} resultIMC={imc}/>
        </Pressable>
    )
}