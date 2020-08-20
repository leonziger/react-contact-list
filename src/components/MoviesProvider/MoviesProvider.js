import React, { useState } from 'react';
import { CONTACTS } from "../../api/contacts";

export const MoviesContext = React.createContext({});

export const MoviesProvider = ({ children }) => {
    const [ displayedContacts, setDisplayedContacts ] = useState(CONTACTS);
    const [ contactIsOpen, setContactIsOpen ] = useState(false);

    const globalParams = {
        //vars
        displayedContacts,
        contactIsOpen,

        // functions
        setDisplayedContacts,
        setContactIsOpen
    };

    return (
        <MoviesContext.Provider value={globalParams}>
            {children}
        </MoviesContext.Provider>
    );
};
