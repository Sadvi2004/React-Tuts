import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './Create.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

function Edit() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const navigate = useNavigate();

    const data = useParams();
    useEffect(() => {
        axios.get(`http://localhost:8000/users/${data.id}`)
            .then(res => {
                console.log(res.data);
                setName(res.data.name);
                setEmail(res.data.email);
                setPhone(res.data.phone);
            })
            .catch(err => console.log(err));
    }, [data.id]);
    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedData = { name, email, phone };
        console.log(updatedData);
        axios.put(`http://localhost:8000/users/${data.id}`, updatedData)
            .then(res => {
                // console.log(res.data);
                toast.success("User updated successfully");
                navigate('/');
            }).catch(err => console.log(err));
    }

    return (
        <div>
            <h1 className='main-heading'>Update user</h1>
            <form onSubmit={handleSubmit} className='my-form'>
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)} required />
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <label htmlFor="phone">Phone:</label>
                <input type="tel" name="phone" placeholder="Enter phone" pattern='[0-9]{10}' value={phone} onChange={(e) => setPhone(e.target.value)} required />
                <button className="sbtn">update</button>
                <Link to="/" className='back'>Back</Link>
            </form>
        </div>
    );
}

export default Edit;
