import React from 'react';
import { useFormikContext } from 'formik';

import AppInputText from '../AppInputText';
import ErrorMessage from './ErrorMessage';

function AppFormField({name, width, ...otherProps}) {
    const { setFieldTouched, handleChange, errors, touched} = useFormikContext();
    return (
        <>
        <AppInputText  
                    onBlur={() => setFieldTouched(name)}
                    onChangeText={handleChange(name)} 
                    width={width}
                    {...otherProps}
                    >
                </AppInputText>
        <ErrorMessage error={errors[name]} visible={touched[name]}/>
        
        </>
    );
}

export default AppFormField;