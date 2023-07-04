import React from "react";

function Contact() {
    return(
        <div className="contact-bg">
            <div className="contact-h2"> <h2> CONTACT ME </h2></div>

            <div className="contact-wrp">
                <div className="contact-row">

                    <div className="submit-name">
                        <label>Name: </label>
                        <input placeholder="jon doe" className="input-box"/>
                    </div>

                    <div className="submit-name">
                        <label>Email: </label>
                        <input placeholder="example@gmail" className="input-box"/>
                    </div>
                </div>

                <div className="submit-message">
                        <input placeholder="put in a message for me" className="message-box"/>
                    </div>

                    <div className="submit-div">
                        <button className="submit-btn" type="submit">Submit</button>
                    </div>
                    <a  className ="gmail" href="iyanu752@gmail.com"> iyanu752@gmail.com</a>

            </div>
        </div>
    )
}

export default Contact;