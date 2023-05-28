import React, {Dispatch, SetStateAction} from 'react';
import { GestureResponderEvent, ImageProps, ImageSourcePropType } from 'react-native';
import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';

export interface custiomInputProps {
    placeholder: string,
    value: string,
    setValue: Dispatch<SetStateAction<string>>,
    secureTextEntry:boolean
}

export interface custiomButtonProps {
    text: string,
    onPress: Dispatch<SetStateAction<string>>,
    type: string
}

export interface modalWindowProps {
    title: string,
    date: string,
    content: any,
    onPress: Dispatch<SetStateAction<string>>,
}

export interface socialAuthButtonProps {
    onPress: (event: GestureResponderEvent) => void,
    logo: any,
}