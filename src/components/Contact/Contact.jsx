import React from 'react'
import './Contact.css'

function Contact({ mail, call, location }) {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "0d51eef2-5012-4d84-b2ef-9fbaa4cc5c3b");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            console.log("Success", res);
        }
    };

    return (
        <>
            <h1 id='contact' className='contact-section-heading'>Get in touch</h1>
            <div className='contact-section' >
                <div className="left-side-contact">
                    <h2 className='h2-gradientcolor'>Let's Talk</h2>
                    <p>I am currently available to take on a new project, so feel free to send<br />
                        me a message about anything that you want me to work on. You can<br />contact anytime. </p>
                    <div className="small-icons">
                        <div className='icon-boxes'>
                            <img src={mail} className='icon' />
                            <span>SumitBhardwaj@google.com</span>
                        </div>
                        <div className='icon-boxes'>
                            <img src={call} className='icon' />
                            <span>+772-876-981</span>
                        </div>
                        <div className='icon-boxes'>
                            <img src={location} className='icon' />
                            <span>CA,United States</span>
                        </div>
                    </div>
                </div>
                <form className="right-side-contact" onSubmit={onSubmit}>
                    <p className='input-headings'>Your Name</p>
                    <label htmlFor="name"></label>
                    <input type="text" placeholder='Name' className='inp' name='name' />
                    <p className='input-headings'>Your Email</p>
                    <label htmlFor="email" name='email'></label>
                    <input type="email" placeholder='Enter your Email' className='inp' name='email' />
                    <p className='input-headings'>Write your message here</p>
                    <label htmlFor="Message"></label>
                    <textarea name="Message" placeholder='Enter your Message' className='textbox-area'></textarea>

                    <button className='submit-btn' >Submit Now</button>
                </form>
            </div>
        </>
    )
}

export default Contact