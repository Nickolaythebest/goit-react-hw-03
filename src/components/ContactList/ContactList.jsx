
import Contact from '../Contact/Contact.jsx'
import s from './ContactList.module.css'

const ContactList = ({data, onDelete}) => {
    return (
        <>
        <ul className={s.list}>
            {data.map(({id, name, number}) => 
            <li key={id}>
                <Contact id={id} name={name} number={number} onDelete={onDelete}/>
            </li>
            )}
        
        </ul>
        </>
        
    )
}
export default ContactList;