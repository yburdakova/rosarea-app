import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react';

import { custiomInputProps } from '../../constants/types';

const CustomInput = ({value, setValue, placeholder, secureTextEntry}:custiomInputProps) => {
    return (
        <View style={styles.container}>
            <TextInput 
                placeholder={placeholder}
                value={value}
                onChange={setValue}
                secureTextEntry={secureTextEntry}
                style={styles.input}
            />
        </View>
    )
}

export default CustomInput

const styles = StyleSheet.create({
    container:{
        width: '90%',
        borderWidth: 1,
        borderColor:'#3AAA35',
        borderRadius: 50,
        paddingVertical: 10,
        paddingHorizontal:20,
        margin:10,
    },
    input:{
        fontSize: 20,
    }
})