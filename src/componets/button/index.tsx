import { TouchableOpacity, Text } from "react-native"; 

import { styles } from "./style"
import React from "react";

export function Button(){
    return (
        <TouchableOpacity style={styles.button}>
            <Text style={styles.title}>Fazer Agendamento  ❯</Text>
        </TouchableOpacity>
    )
}