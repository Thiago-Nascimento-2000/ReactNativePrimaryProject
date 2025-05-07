import { View, Text, TextInput, StatusBar, SafeAreaView, Image } from "react-native"


import {Button} from "../componets/button"
import React from "react"
import { styless } from "./style"
import { styles } from "../componets/button/style"

export default function Index(){
    return (
        <View style={styless.container}>
            <Image
                source={require('../img/6158126.jpg')}
                style={styless.imagem}
            />
            <Text style={{ color: 'white', fontSize: 25, textAlign: 'center'}}>Promoções exclusivas {'\n'} para agendamentos pelo app</Text>
            <Button/>
        </View>
    )
}