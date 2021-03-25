import { Component } from "react";

interface IUserProfile {
    age: number;
    name: string
}

interface ProfileScreenProps {
    navigation: NavigationScreenProp<any>;
    userProfile: IUserProfile; 
}

interface ProfileScreenState {
    showNameEditModal: boolean;
}

const LoginScreen: React.FC = ({navigation}) => {

}


export default LoginScreen;