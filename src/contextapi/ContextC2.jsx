import React, { useContext } from 'react';
import ContextC3 from "./ContextC3";
import { GlobalDataProvider } from './ContextApi';

function ContextC2() {
    const data = useContext(GlobalDataProvider);

    return (
        <div>
            <h1>Name: {data.users[0].name}, Age: {data.users[0].age}</h1>
            <ContextC3 />
        </div>
    );
}

export default ContextC2;
