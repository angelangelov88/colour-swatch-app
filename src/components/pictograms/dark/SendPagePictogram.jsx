import React from 'react';
import PropTypes from 'prop-types';

function SendPagePictogram(props) {
  const { className } = props;

  return (
    <svg width="24" height="24" className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.2869 20.16V23.04H0.960385V4.8H17.2869V10.56H18.2473V0H0V24H18.2473V20.16H17.2869ZM0.960385 0.96H17.2869V3.84H0.960385V0.96Z" fill="white" />
      <path d="M2.39116 2.88C2.65625 2.88 2.87116 2.6651 2.87116 2.4C2.87116 2.13491 2.65625 1.92 2.39116 1.92C2.12606 1.92 1.91116 2.13491 1.91116 2.4C1.91116 2.6651 2.12606 2.88 2.39116 2.88Z" fill="white" />
      <path d="M4.31192 2.88C4.57702 2.88 4.79192 2.6651 4.79192 2.4C4.79192 2.13491 4.57702 1.92 4.31192 1.92C4.04683 1.92 3.83192 2.13491 3.83192 2.4C3.83192 2.6651 4.04683 2.88 4.31192 2.88Z" fill="white" />
      <path d="M6.23269 2.88C6.49779 2.88 6.71269 2.6651 6.71269 2.4C6.71269 2.13491 6.49779 1.92 6.23269 1.92C5.9676 1.92 5.75269 2.13491 5.75269 2.4C5.75269 2.6651 5.9676 2.88 6.23269 2.88Z" fill="white" />
      <path d="M15.3565 6.72H2.87154V7.68H15.3565V6.72Z" fill="white" />
      <path d="M13.4358 8.64H2.87154V9.6H13.4358V8.64Z" fill="white" />
      <path d="M9.59206 10.5294H2.86937L2.86938 11.4894H9.59207L9.59206 10.5294Z" fill="white" />
      <path d="M9.59745 12.4494H2.87476L2.87476 13.4094H9.59745L9.59745 12.4494Z" fill="white" />
      <path d="M11.515 10.56V20.16H24V10.56H11.515ZM17.7383 15.36L13.2053 11.52H22.2617L17.7383 15.36ZM16.1537 15.2736L12.4754 18.5664V12.2016L16.1537 15.2736ZM16.8932 15.9072L17.7383 16.6176L18.5738 15.9072L22.2521 19.1904H13.2149L16.8932 15.9072ZM19.3133 15.2736L23.0396 12.1056V18.6048L19.3133 15.2736Z" fill="#79ADFC" />
    </svg>

  );
}

SendPagePictogram.defaultProps = {
  className: undefined,
};

SendPagePictogram.propTypes = {
  className: PropTypes.string,
};

export default SendPagePictogram;
export { SendPagePictogram };
