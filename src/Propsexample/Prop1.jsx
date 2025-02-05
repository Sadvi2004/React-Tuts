import React from 'react'

const Prop1 = (props) => {
    return (
        <div>
            <h1>Hii {props.name} Age is {props.age} {props.desig[0]} {props.userdetails.area}</h1>
            <button onClick={props.sendFun}>click me</button>
        </div>
    )
}

export default Prop1