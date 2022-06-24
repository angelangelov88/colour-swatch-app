import React from 'react';
import PropTypes from 'prop-types';

function UploadDocumentPreUpload(props) {
  const { className } = props;

  return (
    <svg width="24" height="24" className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.61274 2.88H2.88382V3.84H9.61274V2.88Z" fill="white" />
      <path d="M9.61274 4.8H2.88382V5.76H9.61274V4.8Z" fill="white" />
      <path d="M9.61274 6.72H2.88382V7.68H9.61274V6.72Z" fill="white" />
      <path d="M2.88534 8.63953L2.884 9.59953L9.61292 9.60892L9.61426 8.64892L2.88534 8.63953Z" fill="white" />
      <path d="M20.8308 16.5024L17.7644 13.4496L14.7075 16.5024L15.39 17.184L17.3126 15.2544L17.3029 23.04H0.961275V19.2V0.96H11.5161L11.5353 6.72H17.3029V8.16H18.2642V5.76H12.4966L12.4773 0H0V19.2V24H18.2642L18.2738 15.312L20.1483 17.184L20.8308 16.5024Z" fill="white" />
      <path d="M22.5707 14.3905H20.1964V13.4305H22.5707C22.6982 13.4305 22.8205 13.3799 22.9106 13.2899C23.0007 13.1999 23.0514 13.0778 23.0514 12.9505C23.0514 12.8232 23.0007 12.7011 22.9106 12.6111C22.8205 12.5211 22.6982 12.4705 22.5707 12.4705H22.0901V11.9905C22.0901 11.6086 21.9382 11.2423 21.6678 10.9722C21.3974 10.7022 21.0306 10.5505 20.6482 10.5505H20.1483L20.0234 10.2049C19.854 9.71429 19.5295 9.29205 19.0987 9.00193C18.6679 8.7118 18.1543 8.56954 17.6354 8.59664C17.1165 8.62374 16.6205 8.81874 16.2224 9.15216C15.8243 9.48559 15.5456 9.93933 15.4285 10.4449L15.2747 11.1073L14.6979 10.7425C14.4678 10.5873 14.1969 10.5038 13.9193 10.5025C13.5376 10.505 13.1723 10.6575 12.9025 10.927C12.6326 11.1965 12.4799 11.5613 12.4773 11.9425V12.4225H11.9967C11.87 12.4249 11.7492 12.4763 11.6596 12.5658C11.57 12.6553 11.5185 12.7759 11.5161 12.9025C11.5161 13.0298 11.5667 13.1519 11.6568 13.2419C11.747 13.3319 11.8692 13.3825 11.9967 13.3825H15.39V14.3425H11.9967C11.657 14.3373 11.33 14.2125 11.0734 13.9901C10.8169 13.7677 10.6472 13.4619 10.5943 13.1267C10.5414 12.7916 10.6088 12.4485 10.7844 12.1581C10.9601 11.8676 11.2328 11.6485 11.5545 11.5393C11.6598 10.9903 11.9536 10.4951 12.3853 10.1394C12.817 9.78358 13.3595 9.58946 13.9193 9.59048C14.1772 9.59373 14.4332 9.6358 14.6787 9.71528C14.9301 9.11962 15.3492 8.60962 15.8852 8.24712C16.4211 7.88461 17.0508 7.68517 17.698 7.67298C18.3452 7.66078 18.982 7.83636 19.5313 8.17841C20.0805 8.52047 20.5186 9.01433 20.7924 9.60008C21.3336 9.63286 21.848 9.84677 22.2527 10.2073C22.6573 10.5678 22.9285 11.054 23.0225 11.5873C23.3449 11.6968 23.6181 11.9168 23.7936 12.2082C23.9692 12.4996 24.0358 12.8436 23.9817 13.1794C23.9276 13.5151 23.7562 13.8209 23.498 14.0426C23.2397 14.2643 22.9112 14.3875 22.5707 14.3905Z" fill="#79ADFC" />
    </svg>

  );
}

UploadDocumentPreUpload.defaultProps = {
  className: undefined,
};

UploadDocumentPreUpload.propTypes = {
  className: PropTypes.string,
};

export default UploadDocumentPreUpload;
export { UploadDocumentPreUpload };
