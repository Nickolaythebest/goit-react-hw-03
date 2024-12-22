import style from './ContactForm.module.css'
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";

const FeedbackSchema = Yup.object().shape({
    username: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
    phone: Yup.string()
    .matches(
      /^\d{3}-\d{2}-\d{2}$/,
      'Уведiть номер телефону у форматi 000-00-00'
    )
    .required('Це поле обов`язкове'),
})
const initialValues = {
    username: "",
    phone: "",
}

const ContactForm = ({onAdd}) => {
    const nameFieldId = `${useId()}-name`;
    const phoneFieldId = `${useId()}-phone`;

    const handleSubmit = (values, actions) => {
        const newContact = {
            id: `${Date.now()}`,
            name: values.username,
            number: values.phone,

        };
        onAdd(newContact);
        console.log(newContact);
        actions.resetForm()
    }

   
    return (
        <Formik
        validationSchema={FeedbackSchema}
        initialValues={initialValues}
        onSubmit={handleSubmit}
        >
            <Form className={style.container}>
                <div className={style.dataContainer}>
                <label htmlFor={nameFieldId}>Name</label>
                <Field type="text" name='username' id={nameFieldId} className={style.typing}/>
                <ErrorMessage className={style.msg} name='username' component='span'/>
                </div>
                <div className={style.dataContainer}>
                    <label htmlFor={phoneFieldId}>Number</label>
                    <Field type="tel" name='phone' id={phoneFieldId} placeholder="000-00-00" className={style.typing} />
                    <ErrorMessage className={style.msg} name='phone' component='span' />
                </div>
                <button type='submit' className={style.butotnForm}>Add Contact</button>
            </Form>
        </Formik>
    )
}
export default ContactForm;