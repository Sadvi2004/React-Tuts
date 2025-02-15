import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom"
import axios from 'axios';
import './Home.css';

function Home() {
    const [data, setData] = useState([]);
    const [error, setError] = useState(false);
    useEffect(() => {
        axios.get('http://localhost:8000/users')
            .then(res => {
                if (res.data.length === 0) {
                    setError(true);
                } else {
                    setData(res.data);
                    setError(false);
                }
            })
            .catch(err => console.log(err));
        setError(true);
    }, []);
    // console.log(data);

    const handleExit = () => {
        if (data.length === 0) {
            alert("No user to remove");
            return;
        }
        const lastuser = data[data.length - 1];
        axios.delete(`http://localhost:8000/users/${lastuser.id}`)
            .then(res => {
                setData(prevData => prevData.slice(0, -1));
                if (data.length - 1 === 0) {
                    setError(true);
                }
            })
            .catch(err => console.log("Error deleting the user", err));
    }

    return (
        <div className='maincontainer'>
            <h1>User Data</h1>
            <Link to="/create" className='create'>Create cell +</Link>
            {error ? (
                <h2>No users found pls add new user.</h2>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>sno</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.phone}</td>
                                <td>
                                    <Link to={`/edit/${item.id}`}><button>Edit</button></Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
            <br />
            <button className='create' onClick={handleExit}>Exit</button>
        </div>
    );
}

export default Home;
