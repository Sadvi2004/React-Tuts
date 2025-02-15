import React, { useContext } from 'react'
import { GlobalDataProvider } from './ContextApi'
function ContextC3() {
    const data = useContext(GlobalDataProvider);
    return (
        <div>
            <h1>Name: {data.users[1].name}, Age: {data.users[1].age}</h1>
        </div>
    )
}

export default ContextC3