import {Dispatch, SetStateAction} from 'react';
import { GestureResponderEvent } from 'react-native';
import { SubmitHandler, FieldValues, UseControllerProps, ControllerRenderProps, ControllerFieldState, UseFormStateReturn} from 'react-hook-form';


export interface custiomInputProps {
    name: string,
    placeholder: string,
    secureTextEntry:boolean,
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
}

export type StackParamsList = {
    SignIn: undefined;
    Home: undefined;
    ForgotPassword: undefined;
    ResetPassword: undefined;
    SignUp: undefined;
    ConfirmEmail: undefined;
    navigate:  (p: string) => void;
}

export type FormData = {
    firstName: string;
    lastName: string;
};

export type User ={
    id: number;
    name: string,
    email: string,
    password: string
}
