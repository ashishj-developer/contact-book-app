import './index.css'
import { LuPhone } from "react-icons/lu";
import { MdOutlineMailOutline } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { useState } from 'react';



const Form = ({updateForm}) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [msg, setMsg] = useState('');

    const updateName = (e) => {
        setName(e.target.value);
    }

    const updateEmail = (e) => {
        setEmail(e.target.value);
    }

    const updatePhone = (e) => {
        setPhone(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (name === '' || email === '' || phone === '') {
            setMsg('All fields are required');
            return;
        }
        if (phone.length !== 10) {
            setMsg('Phone number must be 10 digits');
            return;
        }

        if (!email.includes('@') || !email.includes('.')) {
            setMsg('Please enter a valid email address');
            return;
        }
        if (msg !== '') {
            return;
        }

        const newContact = { name, email, phone };
        await updateForm(newContact);
        setName('');
        setEmail('');
        setPhone('');
        setMsg('Contact added successfully!');

        setTimeout(() => {
            setMsg('');
        }, 3000);

        
    }



    return (
        <div className="formCard">
            <h1 className="formHeading">Add New Contact</h1>
            <form className="form">
                <label className="form-label">
                    <CgProfile className="profile-icon" />
                    Name</label>
                <input type="text" placeholder="Enter Full Name" className="input-field" value={name} onChange={updateName} />
                <label className="form-label"
                ><MdOutlineMailOutline className="profile-icon" />
                    Email</label>
                <input type="email" placeholder="Enter Email Address" className="input-field" value={email} onChange={updateEmail}  />
                <label className="form-label">
                    <LuPhone className="profile-icon" />
                    Phone
                </label>
                <input type="tel" placeholder="Enter 10-digit Phone Number" className="input-field" value={phone} onChange={updatePhone} />
                <button type="submit" onClick={handleSubmit} className="submit-button">Add Contact</button>
                <p>{msg}</p>
            </form>
        </div>
    )
}

export default Form