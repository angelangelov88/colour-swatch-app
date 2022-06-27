import React from 'react';
import PropTypes from 'prop-types';

function FolderAlt2Pictogram(props) {
  const { className } = props;

  return (
    <svg width="24" height="24" className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.59038 2.88116H3.83038V3.84116H9.59038V2.88116Z" fill="#4456F6" />
      <path d="M9.59038 4.80193H3.83038V5.76193H9.59038V4.80193Z" fill="#4456F6" />
      <path d="M9.59038 6.72269H3.83038V7.68269H9.59038V6.72269Z" fill="#4456F6" />
      <path d="M20.1504 16.3265H3.83038V17.2865H20.1504V16.3265Z" fill="#0C1457" />
      <path d="M21.1104 5.76231H20.1504V0H0.950394V9.60384H1.91039V0.960384H11.5104V6.72269H18.2304V12.485H19.1904V6.72269H20.1504V12.485H21.1104V6.72269H22.0704V12.485H23.0304V5.76231H21.1104ZM19.1904 0.960384V5.76231H18.2304V0.960384H19.1904ZM12.4704 5.76231V0.960384H13.4304V5.76231H12.4704ZM14.3904 5.76231V0.960384H15.3504V5.76231H14.3904ZM16.3104 0.960384H17.2704V5.76231H16.3104V0.960384Z" fill="#4456F6" />
      <path d="M23.04 6.71308V11.515H16.32L13.44 8.63385H0.96V7.67347V6.71308H0V24H24V6.71308H23.04ZM23.04 23.0396H0.96V9.59423H13.0368L15.9168 12.4754H22.992L23.04 23.0396Z" fill="#0C1457" />
    </svg>

  );
}

FolderAlt2Pictogram.defaultProps = {
  className: undefined,
};

FolderAlt2Pictogram.propTypes = {
  className: PropTypes.string,
};

export default FolderAlt2Pictogram;
export { FolderAlt2Pictogram };
