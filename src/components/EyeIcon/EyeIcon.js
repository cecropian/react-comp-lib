import React from 'react';
import PropTypes from 'prop-types';

/** Label for form inputs */
function EyeIcon({color, size}) {
  // Attribution: Fabián Alexis (https://github.com/fabianalexisinostroza/Antu) [CC BY-SA 3.0 (http://creativecommons.org/licenses/by-sa/3.0)], via Wikimedia Commons
  return (
    <svg width={size} height={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22">
      <g transform="matrix(.02146 0 0 .02146 1 1)" fill={color}>
        <path d="m466.07 161.53c-205.6 0-382.8 121.2-464.2 296.1-2.5 5.3-2.5 11.5 0 16.9 81.4 174.9 258.6 296.1 464.2 296.1 205.6 0 382.8-121.2 464.2-296.1 2.5-5.3 2.5-11.5 0-16.9-81.4-174.9-258.6-296.1-464.2-296.1m0 514.7c-116.1 0-210.1-94.1-210.1-210.1 0-116.1 94.1-210.1 210.1-210.1 116.1 0 210.1 94.1 210.1 210.1 0 116-94.1 210.1-210.1 210.1" />
        <circle cx="466.08" cy="466.02" r="134.5" />
      </g>
    </svg>
  );
}

EyeIcon.propTypes = {
  /** Color of Eye Icon */
  color: PropTypes.string,
  size: PropTypes.number
};

EyeIcon.defaultProps = {
  color: '#4d4d4d',
  size: 16
};

export default EyeIcon;