import React from 'react';
import PropTypes from 'prop-types';

function UnknownSignerPictogram(props) {
  const { className } = props;

  return (
    <svg width="24" height="24" className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M23.8305 24H0V23.3762C0 23.2611 0 23.1555 0 23.0404C0.00488227 20.663 0.774232 18.3452 2.20245 16.4054C3.63066 14.4656 5.64773 12.9988 7.97673 12.2063C6.76549 11.384 5.85771 10.2119 5.38492 8.85987C4.91213 7.50782 4.89887 6.046 5.34706 4.68621C5.79526 3.32641 6.68163 2.13925 7.87777 1.29671C9.07392 0.45417 10.5177 0 12 0C13.4823 0 14.9261 0.45417 16.1222 1.29671C17.3184 2.13925 18.2047 3.32641 18.6529 4.68621C19.1011 6.046 19.0879 7.50782 18.6151 8.85987C18.1423 10.2119 17.2345 11.384 16.0233 12.2063C18.3523 12.9988 20.3693 14.4656 21.7975 16.4054C23.2258 18.3452 23.9951 20.663 24 23.0404C24 23.1555 24 23.2611 24 23.3762L23.8305 24ZM0.897377 23.0404H22.8334C22.8321 20.6978 22.0212 18.4221 20.5283 16.5719C19.0354 14.7216 16.9454 13.4019 14.5875 12.8205L13.2513 12.4942L14.4977 11.9184C15.7223 11.3558 16.7118 10.4091 17.3037 9.23385C17.8956 8.0586 18.0548 6.72459 17.755 5.45082C17.4553 4.17704 16.7145 3.03918 15.6542 2.22402C14.594 1.40886 13.2773 0.964839 11.9202 0.964839C10.5632 0.964839 9.24647 1.40886 8.18621 2.22402C7.12596 3.03918 6.38516 4.17704 6.08543 5.45082C5.7857 6.72459 5.94485 8.0586 6.53674 9.23385C7.12864 10.4091 8.11811 11.3558 9.34275 11.9184L10.5891 12.4942L9.24304 12.8205C6.87585 13.3928 4.77464 14.7086 3.27205 16.5597C1.76946 18.4108 0.951347 20.6914 0.947234 23.0404H0.897377Z" fill="white" />
      <path d="M13.9393 16.3231C13.9393 15.814 13.7292 15.3259 13.3552 14.966C12.9813 14.606 12.474 14.4038 11.9451 14.4038C11.4163 14.4038 10.909 14.606 10.535 14.966C10.1611 15.3259 9.95096 15.814 9.95096 16.3231H10.9481C10.9481 16.0685 11.0531 15.8245 11.2401 15.6445C11.4271 15.4645 11.6807 15.3634 11.9451 15.3634C12.0784 15.355 12.2119 15.374 12.3369 15.4192C12.4619 15.4644 12.5754 15.5348 12.6698 15.6257C12.7642 15.7165 12.8373 15.8258 12.8843 15.946C12.9313 16.0663 12.951 16.1948 12.9422 16.3231C12.9422 16.5776 12.8372 16.8216 12.6502 17.0016C12.4632 17.1816 12.2096 17.2827 11.9451 17.2827H10.9481V19.2019H11.9451V18.2423C12.474 18.2423 12.9813 18.0401 13.3552 17.6802C13.7292 17.3202 13.9393 16.8321 13.9393 16.3231Z" fill="#79ADFC" />
      <path d="M11.4167 21.1215C11.692 21.1215 11.9152 20.9066 11.9152 20.6415C11.9152 20.3764 11.692 20.1615 11.4167 20.1615C11.1413 20.1615 10.9181 20.3764 10.9181 20.6415C10.9181 20.9066 11.1413 21.1215 11.4167 21.1215Z" fill="#79ADFC" />
    </svg>

  );
}

UnknownSignerPictogram.defaultProps = {
  className: undefined,
};

UnknownSignerPictogram.propTypes = {
  className: PropTypes.string,
};

export default UnknownSignerPictogram;
export { UnknownSignerPictogram };