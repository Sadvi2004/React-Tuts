import React from 'react'
import Child2 from './Child2'
const Chi = (props) => {
    return (
        <div>
            {props.name}
            <Child2 name="hii" />
        </div>
    )
}

export default Chi