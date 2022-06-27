import React from 'react';
import PropTypes from 'prop-types';

function SustainableCyclePictogram(props) {
  const { className } = props;

  return (
    <svg width="24" height="24" className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.1648 16.92L9.49438 15.19L10.1664 14.49L11.088 15.44L13.3536 12.51L14.1024 13.13L11.1648 16.92Z" fill="#4456F6" />
      <path d="M16.7424 23L12.9696 19.89L16.7424 16.78V18.16H18.1536L15.6864 13.94L18.6144 12.31L24 21.52H16.7424V23ZM14.5056 19.89L15.7824 20.95V20.53H22.3008L18.2688 13.63L17.0208 14.32L19.8432 19.15H15.7824V18.83L14.5056 19.89Z" fill="#0C1457" />
      <path d="M11.6352 21.52H0L3.7728 15.07L2.4768 14.37L7.104 12.69L7.9488 17.49L6.6816 16.77L5.8464 18.2H11.6064L11.6352 21.52ZM1.6896 20.52H10.6752V19.14H4.1568L6.336 15.37L6.6432 15.54L6.3648 13.93L4.8 14.49L5.0976 14.66L1.6896 20.52Z" fill="#0C1457" />
      <path d="M8.9952 12.42L6.1152 10.76L12.0384 1L16.1664 8.08L17.5008 7.37L16.656 12.17L12.0192 10.49L13.248 9.78999L12 7.67L8.9952 12.42ZM7.4304 10.42L8.6784 11.13L12.0096 5.76999L14.5632 10.13L14.3328 10.26L15.8976 10.82L16.176 9.20999L15.8016 9.42L11.9616 2.90999L7.4304 10.42Z" fill="#0C1457" />
    </svg>

  );
}

SustainableCyclePictogram.defaultProps = {
  className: undefined,
};

SustainableCyclePictogram.propTypes = {
  className: PropTypes.string,
};

export default SustainableCyclePictogram;
export { SustainableCyclePictogram };
