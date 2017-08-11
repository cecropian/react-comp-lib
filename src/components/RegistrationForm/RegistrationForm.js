import React from 'react';
import PropTypes from 'prop-types';
import PasswordInput from '../PasswordInput';
import TextInput from '../TextInput';


/** Registration form w/ built-in validation */
class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        email: '',
        password: ''
      },
      errors: {},
      submitted: false
    }
  }

  onChange = event => {
    const user = this.state.user;
    user[event.target.name] = event.target.value;
    this.setState({ user });
  }

  passwordQuality(password) {
    if (!password) return null;
    if (password.length >= this.props.minPasswordLength) return 100;
    const percentOfMinLength = parseInt((password.length / this.props.minPasswordLength) * 100, 10);
    return percentOfMinLength
  }

  validate({email, password}) {
    const errors = {};
    const {minPasswordLength} = this.props;
    if (!email) errors.email = 'Email required.';
    if (password.length < minPasswordLength) errors.password = `Password must be at least ${minPasswordLength} characters.`;
    this.setState({ errors });
    const formIsValid = Object.getOwnPropertyNames(errors).length === 0;
    return formIsValid;
  }

  onSubmit = () => {
    const {user} = this.state;
    const formIsValid = this.validate(user);
    if (formIsValid) {
      this.props.onSubmit(user);
      this.setState({ submitted: true });
    }
  }


  render() {
    const {submitted, errors} = this.state;
    const {email, password} = this.state.user;

    return (
      submitted ?
        <h2>{this.props.confirmationMessage}</h2> :

        <div>
          <form name="registration-form">
          <TextInput
            htmlId="registration-form-email"
            name="email"
            onChange={this.onChange}
            label="Email"
            value={email}
            error={errors.email}
            required={true}
          />
          <PasswordInput
            htmlId="registration-form-password"
            name="password"
            value={password}
            onChange={this.onChange}
            quality={this.passwordQuality(password)}
            error={errors.password}
          />
          <input type="submit" value="Register" onClick={this.onSubmit} />
          </form>
          </div>

    );
  }
}

RegistrationForm.propTypes = {
  /** Pleasantries if form submits successfully */
  confirmationMessage: PropTypes.string,
  /** Function to call onSubmit */
  onSubmit: PropTypes.func,
  /** Min password length accepted */
  minPasswordLength: PropTypes.number
};

RegistrationForm.defaultProps = {
  confirmationMessage: 'Thanks for registering!',
  minPasswordLength: 8
};

export default RegistrationForm;