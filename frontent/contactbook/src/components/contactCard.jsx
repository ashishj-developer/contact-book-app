import './index.css';
import { IoIosContact } from "react-icons/io";
import { MdDeleteOutline } from "react-icons/md";


const ContactCard = ({ contact , deleteContact}) => {

  const onlcickDelete = () => {
    deleteContact(contact.id);
  }

  return (
    <div className='contact-card'>
        <div className='contact-card-header'>
        <IoIosContact size={50} color="#4A90E2" />
        <h2>{contact.name}</h2>
        <button onClick={onlcickDelete} className='delete-button' title="Delete Contact">
        <MdDeleteOutline size={24} color="#E94E77" style={{cursor: 'pointer'}} />
        </button>
        </div>
      <p><strong>Email:</strong> {contact.email}</p>
      <p><strong>Phone:</strong> {contact.phone}</p>
    </div>
  );
};

export default ContactCard;