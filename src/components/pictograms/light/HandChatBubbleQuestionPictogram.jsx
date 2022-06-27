import React from 'react';
import PropTypes from 'prop-types';

function HandChatBubbleQuestionPictogram(props) {
  const { className } = props;

  return (
    <svg width="24" height="24" className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.40001 20.1102C2.66511 20.1102 2.88001 19.8957 2.88001 19.6311C2.88001 19.3665 2.66511 19.1521 2.40001 19.1521C2.13492 19.1521 1.92001 19.3665 1.92001 19.6311C1.92001 19.8957 2.13492 20.1102 2.40001 20.1102Z" fill="#0C1457" />
      <path d="M23.7504 16.6994C23.5164 16.1701 23.0832 15.7539 22.5444 15.5406C22.0056 15.3272 21.4043 15.334 20.8704 15.5592L17.28 17.2646C17.28 16.7564 17.0777 16.2691 16.7176 15.9097C16.3576 15.5504 15.8692 15.3485 15.36 15.3485H11.808L9.7056 14.0359C9.13521 13.6609 8.46859 13.458 7.7856 13.4515H4.8V12.4934H0V22.0742H4.8V21.1161H5.4816L9.4464 23.2814C10.157 23.7539 10.9926 24.0041 11.8464 24C12.4722 23.9979 13.0904 23.8641 13.6608 23.6071L22.5696 19.6119C22.8412 19.5011 23.0877 19.3371 23.2948 19.1297C23.5019 18.9222 23.6653 18.6755 23.7753 18.4041C23.8853 18.1327 23.9398 17.842 23.9356 17.5492C23.9313 17.2564 23.8683 16.9675 23.7504 16.6994ZM0.96 21.0778V13.4132H3.84V20.1197V21.0778H0.96ZM22.1856 18.6922L13.2576 22.6874C12.7256 22.9301 12.1401 23.0329 11.557 22.9859C10.9739 22.939 10.4126 22.7438 9.9264 22.4191L5.7216 20.1101H4.7616V14.3616H7.7184C8.22081 14.3653 8.71124 14.5151 9.1296 14.7928L11.472 16.2587H15.312C15.5666 16.2587 15.8108 16.3596 15.9908 16.5393C16.1709 16.7189 16.272 16.9626 16.272 17.2167C16.272 17.4708 16.1709 17.7145 15.9908 17.8942C15.8108 18.0739 15.5666 18.1748 15.312 18.1748H10.512V19.1329H15.312C15.8204 19.1308 16.3072 18.9275 16.6656 18.5676L21.2352 16.479C21.384 16.4161 21.5437 16.3831 21.7052 16.3818C21.8668 16.3804 22.027 16.4109 22.1768 16.4714C22.3266 16.5319 22.4629 16.6212 22.5781 16.7343C22.6932 16.8474 22.785 16.982 22.848 17.1305C22.911 17.279 22.9441 17.4384 22.9455 17.5996C22.9468 17.7609 22.9162 17.9208 22.8556 18.0702C22.795 18.2197 22.7055 18.3558 22.5922 18.4707C22.4788 18.5856 22.344 18.6772 22.1952 18.7401L22.1856 18.6922Z" fill="#0C1457" />
      <path d="M15.6864 3.41076C15.941 3.41076 16.1852 3.5117 16.3652 3.69138C16.5452 3.87105 16.6464 4.11475 16.6464 4.36884C16.6464 4.62294 16.5452 4.86664 16.3652 5.04631C16.1852 5.22599 15.941 5.32693 15.6864 5.32693H14.7264V7.24309H15.6864V6.28501C16.1956 6.28501 16.684 6.08313 17.044 5.72378C17.4041 5.36443 17.6064 4.87704 17.6064 4.36884C17.6064 3.86065 17.4041 3.37326 17.044 3.01391C16.684 2.65456 16.1956 2.45268 15.6864 2.45268C15.181 2.46484 14.6997 2.67063 14.3422 3.02738C13.9848 3.38412 13.7786 3.86447 13.7664 4.36884H14.7264C14.7264 4.11475 14.8275 3.87105 15.0076 3.69138C15.1876 3.5117 15.4318 3.41076 15.6864 3.41076Z" fill="#4456F6" />
      <path d="M15.1968 8.17242C15.1019 8.17242 15.0091 8.20051 14.9301 8.25315C14.8512 8.30579 14.7897 8.38061 14.7534 8.46814C14.717 8.55567 14.7075 8.652 14.726 8.74493C14.7446 8.83785 14.7903 8.9232 14.8574 8.99019C14.9245 9.05719 15.0101 9.10281 15.1032 9.1213C15.1963 9.13978 15.2928 9.1303 15.3805 9.09405C15.4682 9.05779 15.5432 8.99638 15.5959 8.91761C15.6487 8.83883 15.6768 8.74621 15.6768 8.65146C15.6768 8.52442 15.6262 8.40256 15.5362 8.31272C15.4462 8.22289 15.3241 8.17242 15.1968 8.17242Z" fill="#4456F6" />
      <path d="M6.72 0V11.497H12.7392L15.36 14.5628L17.9808 11.5449H24V0.047907L6.72 0ZM23.04 10.5389H17.5392L15.36 13.0491L13.1808 10.5389H7.68V0.958081H23.04V10.5389Z" fill="#4456F6" />
    </svg>

  );
}

HandChatBubbleQuestionPictogram.defaultProps = {
  className: undefined,
};

HandChatBubbleQuestionPictogram.propTypes = {
  className: PropTypes.string,
};

export default HandChatBubbleQuestionPictogram;
export { HandChatBubbleQuestionPictogram };
