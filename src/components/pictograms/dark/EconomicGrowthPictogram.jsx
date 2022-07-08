import React from 'react';
import PropTypes from 'prop-types';

function EconomicGrowthPictogram(props) {
  const { className } = props;

  return (
    <svg width="25" height="24" className={className} viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.20783 24C8.89994 24 8.58243 24 8.24568 24H7.94741L6.98526 21.3504C6.69879 21.2616 6.41906 21.1526 6.14819 21.024L3.59848 22.224L3.36754 22.032C2.88062 21.6405 2.43565 21.1998 2.03976 20.7168L1.84735 20.4864L3.05005 17.9808C2.90766 17.7064 2.78859 17.4206 2.69405 17.1264L0.0481254 16.1664V15.8688C0.0481254 15.5616 0 15.2544 0 14.9088C0 14.5632 1.76169e-05 14.2848 0.0481254 13.9488V13.6512L2.74215 12.6912C2.83863 12.4255 2.95109 12.1658 3.07891 11.9136L1.84735 9.35999L2.03976 9.11999C2.43832 8.64236 2.88307 8.20505 3.36754 7.81439L3.59848 7.6224L6.32137 8.928C6.5362 8.82596 6.75807 8.73933 6.98526 8.66879L7.94741 5.89439H8.24568C8.86927 5.82719 9.49831 5.82719 10.1219 5.89439H10.4202L11.4496 8.77439C11.6302 8.84131 11.8069 8.91824 11.9788 9.0048L14.7595 7.6992L14.9904 7.8912C15.4772 8.27929 15.9221 8.71685 16.3182 9.1968L15.9429 9.504L16.3759 9.7056L15.1828 12.2016C15.2931 12.4313 15.3864 12.6687 15.4618 12.912L14.4997 13.2192C14.4109 12.9412 14.2982 12.6715 14.1629 12.4128L14.0571 12.2112L15.3271 9.5712C15.0883 9.30731 14.8345 9.0573 14.567 8.8224L11.9211 10.0704L11.6998 9.9552C11.4328 9.81726 11.1563 9.69855 10.8724 9.59999L10.6414 9.5328L9.67928 6.816C9.32354 6.79679 8.96704 6.79679 8.6113 6.816L7.64915 9.4752L7.40861 9.5424C7.07733 9.63422 6.75525 9.75634 6.44645 9.9072L6.23478 10.0128L3.69467 8.8224C3.42527 9.0624 3.17513 9.312 2.93459 9.5712L4.11802 12.0192L3.99294 12.24C3.80721 12.5727 3.6557 12.9233 3.54072 13.2864L3.46377 13.5168L0.914059 14.4096C0.904455 14.5887 0.904455 14.7681 0.914059 14.9472C0.904466 15.1231 0.904466 15.2993 0.914059 15.4752L3.4349 16.3584L3.50226 16.5984C3.61529 16.9883 3.77011 17.3649 3.96408 17.7216L4.07956 17.9328L2.93459 20.3136C3.17093 20.5798 3.42484 20.83 3.69467 21.0624L6.11932 19.92L6.3406 20.0352C6.69242 20.2217 7.06342 20.3698 7.4471 20.4768L7.67801 20.544L8.59204 23.0688C8.94763 23.0928 9.30446 23.0928 9.66005 23.0688L10.6222 20.4864L10.8435 20.4096C11.1783 20.3032 11.5009 20.1616 11.8057 19.9872L12.0269 19.872L13.0565 20.352L12.6427 21.216L12.0558 20.9472C11.8249 21.0528 11.594 21.1584 11.3535 21.2448L10.3913 23.9712H10.093C9.85249 23.9808 9.53497 24 9.20783 24ZM9.11161 17.9136C8.52402 17.9098 7.95075 17.7324 7.46416 17.4037C6.97758 17.075 6.59953 16.6098 6.37774 16.0669C6.15596 15.524 6.10038 14.9277 6.21804 14.3533C6.3357 13.7789 6.62131 13.2521 7.03882 12.8396C7.45632 12.427 7.98701 12.1471 8.56382 12.0353C9.14064 11.9235 9.73773 11.9847 10.2797 12.2113C10.8217 12.4378 11.2842 12.8195 11.6088 13.3082C11.9335 13.7968 12.1058 14.3705 12.1039 14.9568C12.0988 15.7428 11.7824 16.4948 11.2236 17.0487C10.6647 17.6027 9.90898 17.9136 9.12124 17.9136H9.11161ZM9.11161 12.9504C8.71431 12.9523 8.32649 13.0716 7.99707 13.2932C7.66764 13.5148 7.41138 13.8288 7.26065 14.1956C7.10992 14.5624 7.07148 14.9655 7.15016 15.3541C7.22883 15.7426 7.4211 16.0993 7.7027 16.3789C7.98431 16.6585 8.34264 16.8487 8.73245 16.9253C9.12226 17.002 9.5261 16.9617 9.89298 16.8095C10.2599 16.6574 10.5734 16.4002 10.7939 16.0705C11.0145 15.7407 11.1321 15.3532 11.1321 14.9568C11.1296 14.4254 10.9169 13.9166 10.5404 13.5408C10.1638 13.1651 9.65379 12.9529 9.12124 12.9504H9.11161Z" fill="white" />
      <path d="M21.3022 12.6048V6.95041L23.2265 8.87041L23.9096 8.19841L20.8211 5.088L17.7422 8.1312L18.4253 8.8032L20.3496 6.8832V12.0192C19.5687 11.6834 18.7273 11.5102 17.8769 11.5104C17.4077 11.5125 16.9401 11.564 16.4817 11.664V1.82401L18.4061 3.74401L19.0892 3.072L15.9429 0L12.864 3.0432L13.5472 3.71521L15.4715 1.79521V12.0096C14.1887 12.5332 13.1185 13.4701 12.4314 14.671C11.7443 15.872 11.4799 17.2679 11.6804 18.6362C11.8808 20.0045 12.5345 21.2665 13.5374 22.221C14.5402 23.1755 15.8344 23.7676 17.2137 23.903C18.593 24.0383 19.978 23.709 21.148 22.9677C22.318 22.2264 23.2055 21.1156 23.6693 19.8125C24.133 18.5093 24.1462 17.0888 23.7067 15.7773C23.2672 14.4658 22.4004 13.3388 21.2444 12.576L21.3022 12.6048ZM17.8672 22.9152C16.8398 22.9057 15.8382 22.5931 14.9886 22.0167C14.1389 21.4403 13.4793 20.6259 13.0926 19.6761C12.706 18.7263 12.6098 17.6836 12.8161 16.6793C13.0223 15.675 13.5218 14.7541 14.2516 14.0325C14.9815 13.311 15.909 12.8211 16.9174 12.6246C17.9258 12.428 18.97 12.5336 19.9183 12.9281C20.8666 13.3226 21.6767 13.9882 22.2466 14.8412C22.8165 15.6943 23.1206 16.6965 23.1206 17.7216C23.113 19.105 22.5555 20.4289 21.5706 21.4026C20.5857 22.3763 19.2538 22.9203 17.8672 22.9152Z" fill="#79ADFC" />
      <path d="M17.6075 15.888C17.6706 15.8131 17.7506 15.7541 17.8408 15.7157C17.9311 15.6774 18.0291 15.6608 18.127 15.6672C18.309 15.664 18.4863 15.7252 18.6273 15.84C18.769 15.9772 18.8547 16.1619 18.8679 16.3584L19.5991 16.0992C19.579 15.8536 19.4925 15.6181 19.349 15.4176C19.2101 15.2306 19.0287 15.0793 18.8198 14.976C18.6066 14.8636 18.3681 14.8074 18.127 14.8128C17.84 14.8062 17.5569 14.8794 17.3092 15.024C17.081 15.1655 16.8975 15.3685 16.78 15.6096C16.6555 15.8907 16.5932 16.1952 16.5972 16.5024V17.1456H15.991V17.7216H16.5972V19.2672H15.991V20.064H19.3971V19.2672H17.4727V17.7216H18.5985V17.1456H17.4727V16.5024C17.4472 16.2883 17.4947 16.0719 17.6075 15.888Z" fill="#79ADFC" />
    </svg>

  );
}

EconomicGrowthPictogram.defaultProps = {
  className: undefined,
};

EconomicGrowthPictogram.propTypes = {
  className: PropTypes.string,
};

export default EconomicGrowthPictogram;
export { EconomicGrowthPictogram };