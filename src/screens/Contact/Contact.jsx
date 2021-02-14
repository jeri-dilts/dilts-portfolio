import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./Contact.css";
import emailjs from "emailjs-com";
import { useHistory } from "react-router-dom";
import React, { useState } from "react";

const ContactForm = () => {

  const history = useHistory();

  const [form, setForm] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let templateParams = {
      from_name: from_name,
      from_email: from_email,
      to_name: "",
      message: message,
    };
    emailjs
      .send(
        "service_3zmsbf5",
        "template_24mr2la",
        templateParams,
        "user_V3N7pWJeD8tUCc53zAuDI"
      )
      .then(() => history.push("/ThanksForViewing/thankyou"));
  };

  const renderError = () => {
    const toggleForm = form.isError ? "danger" : "";
    if (form.isError) {
      return (
        <Button type="submit" className={toggleForm} variant="contained">
          {form.errorMsg}
        </Button>
      );
    } else {
      return (
        <Button type="submit" className="CU-button" variant="contained">
          Submit
        </Button>
      );
    }
  };

  const { from_name, from_email, message } = form;

  return (
    <div className="CU-div">
      {/* <div className="contact-me-header">Contact Me</div> */}
      <form className="CU-form" onSubmit={handleSubmit}>
        <div className="customize-textfield">
          <TextField
            required
            onChange={handleChange}
            name="from_name"
            value={from_name}
            className="textfield"
            label="Name"
            type="text"
          />
        </div>
        <div className="customize-textfield">
          <TextField
            required
            onChange={handleChange}
            name="from_email"
            value={from_email}
            className="textfield"
            label="E-mail"
            type="text"
          />
        </div>
        <div className="customize-textfield">
          <TextField
            required
            multiline
            onChange={handleChange}
            name="message"
            value={message}
            className="textfield"
            label="Message"
            rows={6}
          />
        </div>
        {renderError()}
      </form>
      <div className="email">diltsjeri@gmail.com</div>
    </div>
  );
};

export default ContactForm;
