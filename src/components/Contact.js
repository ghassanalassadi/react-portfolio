import React from "react";
// import {validateEmail} from '../utils/helpers';

function Contact() {
    return (
        <div id='contact'>
            <h1 className="heading">Contact Me</h1>
            <p className='d-flex justify-content-center align-items-center'>
                You can contact me at <a href="mailto:ghassanalassadi@outlook.com">ghassanalassadi@outlook.com</a> or
                my <a href="https://www.linkedin.com/in/ghassan-al-assadi-772428214/" target='_blank' rel="noreferrer">LinkedIn</a> page.
            </p>
        </div>
    );
}
;

export default Contact;