import React from "react";
import { View, Text, TouchableOpacity, Share } from "react-native";
import styles from "./style";


export default function ResultIMC(props){

    const onShare = async () => {
        const result = await Share.share({
            message: "Meu IMC hoje é: " + props.resultIMC
        })
    }

    return(
        <View style={styles.contextImc}>

            <View style={styles.boxShareButton}>
                {props.resultIMC != null ?
                <TouchableOpacity 
                    onPress={onShare}
                    style={styles.shared}>
                    <Text style={styles.sharedText}>Share</Text>
                </TouchableOpacity>
                :
                <View/>
                }
            </View>

            <Text style={styles.information}>{props.messageResultImc}</Text>
            <Text style={styles.numberImc}>{props.resultIMC}</Text>
        </View>
    )
}