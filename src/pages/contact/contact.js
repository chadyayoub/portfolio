import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [nameDirty, setNameDirty] = useState(false);
  const [nameError, setNameError] = useState("");
  const [message, setMessage] = useState("");
  const [messageDirty, setMessageDirty] = useState(false);
  const [messageError, setMessageError] = useState("");

  console.log("sending");
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    if (!nameDirty) setNameDirty(true);
    if (!messageDirty) setMessageDirty(true);
    if (name === "" || message === "") return;
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAIL_JS_SERVICE_ID,
        process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAIL_JS_API_KEY
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
  useEffect(() => {
    if (name === "") setNameError("Enter your name unless you are a pussy");
    else if (name.length > 30) setNameError("Your name is not that long baka");
    else setNameError("");
  }, [name, nameDirty]);

  useEffect(() => {
    if (message === "")
      setMessageError(
        `Dont send me nothing${name ? " " : ""}${name}, I will kill you`
      );
    else if (message.length > 1500)
      setMessageError(
        `Unless it is something very 
        exciting${
          name ? " " : ""
        }${name}, I don't think I will read all of that...`
      );
    else setMessageError("");
  }, [message, name]);

  return (
    <div id="contactContainer">
      <div id="contactform">
        <p id="leaveAMessage">Leave a message</p>
        <div id="formContainer">
          <form ref={form} onSubmit={sendEmail}>
            <div className="inputContainer">
              <label className="fieldText">Name</label>
              <input
                value={name}
                className="inputField"
                placeholder="Name"
                name="from_name"
                onChange={(e) => {
                  setName(e.target.value);
                  if (!nameDirty) setNameDirty(true);
                }}
              />
              <div className="inputError">{nameDirty ? nameError : " "}</div>
            </div>
            <div className="inputContainer">
              <label className="fieldText">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Message"
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                  if (!messageDirty) setMessageDirty(true);
                }}
              />
              <div
                className="inputError"
                style={{
                  color: message.length > 1500 ? "yellow" : "rgb(160, 32, 32)",
                }}
              >
                {messageDirty ? messageError : " "}
              </div>
            </div>
            <div id="buttonContainer">
              <i></i>
              <input id="submit" type="submit" value="Send" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Contact;
