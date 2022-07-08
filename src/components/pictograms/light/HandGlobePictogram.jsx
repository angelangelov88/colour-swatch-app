import React from 'react';
import PropTypes from 'prop-types';

function HandGlobePictogram(props) {
  const { className } = props;

  return (
    <svg width="24" height="24" className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.37419 20.1355C2.63963 20.1355 2.8548 19.9206 2.8548 19.6555C2.8548 19.3904 2.63963 19.1755 2.37419 19.1755C2.10876 19.1755 1.89359 19.3904 1.89359 19.6555C1.89359 19.9206 2.10876 20.1355 2.37419 20.1355Z" fill="#0C1457" />
      <path d="M23.819 16.7198C23.7089 16.4535 23.5456 16.2123 23.339 16.0111C23.1324 15.8099 22.8869 15.6528 22.6174 15.5495C22.3467 15.4355 22.0558 15.3768 21.762 15.3768C21.4681 15.3768 21.1772 15.4355 20.9065 15.5495L17.3019 17.2569C17.3019 16.7481 17.0994 16.2601 16.7388 15.9004C16.3783 15.5406 15.8893 15.3384 15.3795 15.3384H11.8038L9.69868 14.0243C9.12688 13.6503 8.45985 13.4473 7.77625 13.4391H4.80609V12.4799H0V22.0724H4.80609V21.1131H5.48856L9.468 23.2811C10.0893 23.6892 10.8046 23.9324 11.5463 23.9878C12.2881 24.0432 13.0317 23.9089 13.707 23.5976L22.6559 19.6071C22.9234 19.4952 23.166 19.3314 23.3695 19.1252C23.5731 18.919 23.7337 18.6745 23.8419 18.4059C23.95 18.1373 24.0037 17.85 23.9998 17.5605C23.9959 17.2711 23.9344 16.9853 23.819 16.7198ZM0.932382 21.0939V13.4199H3.81603V20.1347V21.0939H0.932382ZM22.2522 18.7054L13.3225 22.7055C12.7904 22.9513 12.2038 23.0557 11.6194 23.0086C11.035 22.9616 10.4727 22.7646 9.98705 22.4369L5.7577 20.1347H4.79648V14.3792H7.76664C8.27049 14.3868 8.76132 14.5401 9.17963 14.8204L11.5346 16.2881H15.3795C15.6344 16.2881 15.8789 16.3892 16.0592 16.5691C16.2394 16.7489 16.3407 16.9929 16.3407 17.2473C16.3407 17.5018 16.2394 17.7457 16.0592 17.9256C15.8789 18.1055 15.6344 18.2066 15.3795 18.2066H10.5734V19.1659H15.3795C15.8885 19.1637 16.3759 18.9602 16.7348 18.5999L21.3006 16.4991C21.4527 16.4353 21.6161 16.4024 21.7812 16.4024C21.9463 16.4024 22.1096 16.4353 22.2618 16.4991C22.4126 16.5563 22.5501 16.6437 22.6658 16.7558C22.7815 16.868 22.873 17.0026 22.9347 17.1514C23.0431 17.4483 23.0328 17.7755 22.9056 18.065C22.7785 18.3544 22.5445 18.5838 22.2522 18.7054Z" fill="#0C1457" />
      <path d="M14.9181 0C13.4931 0.00379226 12.1012 0.42895 10.9182 1.22178C9.73516 2.01461 8.81414 3.13956 8.27145 4.45449C7.72875 5.76942 7.58872 7.21537 7.86906 8.60968C8.14939 10.004 8.8375 11.2841 9.84648 12.2883C10.8555 13.2926 12.14 13.9759 13.5379 14.2519C14.9359 14.528 16.3844 14.3844 17.7006 13.8393C19.0167 13.2942 20.1415 12.3721 20.9328 11.1894C21.7241 10.0067 22.1464 8.61649 22.1464 7.19439C22.1414 5.28456 21.3776 3.45468 20.0225 2.10602C18.6675 0.757358 16.8319 -6.75444e-06 14.9181 0ZM20.2721 3.97131L18.4842 4.68114C18.2947 4.75699 18.0924 4.79607 17.8883 4.79626H17.0232C16.9147 4.79613 16.8084 4.76545 16.7166 4.70775C16.6248 4.65006 16.5511 4.5677 16.5041 4.47012L16.0716 3.62597C15.9584 3.39991 15.7841 3.20999 15.5683 3.07774C15.3526 2.9455 15.104 2.87622 14.8508 2.87776H14.0626C13.968 2.87606 13.8759 2.84708 13.7975 2.79431C13.719 2.74155 13.6575 2.66725 13.6204 2.58039L12.8515 1.31417C13.5147 1.07777 14.2139 0.957698 14.9181 0.959253C15.9948 0.959227 17.0533 1.23644 17.9912 1.7641C18.9291 2.29175 19.7147 3.05199 20.2721 3.97131ZM8.65095 7.19439C8.65048 6.29313 8.84732 5.40265 9.22769 4.58523L11.8037 5.69796L12.765 6.17759C12.9094 6.24977 13.0196 6.37573 13.0717 6.52828C13.1239 6.68083 13.1138 6.84773 13.0437 6.99295L12.6977 7.67402C12.5751 7.9146 12.5125 8.18113 12.5151 8.45101V10.3695C12.5131 10.7263 12.4379 11.0789 12.294 11.4055L11.7845 12.5566C10.8371 12.0153 10.049 11.2349 9.499 10.2938C8.94903 9.35268 8.65658 8.28385 8.65095 7.19439ZM14.9565 13.4775C14.1772 13.4732 13.3667 13.279 12.64 12.9979L13.1687 11.8084C13.3673 11.3615 13.4689 10.8776 13.4666 10.3887V8.4702C13.4668 8.34671 13.4965 8.22504 13.5532 8.11527L13.8896 7.4438C13.9835 7.25948 14.0399 7.05839 14.0555 6.85218C14.071 6.64597 14.0454 6.43872 13.9802 6.24245C13.9149 6.04617 13.8113 5.86477 13.6753 5.70874C13.5393 5.5527 13.3736 5.42515 13.1879 5.33344L12.2267 4.85382L9.7083 3.76027C10.2833 2.90584 11.0587 2.20445 11.9672 1.71706L12.7842 3.06002C12.9028 3.29964 13.0864 3.50125 13.3141 3.64199C13.5417 3.78272 13.8044 3.85694 14.0722 3.8562H14.8604C14.9337 3.85388 15.0061 3.87251 15.0691 3.9099C15.1321 3.94729 15.1831 4.00187 15.2161 4.06722L15.6486 4.92096C15.7753 5.17891 15.9725 5.3959 16.2174 5.54694C16.4623 5.69798 16.7449 5.77694 17.0328 5.7747H17.8979C18.2277 5.77322 18.5541 5.70806 18.8591 5.58284L20.7238 4.84423C21.1195 5.79175 21.2745 6.82207 21.1753 7.84377C21.0761 8.86546 20.7257 9.84691 20.1551 10.701C19.5846 11.5551 18.8115 12.2554 17.9047 12.7397C16.9978 13.2241 15.9851 13.4775 14.9565 13.4775Z" fill="#4456F6" />
      <path d="M19.532 8.28792L18.3977 7.06008C18.2582 6.90525 18.0779 6.79259 17.8774 6.73493C17.6769 6.67728 17.4642 6.67694 17.2635 6.73394L16.5906 6.90659C16.3387 6.97587 16.1179 7.12842 15.9642 7.33928C15.8106 7.55014 15.7332 7.80682 15.7448 8.0673L15.8024 9.02655C15.8071 9.04974 15.8051 9.07378 15.7965 9.09586C15.788 9.11794 15.7734 9.13715 15.7544 9.15124L14.9277 10.0146C14.7591 10.1866 14.6504 10.408 14.6175 10.6464C14.5846 10.8847 14.6293 11.1273 14.7451 11.3383L15.0046 11.818C15.0987 11.9924 15.237 12.1391 15.4056 12.2434C15.5743 12.3478 15.7675 12.4062 15.9658 12.4127C16.0647 12.4267 16.165 12.4267 16.2638 12.4127L17.4846 12.0866C17.7247 12.021 17.9371 11.8797 18.0901 11.6837L19.5608 9.76516C19.7341 9.55631 19.8265 9.29232 19.8212 9.02121C19.8159 8.75009 19.7133 8.48988 19.532 8.28792ZM18.8303 9.16084L17.3692 11.0793C17.3433 11.1072 17.3099 11.1272 17.2731 11.1369L16.0523 11.463C16.014 11.4762 15.972 11.4747 15.9347 11.4588C15.8974 11.4428 15.8674 11.4136 15.8505 11.3767L15.591 10.8971C15.5698 10.8677 15.5585 10.8325 15.5585 10.7964C15.5585 10.7602 15.5698 10.725 15.591 10.6956L16.4176 9.84191C16.5268 9.72927 16.6114 9.59523 16.666 9.44827C16.7206 9.30131 16.744 9.14464 16.7348 8.98817L16.6867 8.02892C16.6834 7.98997 16.6941 7.95111 16.7171 7.91942C16.74 7.88773 16.7736 7.86531 16.8117 7.85626L17.4846 7.674C17.5159 7.66762 17.5484 7.66958 17.5788 7.67968C17.6091 7.68978 17.6363 7.70767 17.6576 7.73155L18.7918 8.95939C18.8204 8.98351 18.8397 9.01667 18.8467 9.05334C18.8537 9.09 18.8479 9.12795 18.8303 9.16084Z" fill="#4456F6" />
    </svg>

  );
}

HandGlobePictogram.defaultProps = {
  className: undefined,
};

HandGlobePictogram.propTypes = {
  className: PropTypes.string,
};

export default HandGlobePictogram;
export { HandGlobePictogram };