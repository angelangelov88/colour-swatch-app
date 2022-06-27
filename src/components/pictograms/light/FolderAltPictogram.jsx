import React from 'react';
import PropTypes from 'prop-types';

function FolderAlt(props) {
  const { className } = props;

  return (
    <svg width="24" height="24" className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.16 16.3265H3.84V17.2865H20.16V16.3265Z" fill="#0C1457" />
      <path d="M12.48 2.88116H5.76V3.84116H12.48V2.88116Z" fill="#4456F6" />
      <path d="M12.48 4.80193H5.76V5.76193H12.48V4.80193Z" fill="#4456F6" />
      <path d="M12.48 6.72269H5.76V7.68269H12.48V6.72269Z" fill="#4456F6" />
      <path d="M21.12 11.5246H20.16V6.72269H14.4L14.3808 0.960385H3.84V8.64346H2.88V0H15.3408L15.36 5.76231H21.12V11.5246Z" fill="#4456F6" />
      <path d="M21.12 6.71308V7.67347H23.04V11.515H16.32L13.44 8.63385H0.96V7.67347H2.88V6.71308H0V24H24V6.71308H21.12ZM23.04 23.0396H0.96V9.59423H13.056L15.936 12.4754H23.0112L23.04 23.0396Z" fill="#0C1457" />
    </svg>

  );
}

FolderAlt.defaultProps = {
  className: undefined,
};

FolderAlt.propTypes = {
  className: PropTypes.string,
};

export default FolderAlt;
export { FolderAlt };
