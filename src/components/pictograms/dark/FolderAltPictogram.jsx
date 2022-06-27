import React from 'react';
import PropTypes from 'prop-types';

function FolderAltPictogram(props) {
  const { className } = props;

  return (
    <svg width="24" height="24" className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.16 16.3265H3.84V17.2865H20.16V16.3265Z" fill="white" />
      <path d="M12.48 2.88115H5.76V3.84115H12.48V2.88115Z" fill="#79ADFC" />
      <path d="M12.48 4.80192H5.76V5.76192H12.48V4.80192Z" fill="#79ADFC" />
      <path d="M12.48 6.72269H5.76V7.68269H12.48V6.72269Z" fill="#79ADFC" />
      <path d="M21.12 11.5246H20.16V6.72269H14.4L14.3808 0.960385H3.84V8.64346H2.88V0H15.3408L15.36 5.76231H21.12V11.5246Z" fill="#79ADFC" />
      <path d="M21.12 6.71308V7.67346H23.04V11.515H16.32L13.44 8.63385H0.96V7.67346H2.88V6.71308H0V24H24V6.71308H21.12ZM23.04 23.0396H0.96V9.59423H13.056L15.936 12.4754H23.0112L23.04 23.0396Z" fill="white" />
    </svg>

  );
}

FolderAltPictogram.defaultProps = {
  className: undefined,
};

FolderAltPictogram.propTypes = {
  className: PropTypes.string,
};

export default FolderAltPictogram;
export { FolderAltPictogram };
