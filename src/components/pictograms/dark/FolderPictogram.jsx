import React from 'react';
import PropTypes from 'prop-types';

function FolderPictogram(props) {
  const { className } = props;

  return (
    <svg width="24" height="24" className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.0704 9.59051H21.1104V5.75051H12.4704V4.79051H22.0704V9.59051Z" fill="#79ADFC" />
      <path d="M19.1904 6.71051H13.4304V7.67051H19.1904V6.71051Z" fill="#79ADFC" />
      <path d="M3.84 2.88H0V21.12H24V2.88H3.84ZM23.04 20.16H0.96V5.76H11.9904L14.8704 9.6H23.0496L23.04 20.16ZM15.36 8.64L12.48 4.8H0.96V3.84H23.04V8.64H15.36Z" fill="white" />
      <path d="M20.1504 13.4305H3.83038V14.3905H20.1504V13.4305Z" fill="white" />
    </svg>

  );
}

FolderPictogram.defaultProps = {
  className: undefined,
};

FolderPictogram.propTypes = {
  className: PropTypes.string,
};

export default FolderPictogram;
export { FolderPictogram };
