import React from 'react';
import PropTypes from 'prop-types';
import Label from '../Label';

/** Text input w/ integrated label to enforce consistency in layout, error display, label placement and required field marker. */
function TextInputBEM({htmlId, name, label, type = "text", required = false, onChange, placeholder, value, error, children, ...props}) {
  return (
    <div className="textinput">
      <Label htmlFor={htmlId} label={label} required={required} />
      <input
        id={htmlId}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={error && 'textinput__input--state-error'}
        {...props} />
      {children}
      {error && <div className="textinput__error">{error}</div>}
    </div>
  );
}

TextInputBEM.propTypes = {
  /** Unique HTML ID. Used for tying label to HTML input. Handy hook for automated testing. */
  htmlId: PropTypes.string,
  /** Input name. Recommend setting this to match object's property so a single change handler can be used */
  name: PropTypes.string,
  /** Input label */
  label: PropTypes.string,
  /** Input type */
  type: PropTypes.string,
  /** Mark label with asterisk if set true */
  required: PropTypes.bool,
  /** Function to call onChange */
  onChange: PropTypes.func,
  /** Placeholder to display in input when empty */
  placeholder: PropTypes.string,
  /** Value */
  value: PropTypes.string,
  /** String to display when error occurs */
  error: PropTypes.string,
  /** Child component to display next to the input */
  children: PropTypes.array,
};

export default TextInputBEM;