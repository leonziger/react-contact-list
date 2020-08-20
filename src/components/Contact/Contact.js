import React, { useContext } from 'react';
import {MoviesContext} from "../MoviesProvider";

export const Contact = ({ item }) => {
    const { contactIsOpen, setContactIsOpen } = useContext(MoviesContext);
    let isOpen;

    const handleClick = () => {
        isOpen = !contactIsOpen;
        console.log(item.id, '---', isOpen);

        setContactIsOpen(isOpen);
    };

    return(
        <li className="contact" key={item.id} onClick={() => { handleClick(item.id)}} >
            <div className="contact-main">
                <img className="contact-image" src={item.image} width="60px" height="60px" alt=""/>
                <div className="contact-name">{item.name}</div>
                <div className="contact-number">{item.phoneNumber}</div>
            </div>
            {isOpen &&
                <div className="contact-additional">
                    <div className="contact-number">{item.address}</div>
                    <div className="contact-number">{item.email}</div>
                </div>
            }
        </li>
    );
};