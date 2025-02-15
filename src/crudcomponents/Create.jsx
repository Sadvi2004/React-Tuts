import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Create.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

function Create() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const navigate = useNavigate();

    const newdata = { name, email, phone };
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/users', newdata)
            .then(res => {
                toast.success("User added successfully");
                navigate('/');
            })
            .catch(err => console.log(err));
    }

    return (
        <div>
            <h1 className='main-heading'>Create Cell</h1>
            <form onSubmit={handleSubmit} className='my-form'>
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)} required />
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <label htmlFor="phone">Phone:</label>
                <input type="tel" name="phone" placeholder="Enter phone" pattern='[0-9]{10}' value={phone} onChange={(e) => setPhone(e.target.value)} required />
                <button className="sbtn">Submit</button>
                <Link to="/" className='back'>Back</Link>
            </form>
        </div>
    );
}

export default Create;
