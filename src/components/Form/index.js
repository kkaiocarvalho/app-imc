import React from "react";
import {useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, Vibration, Keyboard, Pressable, FlatList } from "react-native";

import ResultIMC from "./ResultIMC";
import styles from "./style";

export default function Form(){

    const [height, setHeight] = useState(null);
    const [weight, setWeight] = useState(null);
    const [messageImc, setMessageImc] = useState("preencha o peso e altura");
    const [imc, setImc] = useState(null);
    const [textButton, setTextButton] = useState("Calcular");
    const [errorMessage, setErrorMessage] = useState(null);
    const [imcList, setImcList] = useState([]);

    //função que calcula o IMC
    function imcCalculator(){
        /*let heightFormat = height.replace(",",".")
        let totalImc = (weight / (heightFormat * heightFormat)).toFixed(2);
        setImcList((arr) => [...arr, {id: new Date().getTime(), imc: totalImc}])
        setImc(totalImc)*/
        let heightFormat = height;
        if (heightFormat && heightFormat.length <= 3) {
            heightFormat = (parseFloat(heightFormat) / 100).toFixed(2);
        } else if (heightFormat) {
            heightFormat = heightFormat.replace(",", ".");
        }

        if (heightFormat) {
            let totalImc = (weight / (heightFormat * heightFormat)).toFixed(2);
            setImcList((arr) => [...arr, {id: new Date().getTime(), imc: totalImc}])
            setImc(totalImc)
        } else {
            setImc(null);
        }
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
        } else {
            verificationImc()
            setImc(null)
            setTextButton("Calcular")
            setMessageImc("preencha o peso e altura")
        }
    }

    return(
        <View style={styles.formContext}>
            {imc == null ?  
            <Pressable onPress={Keyboard.dismiss} style={styles.form}>
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

            </Pressable>
                : 
                <View style={styles.exhibitionResultImc}>
                    <ResultIMC messageResultImc={messageImc} resultIMC={imc}/>
                    <TouchableOpacity 
                        style={styles.buttonCalculator}
                        onPress={() => { validationImc() }}
                    >
                    <Text style={styles.textButtonCalculator}> {textButton} </Text>
                    </TouchableOpacity>
                </View>
                }
                <FlatList
                    showsVerticalScrollIndicator={false}
                    style={styles.listImcs}
                    data={imcList.reverse()}
                    renderItem={({item}) => {
                        return(
                            <Text style={styles.resultImcItem}>
                                <Text style={styles.textResultItemList}> Resultado IMC = </Text>
                                {item.imc}
                            </Text>
                        )
                    }}
                    keyExtractor={(item) => {
                        item.id
                    }}
                />
        </View>
    )
}