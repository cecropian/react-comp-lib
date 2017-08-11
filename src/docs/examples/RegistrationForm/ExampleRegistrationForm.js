import React from 'react';
import RegistrationForm from 'ps-react/RegistrationForm';

/** Registration Form */
export default class ExampleRegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: ''
    }
  }

  onSubmit = (user) => {
    //this.prevenDefault();
    console.log(user);
  }

  render() {
    return <RegistrationForm onSubmit={this.onSubmit} />
  }
}

