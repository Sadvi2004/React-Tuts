import React from 'react'

const PropsChildern = (props) => {
    return (
        <div>
            <h1>{props.username}</h1>
            <h1>{props.company}</h1>
            {
                props.children[0]
            }
        </div>
    )
}

export default PropsChildern