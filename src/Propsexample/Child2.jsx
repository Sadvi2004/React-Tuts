import React from 'react'
import Child3 from './Child3'
const Child2 = (props) => {
    return (
        <div>
            {props.name}
            <Child3 name="hello" />
        </div>
    )
}

export default Child2