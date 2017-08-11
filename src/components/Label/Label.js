import React from 'react';
import PropTypes from 'prop-types';

/** Label for form inputs */
function Label ({htmlFor, label, required}) {
  Label.propTypes = {
    /** Which form element this label is for */
    htmlFor: PropTypes.string.isRequired,
    /** Text to display */
    label: PropTypes.string.isRequired,
    /** Indicate required w/ red asterick */
    required: PropTypes.bool
  };

  Label.defaultProps = {
    label: 'Label'
  };

    return (
      <label style={{ display: 'block' }}
      htmlFor={htmlFor}>
      {label} { required && <span style={{color: 'red', fontWeight:'bold', fontSize:24}}> * </span>}
      </label>
    );
}

export default Label;