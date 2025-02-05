import React from 'react'

const Prop2 = (props) => {
    if (props.isLoggedIn == true) {
        return (
            <div>
                <h1>welcome {props.name}</h1>
                {
                    props.hobbies.map((val) => {
                        return <li>{val}</li>
                    })
                }
            </div>
        )
    } else {
        return <h1>Please Login</h1>
    }
}

export default Prop2