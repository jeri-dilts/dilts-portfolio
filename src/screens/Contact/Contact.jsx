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
      .then(() => history.push("/"));
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
      <h1>Contact Me!</h1>
      <h4>diltsjeri@gmail.com</h4>
      <form className="CU-form" onSubmit={handleSubmit}>
        <TextField
          required
          onChange={handleChange}
          name="from_name"
          value={from_name}
          className="textfield"
          label="Name"
          variant="outlined"
          type="text"
        />
        <TextField
          required
          onChange={handleChange}
          name="from_email"
          value={from_email}
          className="textfield"
          label="E-mail"
          variant="outlined"
          type="text"
        />
        <TextField
          required
          multiline
          onChange={handleChange}
          name="message"
          value={message}
          className="textfield"
          label="Message"
          rows={4}
          variant="outlined"
        />
        {renderError()}
      </form>
    </div>
  );
};

export default ContactForm;
