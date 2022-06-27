import React from 'react';
import PropTypes from 'prop-types';

function SustainablePageV1(props) {
  const { className } = props;

  return (
    <svg width="24" height="24" className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.45224 2.88H2.84048V3.84H9.45224V2.88Z" fill="#0C1457" />
      <path d="M9.45224 4.8H2.84048V5.76H9.45224V4.8Z" fill="#0C1457" />
      <path d="M9.45224 6.72H2.84048V7.68H9.45224V6.72Z" fill="#0C1457" />
      <path d="M15.1236 8.64H2.84048V9.6H15.1236V8.64Z" fill="#0C1457" />
      <path d="M14.1831 10.56H2.84048V11.52H14.1831V10.56Z" fill="#0C1457" />
      <path d="M17.964 8.64V5.76H12.2927L12.2735 0H0V19.2V24H17.9448L17.964 22.0896L17.014 22.08L17.0044 23.04H0.950019V19.2V0.96H11.3331L11.3523 6.72H17.014V8.64H17.964Z" fill="#0C1457" />
      <path d="M24 21.12L20.9964 15.744L20.1711 16.224L22.3687 20.16H20.0272L20.6222 19.6032L19.9792 18.9024L18.1559 20.6112L19.9792 22.32L20.6222 21.6192L20.0944 21.12H24Z" fill="#4456F6" />
      <path d="M13.7513 18.2016L14.0296 19.0464L14.9316 18.7392L14.1927 16.5312L11.7553 17.0208L11.9376 17.9616L12.9068 17.76L11.0356 21.12H17.014V20.16H12.6573L13.7513 18.2016Z" fill="#4456F6" />
      <path d="M17.7049 14.4384L20.1903 14.784L20.7373 12.5184L19.8161 12.2976L19.5954 13.2096L17.513 9.47519L14.3846 15.0912L15.2003 15.5616L17.513 11.424L18.7413 13.6128L17.8297 13.4976L17.7049 14.4384Z" fill="#4456F6" />
    </svg>

  );
}

SustainablePageV1.defaultProps = {
  className: undefined,
};

SustainablePageV1.propTypes = {
  className: PropTypes.string,
};

export default SustainablePageV1;
export { SustainablePageV1 };
