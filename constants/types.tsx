import {Dispatch, SetStateAction} from 'react';
import { GestureResponderEvent, NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';
import { SubmitHandler, } from 'react-hook-form';


export interface custiomInputProps {
    name: string,
    placeholder: string,
    secureTextEntry:boolean,
    inputValue?: string,
    onChangeValue?: any 
}

export interface custiomButtonProps {
    text: string,
    onPress: Dispatch<SetStateAction<string>> | SubmitHandler<React.BaseSyntheticEvent>,
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
    disabled?: boolean,
}

export type StackParamsList = {
    SignIn: undefined;
    Home: undefined;
    ForgotPassword: undefined;
    ResetPassword: undefined;
    SignUp: undefined;
    ConfirmEmail: undefined;
    navigate: any,
    reset:any
    }

export type FormData = {
    firstName: string;
    lastName: string;
};

export type UserProps ={
    id?: number;
    name: string | null | undefined;
    email?: string,
    password?: string,
    picture?: any
}
