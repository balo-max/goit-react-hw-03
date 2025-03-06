import css from './Contact.module.css'

import { BiSolidContact } from "react-icons/bi";
import { FiPhoneCall } from "react-icons/fi";

export default function Contact({contact: {id, name, number}, onDelete}) {
    return (
        <>
            <div className={css.wrapper}>
                <div className={css.iconWrapper}>
                    <BiSolidContact />
                    <FiPhoneCall/>
                </div>
                <div>
                    <p className={css.contactText}>{name}</p>
                    <p className={css.contactText}>{number}</p>
                </div>
            </div>
            <button className={css.contactBtn} onClick={() => onDelete(id)}>Delete</button>
        </>
    );
}