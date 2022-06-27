import React from 'react';
import PropTypes from 'prop-types';

function SettingsAlt2Pictogram(props) {
  const { className } = props;

  return (
    <svg width="24" height="24" className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 0V20.1681H3.83846V19.2077H0.959616V4.80192H3.8647L3.84971 3.84154H0.959616V0.960385H19.1923V3.84154H20.1519V0H0Z" fill="#79ADFC" />
      <path d="M6.2375 6.72269C6.50249 6.72269 6.71731 6.5077 6.71731 6.2425C6.71731 5.9773 6.50249 5.76231 6.2375 5.76231C5.97251 5.76231 5.75769 5.9773 5.75769 6.2425C5.75769 6.5077 5.97251 6.72269 6.2375 6.72269Z" fill="white" />
      <path d="M8.15675 6.72269C8.42174 6.72269 8.63656 6.5077 8.63656 6.2425C8.63656 5.9773 8.42174 5.76231 8.15675 5.76231C7.89176 5.76231 7.67694 5.9773 7.67694 6.2425C7.67694 6.5077 7.89176 6.72269 8.15675 6.72269Z" fill="white" />
      <path d="M10.076 6.72269C10.341 6.72269 10.5558 6.5077 10.5558 6.2425C10.5558 5.9773 10.341 5.76231 10.076 5.76231C9.81098 5.76231 9.59616 5.9773 9.59616 6.2425C9.59616 6.5077 9.81098 6.72269 10.076 6.72269Z" fill="white" />
      <path d="M9.59615 9.60384H5.75769V10.5642H9.59615V9.60384Z" fill="white" />
      <path d="M7.67692 11.5246H5.75769V12.485H7.67692V11.5246Z" fill="white" />
      <path d="M22.0624 22.0695L22.0708 21.1667L18.2418 21.1383L18.2428 22.0509L22.0624 22.0695Z" fill="white" />
      <path d="M22.1043 19.1777H20.185V20.1381H22.1043V19.1777Z" fill="white" />
      <path d="M3.84808 3.83192V24H24V3.83192H3.84808ZM23.0404 23.0396H4.8077V8.63385H23.0404V23.0396ZM23.0404 7.67346H4.8077V4.79231H23.0404V7.67346Z" fill="white" />
      <path d="M2.39903 2.88115C2.66402 2.88115 2.87884 2.66616 2.87884 2.40096C2.87884 2.13576 2.66402 1.92077 2.39903 1.92077C2.13404 1.92077 1.91922 2.13576 1.91922 2.40096C1.91922 2.66616 2.13404 2.88115 2.39903 2.88115Z" fill="#79ADFC" />
      <path d="M4.31828 2.88115C4.58327 2.88115 4.79809 2.66616 4.79809 2.40096C4.79809 2.13576 4.58327 1.92077 4.31828 1.92077C4.05329 1.92077 3.83847 2.13576 3.83847 2.40096C3.83847 2.66616 4.05329 2.88115 4.31828 2.88115Z" fill="#79ADFC" />
      <path d="M6.2375 2.88115C6.50249 2.88115 6.71731 2.66616 6.71731 2.40096C6.71731 2.13576 6.50249 1.92077 6.2375 1.92077C5.97251 1.92077 5.75769 2.13576 5.75769 2.40096C5.75769 2.66616 5.97251 2.88115 6.2375 2.88115Z" fill="#79ADFC" />
      <path d="M13.8857 21.5318C13.6939 21.5419 13.5017 21.5419 13.3099 21.5318H13.0028L12.427 19.9088C12.3086 19.869 12.1932 19.8209 12.0816 19.7647L10.5366 20.5042L10.2967 20.3121C9.99674 20.0696 9.72335 19.796 9.48102 19.4958L9.28908 19.2557L10.0184 17.7287C9.96083 17.6038 9.91284 17.479 9.86486 17.3541L8.26229 16.7875V16.4802C8.25225 16.2883 8.25225 16.0959 8.26229 15.904C8.26229 15.7119 8.26229 15.5198 8.26229 15.3277V15.03L9.89365 14.4442C9.94163 14.3385 9.98001 14.2329 10.0376 14.1273L9.28908 12.5522L9.48102 12.3217C9.7232 12.0185 9.99658 11.7417 10.2967 11.4958L10.5366 11.3037L12.1583 12.0816L12.3982 11.9856L13.0028 10.2857H13.3099C13.6932 10.2569 14.0781 10.2569 14.4614 10.2857H14.7589L15.3827 12.0336L15.5554 12.1104L17.2347 11.3037L17.465 11.4958C17.7659 11.744 18.0422 12.0206 18.2903 12.3217L18.4726 12.5522L17.6665 14.2521C17.6929 14.2982 17.7153 14.3464 17.7337 14.3962L19.4994 15.03V15.3277C19.4994 15.5198 19.4994 15.7119 19.4994 15.904C19.5096 16.0959 19.5096 16.2883 19.4994 16.4802V16.7875L17.7625 17.4022C17.7625 17.4694 17.7145 17.5366 17.6857 17.5942L18.4726 19.2557L18.2903 19.4958C18.0421 19.7938 17.7657 20.0672 17.465 20.3121L17.2347 20.5042L15.6226 19.7359L15.3539 19.8608L14.7589 21.5318H14.4614H13.8857ZM13.7033 20.5714H14.068L14.6054 19.0444L14.8357 18.9676C15.0245 18.9033 15.2075 18.823 15.3827 18.7275L15.6034 18.6123L17.0908 19.3133C17.1819 19.2318 17.2683 19.1452 17.3499 19.054L16.6206 17.5366L16.7261 17.3253C16.8056 17.1686 16.8699 17.0046 16.918 16.8355L16.9948 16.6051L18.5974 16.0288C18.5974 15.9712 18.5974 15.9136 18.5974 15.8463C18.5974 15.7791 18.5974 15.7311 18.5974 15.6639L16.9756 15.0876L16.8988 14.8668C16.848 14.7093 16.7871 14.5553 16.7165 14.4058L16.6014 14.2041L17.3499 12.6387L17.0908 12.3794L15.5362 13.1189L15.3251 13.0132C15.1766 12.9282 15.0188 12.8605 14.8548 12.8115L14.6342 12.7347L14.068 11.1309H13.7033L13.1372 12.7059L12.9068 12.7731C12.7219 12.8277 12.542 12.8984 12.3694 12.9844L12.1583 13.09L10.6805 12.3794L10.4214 12.6387L11.1123 14.0888L10.9876 14.3097C10.8801 14.4983 10.7932 14.6979 10.7285 14.9052L10.6613 15.1357L9.16433 15.6639V16.0288L10.6421 16.557L10.7093 16.7875C10.774 17.0101 10.8608 17.2257 10.9684 17.431L11.0932 17.6423L10.4214 19.054C10.4979 19.1498 10.5848 19.2368 10.6805 19.3133L12.0912 18.6411L12.3119 18.7563C12.5106 18.8609 12.7196 18.9445 12.9356 19.006L13.1659 19.0732L13.7033 20.5714ZM13.8185 17.8632C13.4275 17.8632 13.0453 17.7471 12.7202 17.5297C12.3951 17.3123 12.1418 17.0034 11.9921 16.6419C11.8425 16.2804 11.8034 15.8826 11.8796 15.4988C11.9559 15.115 12.1442 14.7625 12.4207 14.4858C12.6971 14.2091 13.0494 14.0207 13.4328 13.9444C13.8163 13.868 14.2138 13.9072 14.575 14.057C14.9362 14.2067 15.2449 14.4603 15.4621 14.7856C15.6793 15.111 15.7953 15.4935 15.7953 15.8848C15.7953 16.1446 15.7442 16.4018 15.6448 16.6419C15.5455 16.8819 15.3998 17.1 15.2163 17.2837C15.0327 17.4674 14.8148 17.6131 14.575 17.7126C14.3351 17.812 14.0781 17.8632 13.8185 17.8632ZM13.8185 14.8668C13.6173 14.8668 13.4206 14.9265 13.2534 15.0383C13.0861 15.1502 12.9557 15.3092 12.8787 15.4952C12.8017 15.6812 12.7816 15.8859 12.8208 16.0834C12.8601 16.2808 12.9569 16.4622 13.0992 16.6046C13.2415 16.747 13.4227 16.8439 13.62 16.8832C13.8174 16.9225 14.0219 16.9023 14.2077 16.8253C14.3936 16.7482 14.5525 16.6177 14.6642 16.4503C14.776 16.2829 14.8357 16.0861 14.8357 15.8848C14.8357 15.7511 14.8094 15.6187 14.7582 15.4952C14.7071 15.3717 14.6322 15.2594 14.5377 15.1649C14.4433 15.0704 14.3311 14.9954 14.2077 14.9442C14.0843 14.8931 13.9521 14.8668 13.8185 14.8668Z" fill="white" />
    </svg>

  );
}

SettingsAlt2Pictogram.defaultProps = {
  className: undefined,
};

SettingsAlt2Pictogram.propTypes = {
  className: PropTypes.string,
};

export default SettingsAlt2Pictogram;
export { SettingsAlt2Pictogram };
