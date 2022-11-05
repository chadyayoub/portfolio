import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";
require("dotenv").config();

const Contact = () => {
  console.log("sending");
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    console.log(process.env);
    console.log(form.current);
    emailjs
      .sendForm(
        process.env.EMAIL_JS_SERVICE_ID,
        process.env.EMAIL_JS_TEMPLATE_ID,
        form.current,
        process.env.EMAIL_JS_API_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div id="contactContainer">
      <div id="contactform">
        <p id="leaveAMessage">Leave a message</p>
        <div id="formContainer">
          <form ref={form} onSubmit={sendEmail}>
            <div className="inputContainer">
              <label className="fieldText">Name</label>
              <input
                className="inputField"
                placeholder="Name"
                name="from_name"
              />
            </div>
            <div className="inputContainer">
              <label className="fieldText">Message</label>
              <textarea id="message" name="message" placeholder="Message" />
            </div>
            <div id="buttonContainer">
              <input id="submit" type="submit" value="Send" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Contact;
