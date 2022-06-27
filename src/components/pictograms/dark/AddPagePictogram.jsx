import React from 'react';
import PropTypes from 'prop-types';

function AddPagePictogram(props) {
  const { className } = props;

  return (
    <svg width="24" height="24" className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19.5 13.44H15.5V9.59999H14.5V13.44H10.5V14.4H14.5V18.24H15.5V14.4H19.5V13.44Z" fill="#79ADFC" />
      <path fillRule="evenodd" clipRule="evenodd" d="M19 0V5.76H24V24H0V0H19ZM6 2.88V0.96H1V23.04H6V21.12H3V20.16H6V19.2H3V18.24H6V17.28H3V16.32H6V15.36H3V14.4H6V13.44H3V12.48H6V11.52H2.99004V10.56H6V9.6H2.99004V8.64H6V7.68H2.99004V6.72H6V5.76H2.99004V4.8H6V3.84H2.99004V2.88H6ZM7 23.04H23V6.72H18V0.96H7V23.04Z" fill="white" />
    </svg>

  );
}

AddPagePictogram.defaultProps = {
  className: undefined,
};

AddPagePictogram.propTypes = {
  className: PropTypes.string,
};

export default AddPagePictogram;
export { AddPagePictogram };
