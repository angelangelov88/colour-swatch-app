import React from 'react';
import PropTypes from 'prop-types';

function PadlockShieldPictogram(props) {
  const { className } = props;

  return (
    <svg width="25" height="24" className={className} viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.2628 9.91116V8.63385H15.384V5.2629C15.384 2.38175 12.5819 0 9.14649 0C5.71106 0 2.91858 2.36254 2.91858 5.2629V8.63385H0.0397339V24H18.2725V22.0792H17.3128V23.0396H0.999351V9.59423H17.3128V9.91116H18.2628ZM5.78783 8.63385V5.31093C5.78783 4.01441 7.352 2.88115 9.13688 2.88115C10.9218 2.88115 12.4955 4.01441 12.4955 5.31093V8.63385H5.78783ZM13.4648 8.63385V5.31093C13.4648 3.47659 11.488 1.91116 9.14649 1.91116C6.80502 1.91116 4.83782 3.47659 4.83782 5.31093V8.63385H3.8782V5.2629C3.8782 2.89075 6.23885 0.969983 9.14649 0.969983C12.0541 0.969983 14.4244 2.89075 14.4244 5.2629V8.63385H13.4648Z" fill="white" />
      <path d="M17.3032 18.2857L15.4128 16.3842L16.0845 15.7023L17.2265 16.8452L19.923 13.455L20.6715 14.06L17.3032 18.2857Z" fill="#79ADFC" />
      <path d="M17.8118 22.8283L17.5335 22.6267C15.9038 21.4649 14.5478 19.9604 13.5607 18.2185C12.52 16.3829 11.8668 14.353 11.6415 12.2545L11.5935 11.7167H12.1309C13.021 11.7349 13.9047 11.5613 14.7219 11.2077C15.7586 10.7614 16.6758 10.0771 17.3992 9.21009L17.7734 8.76831L18.1381 9.21009C18.8471 10.0839 19.76 10.7699 20.7962 11.2077C21.638 11.5668 22.55 11.731 23.464 11.6879H24.0397L23.963 12.2545C23.6943 14.3498 23.0196 16.3724 21.9766 18.2089C20.9899 19.9357 19.6608 21.4424 18.0709 22.6363L17.8118 22.8283ZM12.6779 12.6771C12.93 14.4566 13.5126 16.1733 14.3956 17.7383C15.252 19.258 16.4116 20.5852 17.8022 21.6375C19.1582 20.5507 20.2976 19.2182 21.1609 17.7095C22.055 16.1461 22.6627 14.4353 22.9554 12.6579C22.0941 12.6296 21.2454 12.4441 20.4508 12.1105C19.4511 11.6802 18.5522 11.0456 17.8118 10.2473C17.0589 11.044 16.151 11.678 15.1441 12.1105C14.3543 12.4407 13.5135 12.6324 12.6587 12.6771H12.6779Z" fill="#79ADFC" />
    </svg>

  );
}

PadlockShieldPictogram.defaultProps = {
  className: undefined,
};

PadlockShieldPictogram.propTypes = {
  className: PropTypes.string,
};

export default PadlockShieldPictogram;
export { PadlockShieldPictogram };