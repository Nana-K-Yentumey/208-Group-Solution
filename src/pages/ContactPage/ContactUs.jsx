import React, { useState } from 'react';
import './contact.css';
import Navbar2 from "../../components/Navbar2/Navbar2";
import Footer from '../../components/Footer/Footer';


const ContactUs = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission (e.g., send data to a server or API)
        console.log('Form submitted:', formData);
        alert('Form submitted successfully!');
    };

    return (
        <>
        <Navbar2 />
        <form onSubmit={handleSubmit} className='contact-form'>
            <p className="contact-us">Contact Us</p>
            <div className='name-group'>
            <div className='name-text'>
                <label htmlFor="firstName">First Name:</label>
                <input
                    className='name-input'
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className='name-text'>
                <label htmlFor="lastName">Last Name:</label>
                <input
                    className='name-input'
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                />
            </div>
            </div>
            
            <div className='name-text'>
                <label htmlFor="email">Email:</label>
                <input
                    className='email-input'
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className='name-text'>
                <label htmlFor="message">Message:</label>
                <textarea
                    className='message-input'
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                />
            </div>
            <button type="submit">Submit</button>
        </form>

        <Footer />
        </>
    );
};

export default ContactUs;
