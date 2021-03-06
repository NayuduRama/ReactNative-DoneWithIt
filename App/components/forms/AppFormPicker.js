import React from 'react'; 
import { useFormikContext } from 'formik';

import AppPicker from '../AppPicker';
import ErrorMessage from '../forms/ErrorMessage' 

function AppFormPicker({items, name, numberOfColumns, PickerItemComponent, placeholder, width }) {
    const { errors, setFieldValue, touched, values } = useFormikContext();
    return (
        <>
            <AppPicker
                        items={items}
                        onSelectItem={(item) => setFieldValue(name, item)}
                        placeholder={placeholder}
                        selectedItem={values[name]}
                        numberOfColumns={numberOfColumns}
                        width={width}
                        PickerItemComponent={PickerItemComponent}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} /> 
        
        </>
    ); 
}

export default AppFormPicker;