import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';


const ContactComponent = ({contact}) => {
    return (
        <div>
            <h1>Contact Info:</h1>
            <div>
                <h3>
                    Personal info: {contact.name + " " + contact.surname}
                </h3>
                <h4>
                    Other Info: {contact.email + " " + contact.status}
                </h4>
            </div>
        </div>
    );
};


ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact)
};


export default ContactComponent;
