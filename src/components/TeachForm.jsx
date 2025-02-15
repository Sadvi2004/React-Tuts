import React, { useState } from 'react'

function TeachForm() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [gender, setGender] = useState('')
    const [address, setAddress] = useState('') // Corrected this line
    const [file, setFile] = useState('')
    const [country, setCountry] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        const userData = {
            name,
            email,
            password,
            gender,
            address,
            fileName: file ? file.name : '',
            country
        };

        sessionStorage.setItem('userdata', JSON.stringify(userData));
        console.log('Data saved to sessionStorage:', userData);
    }

    return (
        <div>
            <h1>Simple Form</h1>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
                <br></br>
                <label>Email:</label>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                <br></br>
                <label>Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                <br></br>
                <label>Gender:</label>
                <input type="radio"
                    name="gender"
                    value="male"
                    checked={gender === 'male'}
                    onChange={(e) => setGender(e.target.value)}
                />Male
                <input type="radio"
                    name="gender"
                    value="female"
                    checked={gender === 'female'}
                    onChange={(e) => setGender(e.target.value)}
                />Female
                <input type="radio"
                    name="gender"
                    value="others"
                    checked={gender === 'others'}
                    onChange={(e) => setGender(e.target.value)}
                />Others
                <br></br>
                <label>Address:</label>
                <textarea value={address} onChange={(e) => setAddress(e.target.value)}></textarea>
                <br></br>
                <label>File:</label>
                <input type="file" onChange={(e) => setFile(e.target.files[0])}></input>
                <br></br>
                <label>Country:</label>
                <select value={country} onChange={(e) => setCountry(e.target.value)}>
                    <option value="India">India</option>
                    <option value="USA">USA</option>
                    <option value="UK">UK</option>
                </select>
                <br></br>
                <input type="submit" value="Submit"></input>
            </form>
        </div>
    )
}

export default TeachForm
