import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Formik } from 'formik'; 
import * as Yup from 'yup';

import AppButton from '../components/AppButton';
import AppInputText from '../components/AppInputText';
import Screen from '../Screens/Screen'
import AppText from './components/AppText';
import ErrorMessage from '../components/forms/ErrorMessage';
import AppFormField from '../components/forms/AppFormField';
import SubmitButton from '../components/forms/SubmitButton';
import AppForm from '../components/forms/AppForm';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password"),
})
function LoginScreen(props) { 
    return (
         <Screen>
             <Image style={styles.logo} source={require('../assets/logo-red.png')}/>
             <AppForm 
                initialValues={{email: " ", password: ""}}
                onSubmit={values => console.log(values)}
                validationSchema={validationSchema}
             > 
                <AppFormField 
                                            icon="email"
                                            placeholder="Email"
                                            autoCapitalize="none"
                                            autoCorrect={false}
                                            keyboardType="email-address"
                                            textContentType="emailAddress"
                                            name="email"/>
                <AppFormField 
                                icon="lock"
                                placeholder="Password"
                                autoCapitalize="none"
                                name="password"
                                autoCorrect={false} 
                                textContentType="password" 
                                secureTextEntry/>
                <SubmitButton title="Login"/>

             </AppForm>
         </Screen>
    );
}
const styles = StyleSheet.create({
    logo: {
            width: 80,
            height: 80,
            alignSelf: "center",
            marginTop: 50, 
            marginBottom: 20
    }
    
})
export default LoginScreen;