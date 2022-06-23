import React from 'react';
import PropTypes from 'prop-types';

function Scan(props) {
  const { className } = props;

  return (
    <svg width="24" height="24" className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 24H14.4V23.04H23.04V14.4H24V24Z" fill="#0C1457" />
      <path d="M9.6 24H0V14.4H0.96V23.04H9.6V24Z" fill="#0C1457" />
      <path d="M0.96 9.6H0V0H9.6V0.96H0.96V9.6Z" fill="#0C1457" />
      <path d="M24 9.6H23.04V0.96H14.4V0H24V9.6Z" fill="#0C1457" />
      <path d="M1.92 7.67999V9.59999H2.88V7.67999H1.92ZM1.92 4.79999V6.71999H2.88V4.79999H1.92Z" fill="#0C1457" />
      <path d="M2.88 3.84001H1.92V1.92001H3.84V2.88001H2.88V3.84001Z" fill="#0C1457" />
      <path d="M17.28 1.92001V2.88001H19.2V1.92001H17.28ZM13.44 1.92001V2.88001H15.36V1.92001H13.44ZM9.6 1.92001V2.88001H11.52V1.92001H9.6ZM5.76 1.92001V2.88001H7.68V1.92001H5.76Z" fill="#0C1457" />
      <path d="M22.08 1.92001V3.84001H21.12V2.88001H20.16V1.92001H22.08Z" fill="#0C1457" />
      <path d="M21.12 7.67999V9.59999H22.08V7.67999H21.12ZM21.12 4.79999V6.71999H22.08V4.79999H21.12Z" fill="#0C1457" />
      <path d="M23.04 10.56H0.960007V12.48H23.04V10.56Z" fill="#4456F6" />
      <path d="M21.12 12.48V21.12H2.88V12.48H1.92V22.08H22.08V12.48H21.12Z" fill="#0C1457" />
    </svg>

  );
}

Scan.defaultProps = {
  className: undefined,
};

Scan.propTypes = {
  className: PropTypes.string,
};

export default Scan;
export { Scan };
