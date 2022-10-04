import React from "react";
// import {validateEmail} from '../utils/helpers';

function Contact() {
    return (
        <div>
            <h1 className="heading">Contact Me</h1>
            <form>
                <ul>
                    <li>Name: <input type="text" required/></li>
                    <li>Email: <input type="email" required /></li>
                    <li>Message: <input type="text" required/></li>
                    <li><input type='submit' value='Submit'/></li>
                </ul>
            </form>
        </div>
    );
}
;

export default Contact;