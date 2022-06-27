import React from 'react';
import PropTypes from 'prop-types';

function FolderAlt3Pictogram(props) {
  const { className } = props;

  return (
    <svg width="24" height="24" className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21.12 7.68V5.76H20.16V3.84H19.2V1.92H18.24V0H4.80001V1.92H3.84001V3.84H2.88001V5.76H1.92001V8.64H2.88001V6.72H20.16V7.68H12.48V8.64H21.12V12.48H22.08V7.68H21.12ZM5.76001 0.96H17.28V1.92H5.76001V0.96ZM4.80001 2.88H18.24V3.84H4.80001V2.88ZM3.84001 5.76V4.8H19.2V5.76H3.84001Z" fill="#4456F6" />
      <path d="M20.1504 9.6H13.4304V10.56H20.1504V9.6Z" fill="#4456F6" />
      <path d="M20.1504 16.32H3.83038V17.28H20.1504V16.32Z" fill="#0C1457" />
      <path d="M24 11.8464V11.52L22.0128 0.959999H18.24V1.92H21.216L23.0208 11.52H15.3408L12.4608 7.68H0.9408L2.7168 1.92H4.8V0.959999H2.0544L0 7.68V24H24V11.9136V11.8464ZM23.04 23.04H0.96V8.64H12L14.88 12.48H23.0592L23.04 23.04Z" fill="#0C1457" />
    </svg>

  );
}

FolderAlt3Pictogram.defaultProps = {
  className: undefined,
};

FolderAlt3Pictogram.propTypes = {
  className: PropTypes.string,
};

export default FolderAlt3Pictogram;
export { FolderAlt3Pictogram };
