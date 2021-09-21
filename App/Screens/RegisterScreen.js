import React from 'react';
import { StyleSheet, Image } from 'react-native';
import * as Yup from 'yup';
 
import { AppForm, AppFormField, SubmitButton } from '../components/forms'
import Screen from '../Screens/Screen';  

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password"),
})
function RegisterScreen(props) { 
    console.log(validationSchema);
    return (
         <Screen>
              
             <AppForm 
                initialValues={{email: " ", password: ""}}
                onSubmit={values => console.log(values)}
                validationSchema={validationSchema}
             > 
                <AppFormField 
                                            icon="account"
                                            placeholder="Name" 
                                            autoCorrect={false} 
                                            name="name"/>
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
                <SubmitButton title="Register"/>

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
export default RegisterScreen;