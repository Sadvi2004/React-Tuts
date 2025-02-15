import React, { useState } from 'react';

const UserForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        gender: '',
        address: '',
        country: '',
        file: null
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({
            ...formData,
            [name]: files ? files[0] : value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const dataToSave = {
            ...formData,
            fileName: formData.file ? formData.file.name : ''
        };
        localStorage.setItem('userData', JSON.stringify(dataToSave));
        alert('Data saved to localStorage!');
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Username:
                <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                />
            </label>
            <br /><br />
            <label>
                Email:
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </label>
            <br /><br />
            <label>
                Password:
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
            </label>
            <br /><br />
            <label>
                Gender:
                <input
                    type="radio"
                    name="gender"
                    value="Male"
                    checked={formData.gender === 'Male'}
                    onChange={handleChange}
                /> Male
                <input
                    type="radio"
                    name="gender"
                    value="Female"
                    checked={formData.gender === 'Female'}
                    onChange={handleChange}
                /> Female
                <input
                    type="radio"
                    name="gender"
                    value="Other"
                    checked={formData.gender === 'Other'}
                    onChange={handleChange}
                /> Other
            </label>
            <br /><br />
            <label>
                Address:
                <textarea
                    name="address"
                    cols="30"
                    rows="5"
                    value={formData.address}
                    onChange={handleChange}
                    required
                />
            </label>
            <br /><br />
            <label>
                Upload File:
                <input
                    type="file"
                    name="file"
                    onChange={handleChange}
                />
            </label>
            <br /><br />
            <label>
                Country:
                <select name="country" value={formData.country} onChange={handleChange}>
                    <option value="America">America</option>
                    <option value="India">India</option>
                    <option value="Canada">Canada</option>
                    <option value="Australia">Australia</option>
                    <option value="Germany">Germany</option>
                </select>
            </label>
            <br /><br />
            <button type="submit">Submit</button>
        </form>
    );
};

export default UserForm;
