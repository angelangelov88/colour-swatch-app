import React from 'react';
import PropTypes from 'prop-types';

function HandDocumentPictogram(props) {
  const { className } = props;

  return (
    <svg width="24" height="24" className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.2745 1.88973H13.4154V2.84973H17.2745V1.88973Z" fill="#4456F6" />
      <path d="M17.2745 3.80823H13.4154V4.76823H17.2745V3.80823Z" fill="#4456F6" />
      <path d="M20.1712 5.73631H13.3865V6.69631H20.1712V5.73631Z" fill="#4456F6" />
      <path d="M19.1799 3.83701V0H11.481V14.3216H22.067V3.76985L19.1799 3.83701ZM21.1624 13.4295H12.5011V0.988028H18.2753V4.82503H21.2202V13.4103L21.1624 13.4295Z" fill="#4456F6" />
      <path d="M2.38667 20.1546C2.65242 20.1546 2.86785 19.9397 2.86785 19.6746C2.86785 19.4095 2.65242 19.1946 2.38667 19.1946C2.12092 19.1946 1.90549 19.4095 1.90549 19.6746C1.90549 19.9397 2.12092 20.1546 2.38667 20.1546Z" fill="#0C1457" />
      <path d="M23.8571 16.7294C23.744 16.4648 23.5795 16.2251 23.373 16.0243C23.1666 15.8234 22.9222 15.6653 22.6541 15.5591C22.1054 15.3341 21.4898 15.3341 20.9411 15.5591L17.3322 17.2665C17.3322 16.7577 17.1294 16.2697 16.7685 15.91C16.4075 15.5502 15.918 15.348 15.4075 15.348H11.8275L9.71027 14.0243C9.13919 13.6473 8.47047 13.444 7.78554 13.4391H4.81183V12.4799H0V22.0724H4.81183V21.1131H5.45662L9.44081 23.281C10.0628 23.6892 10.779 23.9324 11.5217 23.9878C12.2643 24.0432 13.0088 23.9089 13.6849 23.5976L22.6445 19.5975C22.912 19.4863 23.1549 19.3236 23.3592 19.1187C23.5635 18.9138 23.7253 18.6707 23.8353 18.4034C23.9452 18.1361 24.0012 17.8498 24 17.5609C23.9988 17.272 23.9404 16.9861 23.8282 16.7198L23.8571 16.7294ZM0.943115 21.1227V13.4487H3.83021V20.1635V21.1227H0.943115ZM22.9717 18.0435C22.9088 18.1965 22.816 18.3356 22.6987 18.4525C22.5814 18.5694 22.4419 18.6619 22.2884 18.7246L13.3095 22.7343C12.7764 22.9782 12.1894 23.0816 11.6046 23.0346C11.0199 22.9876 10.4571 22.7917 9.97012 22.4657L5.7357 20.1635H4.77333V14.408H7.74705C8.2515 14.4156 8.74292 14.5688 9.16173 14.8492L11.5195 16.3169H15.369C15.6242 16.3169 15.869 16.4179 16.0495 16.5978C16.23 16.7777 16.3314 17.0217 16.3314 17.2761C16.3314 17.5305 16.23 17.7745 16.0495 17.9544C15.869 18.1343 15.6242 18.2354 15.369 18.2354H10.5572V19.1946H15.369C15.8786 19.1925 16.3666 18.989 16.7259 18.6287L21.2972 16.4704C21.6057 16.3456 21.951 16.3456 22.2595 16.4704C22.4098 16.5294 22.5467 16.6177 22.6623 16.7302C22.7778 16.8426 22.8697 16.9769 22.9324 17.1253C22.9952 17.2736 23.0276 17.4329 23.0277 17.5939C23.0278 17.7549 22.9957 17.9143 22.9332 18.0627L22.9717 18.0435Z" fill="#0C1457" />
    </svg>

  );
}

HandDocumentPictogram.defaultProps = {
  className: undefined,
};

HandDocumentPictogram.propTypes = {
  className: PropTypes.string,
};

export default HandDocumentPictogram;
export { HandDocumentPictogram };