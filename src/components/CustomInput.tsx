import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react';
import { Controller, UseControllerProps} from 'react-hook-form';

import { custiomInputProps } from '../../constants/types';

const CustomInput = ({control, rules = {}, name, placeholder, secureTextEntry, inputValue, onChangeValue}: custiomInputProps & UseControllerProps) => {

    return (
        <Controller
            control={control}
            name={name}
            rules={rules}
            render={({field: {value, onChange, onBlur}, fieldState:{error}}) => (
                <>
                    <View style={[styles.container, {borderColor: error ? '#E6007E' : '#3AAA35'}]}>
                        <TextInput
                            value={inputValue}
                            onChangeText={onChange}
                            onBlur={onBlur}
                            placeholder={placeholder}
                            secureTextEntry={secureTextEntry}
                            style={styles.input}
                            // onChange={e => onChangeValue(e.target.value)}
                        />
                    </View>
                    {error && <Text style={{color:"#E6007E"}}>{error.message || 'Error'}</Text>}
                </>
                
            )}
        />
        
    )
}

export default CustomInput

const styles = StyleSheet.create({
    container:{
        width: '90%',
        borderWidth: 2,
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