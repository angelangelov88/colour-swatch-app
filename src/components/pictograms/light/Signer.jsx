import React from 'react';
import PropTypes from 'prop-types';

function Signer(props) {
  const { className } = props;

  return (
    <svg width="24" height="24" className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.61782e-06 24V23.5098C-0.00188295 21.0969 0.734112 18.7417 2.10821 16.7635C3.4823 14.7854 5.42802 13.2801 7.68157 12.4517C6.86505 11.8744 6.18439 11.124 5.68761 10.2534C5.19082 9.38279 4.88999 8.4132 4.80633 7.41297C4.72267 6.41274 4.85822 5.40624 5.20342 4.46442C5.54862 3.52261 6.09507 2.66841 6.80423 1.96207C7.44448 1.32335 8.2059 0.82063 9.04323 0.483804C9.88055 0.146978 10.7767 -0.0170728 11.6783 0.00140404C13.1091 0.0255455 14.4961 0.501404 15.6432 1.36169C16.7903 2.22197 17.6394 3.42314 18.0705 4.79533C18.5016 6.16751 18.4929 7.64127 18.0455 9.00818C17.5982 10.3751 16.7348 11.566 15.5776 12.4124C16.6744 12.7949 17.7066 13.3437 18.6385 14.0398L18.0536 14.8241C16.9206 13.9809 15.6313 13.3743 14.2616 13.0399L12.9651 12.7163L14.1641 12.1183C15.33 11.5294 16.2667 10.5654 16.8251 9.3795C17.3835 8.19363 17.5316 6.85405 17.2458 5.57379C16.9601 4.29353 16.2569 3.14613 15.248 2.31405C14.2392 1.48197 12.9827 1.01301 11.6783 0.981739C10.9037 0.971351 10.1347 1.11582 9.41609 1.40677C8.69744 1.69771 8.04342 2.12933 7.49202 2.67656C6.94061 3.22379 6.50279 3.87574 6.20399 4.59454C5.90519 5.31333 5.75136 6.08467 5.75143 6.86375C5.75271 7.97409 6.06648 9.0614 6.65645 9.99993C7.24642 10.9385 8.0885 11.6899 9.08531 12.1674L10.2941 12.7458L8.99757 13.0791C6.78161 13.6586 4.80828 14.9362 3.36642 16.7249C1.92456 18.5136 1.08988 20.7195 0.98457 23.0197H22.4306C22.325 20.6041 21.4152 18.2943 19.8473 16.4612L20.5882 15.824C22.4214 17.9592 23.4254 20.6889 23.4151 23.5098V24H3.61782e-06Z" fill="#0C1457" />
      <path d="M24 12.6967L21.6214 10.3831L13.5792 18.7454L13.199 21.4707L15.9577 21.0688L21.6994 15.0888L22.1186 15.5005L21.3777 16.275L22.0698 16.9612L23.4931 15.4809L22.372 14.3927L24 12.6967ZM21.6409 11.7654L22.6157 12.7458L21.6409 13.7261L20.6661 12.7458L21.6409 11.7654ZM15.4898 20.1473L14.3493 20.3139L14.5053 19.1964L15.6848 17.9709L16.6596 18.9513L15.4898 20.1473ZM17.342 18.1866L16.3672 17.2063L20.0227 13.4026L20.9976 14.3829L17.342 18.1866Z" fill="#4456F6" />
    </svg>

  );
}

Signer.defaultProps = {
  className: undefined,
};

Signer.propTypes = {
  className: PropTypes.string,
};

export default Signer;
export { Signer };
