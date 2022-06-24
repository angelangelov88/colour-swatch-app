import React from 'react';
import PropTypes from 'prop-types';

function UploadImageSuccessfulSquare(props) {
  const { className } = props;

  return (
    <svg width="24" height="24" className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.4352 15.8592L14.1408 13.5648L14.8128 12.8832L16.3584 14.4192L19.8624 10.0416L20.6112 10.6368L16.4352 15.8592Z" fill="#46DBAA" />
      <path d="M17.28 20.16H0.96V17.28V16.32V11.8944L3.3408 9.36L5.8752 12.0864L8.7552 15.1968L9.456 14.544L6.864 11.7408L11.9808 5.6928L14.448 8.5824L15.1776 7.9584L11.9808 4.2048L6.2112 11.04L3.3408 7.9488L0.96 10.4928V2.88H17.28V7.3152H18.24V1.92H0V16.32V17.28V21.12H18.2208L18.24 18.768L17.2896 18.7584L17.28 20.16Z" fill="#0C1457" />
      <path d="M3.84 6.27844C3.84 6.56324 3.92446 6.84165 4.08269 7.07846C4.24092 7.31527 4.46582 7.49983 4.72894 7.60882C4.99207 7.71781 5.2816 7.74633 5.56094 7.69077C5.84027 7.63521 6.09685 7.49806 6.29824 7.29667C6.49962 7.09528 6.63677 6.8387 6.69233 6.55937C6.74789 6.28003 6.71938 5.9905 6.61039 5.72737C6.5014 5.46425 6.31683 5.23935 6.08002 5.08112C5.84322 4.92289 5.56481 4.83844 5.28 4.83844C4.89809 4.83844 4.53182 4.99015 4.26177 5.26021C3.99171 5.53026 3.84 5.89653 3.84 6.27844ZM5.76 6.27844C5.76 6.37337 5.73185 6.46618 5.6791 6.54511C5.62636 6.62405 5.5514 6.68557 5.46369 6.7219C5.37598 6.75823 5.27947 6.76774 5.18636 6.74922C5.09325 6.73069 5.00772 6.68498 4.94059 6.61785C4.87346 6.55072 4.82774 6.46519 4.80922 6.37208C4.7907 6.27897 4.80021 6.18246 4.83654 6.09475C4.87287 6.00704 4.93439 5.93208 5.01333 5.87933C5.09226 5.82659 5.18507 5.79844 5.28 5.79844C5.4073 5.79844 5.52939 5.84901 5.61941 5.93903C5.70943 6.02904 5.76 6.15113 5.76 6.27844Z" fill="#0C1457" />
      <path d="M17.76 19.2C16.5258 19.2 15.3194 18.834 14.2932 18.1484C13.2671 17.4627 12.4673 16.4882 11.995 15.3479C11.5227 14.2077 11.3991 12.9531 11.6399 11.7426C11.8807 10.5322 12.475 9.42034 13.3477 8.54766C14.2203 7.67498 15.3322 7.08068 16.5426 6.8399C17.7531 6.59913 19.0077 6.7227 20.1479 7.195C21.2882 7.66729 22.2627 8.46708 22.9484 9.49325C23.634 10.5194 24 11.7258 24 12.96C23.9975 14.6142 23.3392 16.1999 22.1695 17.3695C20.9999 18.5392 19.4142 19.1975 17.76 19.2ZM17.76 7.68C16.7157 7.68 15.6949 7.98967 14.8266 8.56984C13.9583 9.15002 13.2815 9.97464 12.8819 10.9394C12.4823 11.9042 12.3777 12.9659 12.5815 13.9901C12.7852 15.0143 13.2881 15.9551 14.0265 16.6935C14.7649 17.4319 15.7057 17.9348 16.7299 18.1385C17.7541 18.3423 18.8158 18.2377 19.7806 17.8381C20.7454 17.4385 21.57 16.7617 22.1502 15.8934C22.7303 15.0251 23.04 14.0043 23.04 12.96C23.0375 11.5604 22.4804 10.2189 21.4907 9.22928C20.5011 8.23964 19.1596 7.68254 17.76 7.68Z" fill="#46DBAA" />
    </svg>

  );
}

UploadImageSuccessfulSquare.defaultProps = {
  className: undefined,
};

UploadImageSuccessfulSquare.propTypes = {
  className: PropTypes.string,
};

export default UploadImageSuccessfulSquare;
export { UploadImageSuccessfulSquare };
