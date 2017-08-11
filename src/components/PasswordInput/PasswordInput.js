import React from 'react';
import PropTypes from 'prop-types';
import ProgressBar from '../ProgressBar';
import EyeIcon from '../EyeIcon';
import TextInput from '../TextInput';

/** Text input w/ integrated label to enforce consistency in layout, error display, label placement and required field marker. */
class PasswordInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPassword: false
    }
  }

  toggleShowPassword = event => {
    this.setState(prevState => {
      return { showPassword: !prevState.showPassword };
    });
    if (event) event.preventDefault();
  }

  render() {
    const {htmlId, label, maxLength, error, placeholder, required, onChange, value, showVisibilityToggle, quality, ...props} = this.props;
    const {showPassword} = this.state;

    return (
      <div style={{ marginBottom: 16 }}>
        <TextInput
          htmlId={htmlId}
          label={label}
          placeholder={placeholder}
          type={showPassword ? 'text' : 'password'}
          onChange={onChange}
          value={value}
          maxLength={maxLength}
          error={error}
          required={required}
          {...props}>
          {
            showVisibilityToggle &&
            <a
              href="#"
              onClick={this.toggleShowPassword}
              style={{ marginLeft: 5 }}>
              <EyeIcon />
            </a>
          }
          {
            value.length > 0 && quality && <ProgressBar style={{marginTop: '10px'}} percent={quality} width={130} />
          }
        </TextInput>
      </div>
    );
  }
}

PasswordInput.propTypes = {
  htmlId: PropTypes.string,
  // name: PropTypes.string,
  value: PropTypes.any,
  label: PropTypes.string,
  /** Function to call onChange */
  onChange: PropTypes.func,
  /** Max password length accepted */
  maxLength: PropTypes.number,
  placeholder: PropTypes.string,
  /** Allow show password */
  showVisibilityToggle: PropTypes.bool,
  /** Max password length accepted */
  quality: PropTypes.number,

  error: PropTypes.string,
  required: PropTypes.bool

};

PasswordInput.defaultProps = {
  showVisibilityToggle: true,
  maxLength: 20,
  label: 'Password',
  required: true
};

export default PasswordInput;