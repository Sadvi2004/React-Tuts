import React, { createContext } from 'react';

export const GlobalDataProvider = createContext();

function ContextApi(props) {
    return (
        <GlobalDataProvider.Provider value={{
            users: [
                { name: "Sadvi", age: 20 },
                { name: "John", age: 25 }
            ]
        }}>
            {props.children}
        </GlobalDataProvider.Provider>
    );
}

export default ContextApi;
