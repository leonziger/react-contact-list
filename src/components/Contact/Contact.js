import React, { useContext } from 'react';
import {MoviesContext} from "../MoviesProvider";

export const Contact = ({ item }) => {
    const { activeIds, setActiveIds } = useContext( MoviesContext);
    let isOpen = false;
    let current = {};

    const handleClick = (id) => {
        activeIds.forEach((value)=> {
            if (value.id === id) {
                isOpen = !isOpen;
                value.state = isOpen;
                current.id = value.id;
                current.state = value.state;
            }
        });
        setActiveIds(activeIds);
        console.log(current);
        console.log(activeIds);
        return current;
    };

    return(
        <li className="contact" key={item.id} onClick={() => handleClick(item.id)} >
            <div className="contact-main">
                <img className="contact-image" src={item.image} width="60px" height="60px" alt=""/>
                <div className="contact-name">{item.name}</div>
                <div className="contact-number">{item.phoneNumber}</div>
            </div>
            {current.state ?
                <div className="contact-additional" style={{'display': 'block'}}>
                    <div className="contact-number">{item.address}</div>
                    <div className="contact-number">{item.email}</div>
                </div>
                :
                <div className="contact-additional" style={{'display': 'none'}}>
                <div className="contact-number">{item.address}</div>
                <div className="contact-number">{item.email}</div>
                </div>
            }
        </li>
    );
};