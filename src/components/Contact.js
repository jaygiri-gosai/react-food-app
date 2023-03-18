import React from "react";
import { ADDRESS_DATA, PHONE_DATA } from "../utils/constants";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
    console.log("Constructor called");
  }

  componentDidMount() {
    console.log("componentDidMount called");
    this.setState((state, props) => {
      return { counter: state.counter + 1 };
    });
    console.log("state updated");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate called");
  }

  render() {
    console.log("render called");
    return (
      <div>
        GET IN TOUCH - {this.state.counter}
        <div className="contact-container">
          <Address data={ADDRESS_DATA}></Address>
          <Phone data={PHONE_DATA}></Phone>
          <Email></Email>
        </div>
      </div>
    );
  }
}

class Address extends React.Component {
  render() {
    return (
      <div>
        <h1>ADDRESS</h1>
        {this.props.data.map((address, index) => {
          return <p key={index}>{address}</p>;
        })}
      </div>
    );
  }
}

class Phone extends React.Component {
  render() {
    return (
      <div>
        <h1>Phone</h1>
        {this.props.data.map((phone, index) => {
          return <p key={index}>{phone}</p>;
        })}
      </div>
    );
  }
}

class Email extends React.Component {
  render() {
    return (
      <div>
        <h1>EMAIL</h1>
        <p>
          <a href="mailto: Info@weifieldgroup.com">Info@weifieldgroup.com</a>
        </p>

        <p>
          <a href="mailto: estimating@weifieldgroup.com">
            estimating@weifieldgroup.com
          </a>
        </p>
        <p>
          <a href="mailto: service@weifieldgroup.com">
            service@weifieldgroup.com
          </a>
        </p>
      </div>
    );
  }
}

export default Contact;
