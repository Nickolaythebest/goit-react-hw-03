import s from './Contact.module.css'
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";

const Contact = ({id, name, number, onDelete}) => {
    return (
        <div className={s.container}>
            <span>
                <span className={s.item}>
                    <FaUser className={s.icons}/>
                    <p className={s.text}>{name}</p>
                </span>
                <span className={s.item}>
                   <BsFillTelephoneFill className={s.icons}/>
                    <p className={s.text}>{number}</p>
                </span>
                </span>
            <button type='button' className={s.buttonContact} onClick={() => onDelete(id)}>Delete</button>
        </div>
    )
}
export default Contact;
