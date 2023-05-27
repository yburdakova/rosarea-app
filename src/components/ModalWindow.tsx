import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

import { modalWindowProps } from '../../constants/types'

const ModalWindow = ({title, date, content, onPress}:modalWindowProps)  => {
    return (
        <View style={styles.modal_container}>
                    <Text style={styles.modal_title}>{title} </Text>
                        <Text style={styles.modal_subtitle}>Rosarea Ecommerce Application</Text>
                        <Text style={styles.modal_date}>Last Updated: <Text>{date}</Text></Text>
                        <View style={{height:'82%'}}>{content}</View>
                        <Button title={`Close ${title}`} onPress={onPress} color='green'/>
                    </View>
    )
}

export default ModalWindow

const styles = StyleSheet.create({
    modal_container:{
        flexDirection: 'column',
        marginTop:60, 
        marginHorizontal:10,
    },
    modal_title:{
        fontSize: 22,
        fontFamily: 'Raleway-xbold',
        textAlign: 'center',
    },
    modal_subtitle:{
        fontSize: 18,
        fontFamily: 'Raleway-xbold',
        textAlign: 'center',
        color:'green',
    },
    modal_date:{
        fontSize: 16,
        fontFamily: 'Raleway-regular',
        marginVertical:5,
        color: 'gray'
    },
    modal_button:{
        width: '90%',
        borderRadius: 50,
        paddingVertical: 10,
        paddingHorizontal:20,
        margin:10,
        alignItems:'center'
    }
})