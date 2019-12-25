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

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      validated: false,
      sendFail: false,
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
                className={this.state.pending ? "button is-loading" : ""}
                disabled={this.state.validated ? false : true}
                onClick={this.onClick}
              >
                Send!
              </CoolButton>
            </Field>
            <Field
              className={
                this.state.sendFail ? "validationInfo" : "validationInfo hidden"
              }
            >
              You have to enter a subject, a valid E-Mail address and a message
              in order to contact me!
            </Field>
          </div>
        </Container>
      </Section>
    );
  }

  onClick = e => {
    if (!this.state.validated) {
      this.setState({ sendFail: true });
      return;
    } else {
      this.setState({ sendFail: false, pending: true });
    }

    //Send mail stuff
  };

  onChange = e => {
    var value = e.target.value;
    this.setState({ [e.target.id]: value }, this.validateInput);
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
