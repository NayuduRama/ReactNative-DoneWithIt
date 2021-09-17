import React from 'react'; 
import AppText from '../components/AppText'

function ErrorMessage({error, visible}) {
    if(!error || !visible) return null;
    return ( 
            <AppText style={{color: "red"}}>{error} </AppText>
    );
}  
export default ErrorMessage;