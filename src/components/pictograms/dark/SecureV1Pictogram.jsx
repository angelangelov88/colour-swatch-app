import React from 'react';
import PropTypes from 'prop-types';

function SecureV1Pictogram(props) {
  const { className } = props;

  return (
    <svg width="24" height="24" className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.3888 6.72H2.90881V7.68H15.3888V6.72Z" fill="white" />
      <path d="M13.4688 8.64H2.90881V9.6H13.4688V8.64Z" fill="white" />
      <path d="M10.5831 10.5414L2.91661 10.5414L2.92231 11.5013L10.5888 11.5013L10.5831 10.5414Z" fill="white" />
      <path d="M10.5887 12.4157L2.9088 12.4613L2.91449 13.4213L10.5944 13.3757L10.5887 12.4157Z" fill="white" />
      <path d="M17.5104 23.04H0.988798V19.2L0.969594 0.979204L17.52 0.96V3.84959H0.508799V4.80959H17.52L17.5296 9.60959H18.4992L18.4896 0L0 0.0192041L0.0192041 19.2V24H18.4704L18.4896 21.1104L17.52 21.1008L17.5104 23.04Z" fill="white" />
      <path d="M2.448 2.89922C2.7184 2.89922 2.93759 2.68432 2.93759 2.41922C2.93759 2.15412 2.7184 1.93922 2.448 1.93922C2.1776 1.93922 1.95839 2.15412 1.95839 2.41922C1.95839 2.68432 2.1776 2.89922 2.448 2.89922Z" fill="white" />
      <path d="M4.39681 2.89922C4.6672 2.89922 4.8864 2.68432 4.8864 2.41922C4.8864 2.15412 4.6672 1.93922 4.39681 1.93922C4.12641 1.93922 3.9072 2.15412 3.9072 2.41922C3.9072 2.68432 4.12641 2.89922 4.39681 2.89922Z" fill="white" />
      <path d="M6.336 2.89922C6.6064 2.89922 6.82559 2.68432 6.82559 2.41922C6.82559 2.15412 6.6064 1.93922 6.336 1.93922C6.0656 1.93922 5.84639 2.15412 5.84639 2.41922C5.84639 2.68432 6.0656 2.89922 6.336 2.89922Z" fill="white" />
      <path d="M23.5104 11.5104C22.6361 11.5537 21.7633 11.3995 20.9568 11.0592C19.9702 10.6495 19.0974 10.0072 18.4128 9.18722L18.0672 8.77441L17.712 9.18722C17.0176 10.005 16.1392 10.6466 15.1488 11.0592C14.3657 11.3902 13.522 11.5537 12.672 11.5392H12.1632L12.2112 12.048C12.4183 14.0199 13.0364 15.9265 14.0256 17.6448C14.951 19.2788 16.2223 20.6909 17.7504 21.7824L18.0192 21.9744L18.288 21.7728C19.7992 20.6509 21.0665 19.2334 22.0128 17.6064C23.0149 15.8888 23.6674 13.99 23.9328 12.0192L24 11.4912L23.5104 11.5104ZM22.0896 15.5136H18.0576V20.832C16.7445 19.8425 15.6442 18.5985 14.8224 17.1744C14.5165 16.6377 14.2502 16.0795 14.0256 15.504H18.0576V10.1472C18.7773 10.895 19.6433 11.4865 20.6016 11.8848C21.3611 12.1987 22.1707 12.3743 22.992 12.4032C22.7907 13.4718 22.472 14.515 22.0416 15.5136H22.0896Z" fill="#79ADFC" />
    </svg>

  );
}

SecureV1Pictogram.defaultProps = {
  className: undefined,
};

SecureV1Pictogram.propTypes = {
  className: PropTypes.string,
};

export default SecureV1Pictogram;
export { SecureV1Pictogram };
