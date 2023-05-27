import React, {Dispatch, SetStateAction} from 'react';

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