import React from 'react';
import PropTypes from 'prop-types';

function SingleDocPictogram(props) {
  const { className } = props;

  return (
    <svg width="24" height="24" className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.48 2.88H5.75999V3.84H12.48V2.88Z" fill="white" />
      <path d="M12.48 4.8H5.75999V5.76H12.48V4.8Z" fill="white" />
      <path d="M12.48 6.72H5.75999V7.68H12.48V6.72Z" fill="white" />
      <path d="M18.24 8.64H5.75999V9.6H18.24V8.64Z" fill="white" />
      <path d="M18.24 10.56H5.75999V11.52H18.24V10.56Z" fill="white" />
      <path d="M18.24 12.48H5.75999V13.44H18.24V12.48Z" fill="white" />
      <path d="M21.12 19.2H20.16V6.72H14.4L14.3904 0.96H3.84V19.2H2.88V0H15.3504L15.36 5.76H21.12V19.2Z" fill="white" />
      <path d="M21.12 24H2.88V19.2H3.84V23.04H20.16V19.2H21.12V24Z" fill="white" />
    </svg>

  );
}

SingleDocPictogram.defaultProps = {
  className: undefined,
};

SingleDocPictogram.propTypes = {
  className: PropTypes.string,
};

export default SingleDocPictogram;
export { SingleDocPictogram };
