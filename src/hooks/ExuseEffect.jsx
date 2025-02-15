import React, { useEffect, useState } from 'react';

function ExuseEffect() {
    const [user, setUser] = useState({});
    console.log(user);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/1')
            .then(res => res.json())
            .then(data => setUser(data));
    }, []);

    return (
        <div>
            {user.name && (
                <React.Fragment key={user.id}>
                    <h1>{user.name}</h1>
                    <h3>{user.email}</h3>
                </React.Fragment>
            )}
        </div>
    );
}

export default ExuseEffect;
