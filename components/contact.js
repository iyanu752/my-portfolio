import React from "react";

function Contact() {
    return(
        <div className="contact-bg">
            <div className="contact-h2"> <h2> CONTACT ME </h2></div>

                    <form>

                    <div className="contact-cont">
                            <div className="contact-row">
                                <div className="submit-name">
                                    <input placeholder="jon doe" className="input-box"/>
                                </div>

                                <div className="submit-name">
                                    <input placeholder="example@gmail" className="input-box"/>
                                </div>
                            </div>

                            <div className="submit-message">
                                <input type="text" placeholder="put in a message for me" className="message-box"/>
                            </div>

                            <div className="submit-div">
                                <button className="submit-btn" type="submit">Submit</button>
                            </div>
                           
                    </div>
                                    
                    </form>
        </div>
    )
}

export default Contact;