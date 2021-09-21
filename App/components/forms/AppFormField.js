import React from 'react';
import { useFormikContext } from 'formik';

import AppInputText from '../AppInputText';
import ErrorMessage from './ErrorMessage';

function AppFormField({name, ...otherProps}) {
    const { setFieldTouched, handleChange, errors, touched} = useFormikContext();
    return (
        <>
        <AppInputText  
                    onBlur={() => setFieldTouched(name)}
                    onChangeText={handleChange(name)} 
                    {...otherProps}
                    >
                </AppInputText>
        <ErrorMessage error={errors[name]} visible={touched[name]}/>
        
        </>
    );
}

export default AppFormField;