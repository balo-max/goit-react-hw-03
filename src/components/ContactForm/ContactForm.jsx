import { nanoid } from 'nanoid/non-secure';

import css from './ContactForm.module.css'

import { Formik, Form, Field, ErrorMessage } from 'formik'

const initialValues = {
    name: "",
    number: ""
};

export default function ContactForm({id: {nameId, numberId}, onAdd, validationSchema}) {

    const handleSubmit = (values, actions) => {
        const newContact = { id: nanoid(), ...values };
        onAdd(newContact);
		actions.resetForm();
    };
    
    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
            <Form className={css.contactForm}>
                <label htmlFor={nameId}>Name</label>
                <Field className={css.formInput} type="text" name="name" id={nameId} />
                <ErrorMessage className={css.errorMessage} name="name" component="span"/>
                <label htmlFor={numberId}>Number</label>
                <Field className={css.formInput} type="text" name="number" id={numberId} />
                <ErrorMessage className={css.errorMessage} name="number" component="span"/>
                
                <button className={css.formBtn} type="submit">Add contact</button>
            </Form>
        </Formik>
    );
}