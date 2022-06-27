import React from 'react';
import PropTypes from 'prop-types';

function CreateDocumentPictogram(props) {
  const { className } = props;

  return (
    <svg width="24" height="24" className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 5.76V0H5V8.64H0V19.2H5V24H24V5.76H18ZM1 18.24V9.6H10V18.24H1ZM23 23.04H6V19.2H11V16.32H20V15.36H11V14.4H20V13.44H11V12.48H20V11.52H11V8.64H6V0.96H17V6.72H23V23.04Z" fill="#0C1457" />
      <path d="M5.98004 16.1184H6.73004V16.608H3.91004V16.1184H4.65004V12.1248H3.32004V12.6816H2.79004V11.5008H7.89004V12.6432H7.34004V12.1248H5.98004V16.1568V16.1184Z" fill="#4456F6" />
    </svg>

  );
}

CreateDocumentPictogram.defaultProps = {
  className: undefined,
};

CreateDocumentPictogram.propTypes = {
  className: PropTypes.string,
};

export default CreateDocumentPictogram;
export { CreateDocumentPictogram };
