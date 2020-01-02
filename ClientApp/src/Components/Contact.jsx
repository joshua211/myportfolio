import React, { Component } from "react";
import "./Contact.scss";
import Section from "react-bulma-components/lib/components/section";
import Heading from "react-bulma-components/lib/components/heading";
import Container from "react-bulma-components/lib/components/container";
import {
  Field,
  Control,
  Label,
  Input,
  Textarea
} from "react-bulma-components/lib/components/form";
import CoolButton from "./CoolButton";

const ContactStates = {
  valid: "",
  notValid:
    "You have to enter a subject, valid Email-Address and a message in order to contact me!",
  succes: "Thanks for contacting me!",
  error: "Something went wrong while contacting me!",
  spam: "Please dont send too many messages at once!"
};

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      validationMessage: ContactStates.notValid,
      validated: false,
      showValidation: false,
      pending: false,
      subject: "",
      email: "",
      message: ""
    };
  }
  render() {
    return (
      <Section id="contact" size="large">
        <Container>
          <Heading>Contact</Heading>
          <div className="form">
            <Field>
              <Label htmlFor="subject">What is it about?</Label>
              <Control>
                <Input
                  id="subject"
                  placeholder="Subject"
                  onChange={this.onChange}
                  value={this.state.subject}
                ></Input>
              </Control>
            </Field>
            <Field>
              <Label htmlFor="email">Who are you?</Label>
              <Control>
                <Input
                  id="email"
                  type="email"
                  placeholder="Your@Email.com"
                  onChange={this.onChange}
                  value={this.state.email}
                ></Input>
              </Control>
            </Field>
            <Field>
              <Label htmlFor="message">Tell me more!</Label>
              <Textarea
                className="has-fixed-size"
                onChange={this.onChange}
                id="message"
                value={this.state.message}
              ></Textarea>
            </Field>
            <Field>
              <CoolButton
                id="toContact"
                isLoading={this.state.pending}
                disabled={
                  this.state.validated || !this.state.pending ? false : true
                }
                onClick={this.onClick}
              >
                Send!
              </CoolButton>
            </Field>
            <Field
              className={
                this.state.showValidation
                  ? "validationInfo"
                  : "validationInfo hidden"
              }
            >
              {this.state.validationMessage}
            </Field>
          </div>
        </Container>
      </Section>
    );
  }

  onClick = e => {
    if (!this.state.validated) {
      this.setState({
        showValidation: true,
        validationMessage: ContactStates.notValid
      });
      return;
    }
    if (this.state.justClicked) {
      this.setState({
        showValidation: true,
        validationMessage: ContactStates.spam
      });
      return;
    } else if (this.state.pending) return;
    else {
      this.setState({
        pending: true,
        showValidation: false,
        justClicked: true
      });
      this.sendMail(this.state.subject, this.state.email, this.state.message);
      setTimeout(() => this.setState({ justClicked: false }), 10000);
    }
  };

  sendMail(subject, to, message) {
    var mail = { Subject: subject, From: to, Message: message };
    fetch("https://joshuahillmann.com/api/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(mail)
    })
      .then(r =>
        r.status === 200
          ? this.setState({
              pending: false,
              validationMessage: ContactStates.succes,
              showValidation: true
            })
          : this.setState({
              pending: false,
              validationMessage: ContactStates.error,
              showValidation: true
            })
      )
      .catch(e => {
        console.log("ERROR: ", e);
        this.setState({
          pending: false,
          validationMessage: ContactStates.error,
          showValidation: true
        });
      });
  }

  onChange = e => {
    var value = e.target.value;
    this.setState(
      { [e.target.id]: value, showValidation: false },
      this.validateInput
    );
  };

  validateInput = () => {
    var isvalid = false;

    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (
      re.test(String(this.state.email).toLowerCase()) &&
      this.state.subject &&
      this.state.message
    ) {
      isvalid = true;
    }

    this.setState({ validated: isvalid });
  };
}

export default Contact;
