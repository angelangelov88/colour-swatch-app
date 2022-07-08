import React from 'react';
import PropTypes from 'prop-types';

function PadlockShieldPictogram(props) {
  const { className } = props;

  return (
    <svg width="25" height="24" className={className} viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.2628 9.91116V8.63385H15.384V5.2629C15.384 2.38175 12.5819 0 9.14649 0C5.71106 0 2.91858 2.36254 2.91858 5.2629V8.63385H0.0397339V24H18.2725V22.0792H17.3128V23.0396H0.999351V9.59423H17.3128V9.91116H18.2628ZM5.78783 8.63385V5.31093C5.78783 4.01441 7.352 2.88115 9.13688 2.88115C10.9218 2.88115 12.4955 4.01441 12.4955 5.31093V8.63385H5.78783ZM13.4648 8.63385V5.31093C13.4648 3.47659 11.488 1.91116 9.14649 1.91116C6.80502 1.91116 4.83782 3.47659 4.83782 5.31093V8.63385H3.8782V5.2629C3.8782 2.89075 6.23885 0.969983 9.14649 0.969983C12.0541 0.969983 14.4244 2.89075 14.4244 5.2629V8.63385H13.4648Z" fill="#0C1457" />
      <path d="M17.2313 18.3956L15.3409 16.494L16.0126 15.8121L17.1546 16.955L19.8511 13.5648L20.5996 14.1699L17.2313 18.3956Z" fill="#4456F6" />
      <path d="M17.7972 23.18L17.5189 22.9784C15.8892 21.8166 14.5332 20.3121 13.5462 18.5702C12.5054 16.7345 11.8522 14.7047 11.6269 12.6062L11.5789 12.0684H12.1163C13.0064 12.0866 13.8901 11.913 14.7073 11.5594C15.7441 11.1131 16.6613 10.4288 17.3846 9.56178L17.7589 9.12L18.1235 9.56178C18.8326 10.4356 19.7454 11.1216 20.7816 11.5594C21.6234 11.9185 22.5354 12.0826 23.4494 12.0396H24.0252L23.9484 12.6062C23.6797 14.7014 23.005 16.7241 21.962 18.5606C20.9753 20.2874 19.6462 21.7941 18.0563 22.988L17.7972 23.18ZM12.6633 13.0288C12.9154 14.8083 13.498 16.5249 14.381 18.09C15.2375 19.6097 16.397 20.9369 17.7876 21.9892C19.1436 20.9024 20.283 19.5699 21.1463 18.0612C22.0404 16.4978 22.6482 14.787 22.9408 13.0096C22.0796 12.9813 21.2308 12.7958 20.4362 12.4621C19.4365 12.0319 18.5376 11.3972 17.7972 10.599C17.0443 11.3957 16.1364 12.0297 15.1295 12.4621C14.3397 12.7924 13.4989 12.9841 12.6441 13.0288H12.6633Z" fill="#4456F6" />
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