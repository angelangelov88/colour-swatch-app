import React from 'react';
import PropTypes from 'prop-types';

function SendDocPictogram(props) {
  const { className } = props;

  return (
    <svg width="24" height="24" className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.47495 2.88H2.84248V3.84H9.47495V2.88Z" fill="white" />
      <path d="M9.47495 4.8H2.84248V5.76H9.47495V4.8Z" fill="white" />
      <path d="M9.47495 6.72H2.84248V7.68H9.47495V6.72Z" fill="white" />
      <path d="M15.1599 8.64H2.84248V9.6H15.1599V8.64Z" fill="white" />
      <path d="M15.1599 10.56H2.84248V11.52H15.1599V10.56Z" fill="white" />
      <path d="M18.0024 16.32V5.76H12.3364L12.3174 0H0V18.24V19.2V24H18.0024V19.2H17.0549V23.04H0.947495V19.2V18.24V0.96H11.351L11.3699 6.72H17.0549V16.32H18.0024Z" fill="white" />
      <path d="M19.5089 21.5616L18.9025 20.8224L22.5124 17.808L18.9025 14.784L19.5089 14.0448L24 17.808L19.5089 21.5616Z" fill="#79ADFC" />
      <path d="M22.7399 17.28H9.47495V18.24H22.7399V17.28Z" fill="#79ADFC" />
    </svg>

  );
}

SendDocPictogram.defaultProps = {
  className: undefined,
};

SendDocPictogram.propTypes = {
  className: PropTypes.string,
};

export default SendDocPictogram;
export { SendDocPictogram };
