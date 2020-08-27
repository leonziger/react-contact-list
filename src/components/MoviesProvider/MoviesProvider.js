import React, { useState } from 'react';
import { CONTACTS } from "../../api/contacts";

export const MoviesContext = React.createContext({});

export const MoviesProvider = ({ children }) => {
    let contactsIds = [];
    let objId = {};
    CONTACTS.map(element => {
        objId = {id: element.id, state: false};
        contactsIds.push(objId);
        return contactsIds;
    });
    console.log(contactsIds);

    const [ displayedContacts, setDisplayedContacts ] = useState(CONTACTS);
    const [ activeIds, setActiveIds ] = useState(contactsIds);

    const globalParams = {
        //vars
        displayedContacts,
        activeIds,

        // functions
        setDisplayedContacts,
        setActiveIds
    };

    return (
        <MoviesContext.Provider value={globalParams}>
            {children}
        </MoviesContext.Provider>
    );
};
