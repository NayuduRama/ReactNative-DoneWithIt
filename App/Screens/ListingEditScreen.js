import React from 'react';
import * as Yup from 'yup'

import { AppForm, AppFormField, SubmitButton } from '../components/forms';
import AppFormPicker from '../components/forms/AppFormPicker';
import Screen from './Screen';

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    price: Yup.string().required().max(100000).label("Price"),
    description: Yup.string().label("Description"),
    category: Yup.object().required().nullable().label("Category")

})

const categories =[
    {label:"Furniture", value:'1'},
    {label:"Clothing", value:'2'},
    {label:"Electronic", value:'3'}

]

function ListingEditScreen() {
    return (
         <Screen>
             <AppForm
                initialValues={{
                                    title:"",
                                    price:"",
                                    category:null,
                                    description:"" } }
                onSubmit={values => console.log(values)}
                validationSchema={validationSchema}
                >
                 <AppFormField
                                name="title"
                                placeholder="Title"
                                />
                <AppFormField
                                name="price"
                                keyboardType="numeric"
                                maxLength={8}
                                placeholder="Price"
                                width={120}
                                />
                <AppFormPicker
                                items={categories}
                                name="category"
                                placeholder="Category"
                                width="50%"
                                />
                <AppFormField
                                name="description"
                                maxLength={255}
                                multiline
                                numberOfLines={3}
                                placeholder="Description"
                                />
                <SubmitButton title="Post"/>
             </AppForm>
         </Screen>
    );
}

export default ListingEditScreen;