import React from 'react';
import { Contact } from '../../models/contact.class';
import { ESTATUS } from '../../models/status.enum';
import ContactComponent from '../pure/contact';


const ContactListComponent = () => {
    
    const defaultContact = new Contact('Rubén', 'Valls Aparici', 'r.vallsaparici@gmail.com', ESTATUS.true);
    
    return (
        <div>
            <ContactComponent contact={defaultContact}></ContactComponent>
        </div>
    );
};



export default ContactListComponent;
