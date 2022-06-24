import React from 'react';
import PropTypes from 'prop-types';

function Download(props) {
  const { className } = props;

  return (
    <svg width="24" height="24" className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 2.88H3V3.84H10V2.88Z" fill="#0C1457" />
      <path d="M10 4.8H3V5.76H10V4.8Z" fill="#0C1457" />
      <path d="M10 6.72H3V7.68H10V6.72Z" fill="#0C1457" />
      <path d="M16 8.64H3V9.6H16V8.64Z" fill="#0C1457" />
      <path d="M16 10.56H3V11.52H16V10.56Z" fill="#0C1457" />
      <path d="M24 20.16H13V16.32H14V19.2H23V16.32H24V20.16Z" fill="#4456F6" />
      <path d="M18 23.04H1V19.2V18.24V0.96H12L12.02 6.72H18V16.512L16.03 14.6208L15.32 15.3024L18.51 18.3552L21.69 15.3024L20.98 14.6208L19 16.5216V5.76H13L12.98 0H0V18.24V19.2V24H19V20.16H18V23.04Z" fill="#0C1457" />
    </svg>

  );
}

Download.defaultProps = {
  className: undefined,
};

Download.propTypes = {
  className: PropTypes.string,
};

export default Download;
export { Download };
