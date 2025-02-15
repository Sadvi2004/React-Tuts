import React, { useContext } from 'react'
import ContextC2 from "./ContextC2";
import { GlobalDataProvider } from './ContextApi';
function ContextC1() {
    const data = useContext(GlobalDataProvider)
    return (
        <div>
            <h1>{data.users[0].name}</h1>
            <ContextC2 />
        </div>
    )
}

export default ContextC1