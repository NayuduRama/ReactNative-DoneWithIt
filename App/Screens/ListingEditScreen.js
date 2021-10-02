import React from 'react';
import * as Yup from 'yup'
import CategoryPickerItem from '../components/CategoryPickerItem';

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
    {label:"Furniture", value:'1', backgroundColor:"red", icon:"apps" },
    {label:"Clothing", value:'2', backgroundColor:"green", icon:"shopping" },
    {label:"Electronic", value:'3', backgroundColor:"blue", icon:"camera" },
    {label:"cars", value:'4', backgroundColor:"yellowgreen", icon:"car-sports" },
    {label:"Games", value:'5', backgroundColor:"orange", icon:"gamepad-variant" },
    {label:"Sports", value:'6', backgroundColor:"#be03fc", icon:"football" },
    {label:"Movies & Music", value:'7', backgroundColor:"#fc03b1", icon:"movie-open" },
    {label:"Books", value:'8', backgroundColor:"#03fcf4", icon:"book-open-page-variant" },
    {label:"Others", value:'9', backgroundColor:"gray", icon:"lock" }  

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
                                PickerItemComponent={CategoryPickerItem}
                                placeholder="Category"
                                numberOfColumns={3}
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