import React from 'react';
import PropTypes from 'prop-types';

function SearchPictogram(props) {
  const { className } = props;

  return (
    <svg width="24" height="24" className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.7558 19.2V23.04H0.986436V4.8H17.7558V16.32H18.7423V0H0V24H18.7423V19.2H17.7558ZM0.986436 0.96H17.7558V3.84H0.986436V0.96Z" fill="#0C1457" />
      <path d="M2.4464 2.88C2.7188 2.88 2.93962 2.66509 2.93962 2.4C2.93962 2.1349 2.7188 1.92 2.4464 1.92C2.17401 1.92 1.95319 2.1349 1.95319 2.4C1.95319 2.66509 2.17401 2.88 2.4464 2.88Z" fill="#0C1457" />
      <path d="M4.41927 2.88C4.69167 2.88 4.91249 2.66509 4.91249 2.4C4.91249 2.1349 4.69167 1.92 4.41927 1.92C4.14688 1.92 3.92606 2.1349 3.92606 2.4C3.92606 2.66509 4.14688 2.88 4.41927 2.88Z" fill="#0C1457" />
      <path d="M6.39215 2.88C6.66454 2.88 6.88537 2.66509 6.88537 2.4C6.88537 2.1349 6.66454 1.92 6.39215 1.92C6.11975 1.92 5.89893 2.1349 5.89893 2.4C5.89893 2.66509 6.11975 2.88 6.39215 2.88Z" fill="#0C1457" />
      <path d="M7.8718 6.72H2.93962V7.68H7.8718V6.72Z" fill="#0C1457" />
      <path d="M5.89893 8.64H2.93962V9.6H5.89893V8.64Z" fill="#0C1457" />
      <path d="M5.89893 10.56H2.93962V11.52H5.89893V10.56Z" fill="#0C1457" />
      <path d="M5.89893 12.48H2.93962V13.44H5.89893V12.48Z" fill="#0C1457" />
      <path d="M6.88537 14.4H2.93962V15.36H6.88537V14.4Z" fill="#0C1457" />
      <path d="M9.29497 16.3125L2.94233 16.3243L2.94422 17.2843L9.29686 17.2725L9.29497 16.3125Z" fill="#0C1457" />
      <path d="M14.7695 18.2041L2.9324 18.2483L2.93618 19.2083L14.7733 19.1641L14.7695 18.2041Z" fill="#0C1457" />
      <path d="M14.7771 20.1241L2.93998 20.1683L2.94377 21.1283L14.7809 21.0841L14.7771 20.1241Z" fill="#0C1457" />
      <path d="M24 20.6015L16.4735 14.2751C17.1465 12.9723 17.3073 11.475 16.9255 10.0649C16.5438 8.65483 15.6458 7.42904 14.4005 6.61808C13.1552 5.80712 11.6484 5.46687 10.1634 5.66131C8.6784 5.85575 7.31756 6.57149 6.33678 7.67392C5.356 8.77636 4.82288 10.1895 4.83766 11.6477C4.85244 13.1058 5.4141 14.5085 6.41704 15.5919C7.41997 16.6753 8.79506 17.3648 10.2837 17.5307C11.7724 17.6966 13.272 17.3274 14.5006 16.4927L22.0567 22.8383L24 20.6015ZM16.1776 11.5487C16.1756 12.5043 15.8952 13.4397 15.3687 14.2463C14.9625 14.8546 14.4278 15.3717 13.8003 15.7631V14.3999H6.80643C6.59124 14.0995 6.40938 13.7777 6.26388 13.4399H13.7904V10.5599H5.97782C6.04833 10.2312 6.15072 9.9098 6.28362 9.59994H13.7904V7.34394C14.5183 7.79417 15.1184 8.41512 15.5355 9.14981C15.9526 9.8845 16.1734 10.7094 16.1776 11.5487ZM12.3009 6.74874H9.76574C10.5942 6.5185 11.4724 6.5185 12.3009 6.74874ZM7.77727 7.70874H12.8138V8.66874H6.8952C7.17353 8.27785 7.5054 7.9258 7.88164 7.62234L7.77727 7.70874ZM5.90877 11.4239L5.84622 11.5487H12.8138V12.5087H5.98768C5.92321 12.1926 5.89018 11.8711 5.88904 11.5487C5.88904 11.4911 5.90877 11.4431 5.90877 11.3951V11.4239ZM7.73368 15.3887H12.8138V16.2719C11.964 16.5849 11.043 16.6681 10.1485 16.5126C9.25406 16.3571 8.41958 15.9687 7.73368 15.3887ZM15.2405 15.9167C15.497 15.6746 15.7313 15.4112 15.9408 15.1295L22.6091 20.7359L21.9088 21.5135L15.2405 15.9167Z" fill="#4456F6" />
    </svg>

  );
}

SearchPictogram.defaultProps = {
  className: undefined,
};

SearchPictogram.propTypes = {
  className: PropTypes.string,
};

export default SearchPictogram;
export { SearchPictogram };
