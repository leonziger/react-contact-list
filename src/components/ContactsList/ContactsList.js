import React, { useContext } from 'react';
import { CONTACTS } from '../../api/contacts';
import { Contact } from '../Contact';
import { MoviesContext } from '../MoviesProvider';

export const ContactsList = () => {
    const { displayedContacts, setDisplayedContacts } = useContext(MoviesContext);

    const handleSearch = (event) => {
        const searchQuery = event.target.value.toLowerCase();
        const displayedContacts = CONTACTS.filter(function(el) {
            let searchValue = el.name.toLowerCase();
            return searchValue.indexOf(searchQuery) !== -1;
        });

        setDisplayedContacts(displayedContacts);
    };

    return(
        <div className="contacts">
            <input type="text" className="search-field" onChange={handleSearch}/>
            <ul className="contacts-list">
                {
                    displayedContacts.map((element, index) => <Contact
                            item={element} key={element.id}
                        />

                    )
                }
            </ul>
        </div>
    );
};