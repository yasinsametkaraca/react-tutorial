import React from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {Button, FormField, Label} from "semantic-ui-react";

export default function ProductAdd() {

    const initialValues = {   //formik ile form yapmadan önce başlangıç değerleri vermemizi ister.
        productName:"",
        unitPrice:10,
    };
    const schema = Yup.object({          //Yup validation yapmamızı sağlar.
       productName: Yup.string().required("Product name is required"),
       unitPrice: Yup.number().required("Product price is required")
    });

    return (
           <Formik
               initialValues={{initialValues}}
               validationSchema={schema}
               onSubmit={(values) => {console.log(values)}}>                            {/*submit olduğunda o object çalışır*/}
                <Form className="ui form">
                    <FormField>
                        <Field name="productName" placeholder="Product Name"></Field>
                        <ErrorMessage name="productName" render={error => <Label pointing basic color="red" content={error}></Label>}></ErrorMessage>
                    </FormField>
                    <FormField>
                        <Field name="unitPrice" placeholder="Product Price"></Field>
                        <ErrorMessage name="unitPrice" render={error => <Label pointing basic color="red" content={error}></Label>}></ErrorMessage>
                    </FormField>
                </Form>
                <Button color="green" type="submit">Add</Button>
           </Formik>
    );
}
