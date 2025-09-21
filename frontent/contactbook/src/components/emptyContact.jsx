import { IoIosContacts } from "react-icons/io";
import './index.css'

const EmptyContact = () => {
    return (
        <div className="empty-contact">
            <IoIosContacts className="empty-contact-icon" size={44}/>
            <h1 className="empty-contact-heading">No contacts yet</h1>
            <p>Add your first contact using the form above.</p>
        </div>
    );
}

export default EmptyContact;