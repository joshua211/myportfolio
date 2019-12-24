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
import Button from "react-bulma-components/lib/components/button";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
              <Button>Go!</Button>
            </Field>
          </div>
        </Container>
      </Section>
    );
  }

  onChange = e => {
    var value = e.target.value;
    this.setState({ [e.target.id]: value });
  };
}

export default Contact;
