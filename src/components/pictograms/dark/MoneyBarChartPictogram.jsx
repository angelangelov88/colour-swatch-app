import React from 'react';
import PropTypes from 'prop-types';

function MoneyBarChartPictogram(props) {
  const { className } = props;

  return (
    <svg width="24" height="24" className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.87769 6.7392V21.1296H10.5803V20.1696H9.60191V8.6304H8.64268V20.1696H7.70263V11.7696H6.74339V20.1696H5.81294V14.8512H4.85371V20.1696H3.83692V6.7392H2.87769Z" fill="white" />
      <path d="M17.2949 21.7344L17.2854 23.04H0.968833V19.2096H0.978435L0.959231 0.979204L17.2758 0.96V3.84961H0.962255V4.80961H17.2758L17.2854 10.5504H18.2446L18.235 4.80961H18.2446V3.84961H18.235L18.2254 0L0 0.0192041L0.0192034 19.2H0.00960168V24H18.235L18.2542 21.744L17.2949 21.7344Z" fill="white" />
      <path d="M2.40787 2.88961C2.67286 2.88961 2.88768 2.67471 2.88768 2.40961C2.88768 2.14451 2.67286 1.92961 2.40787 1.92961C2.14288 1.92961 1.92807 2.14451 1.92807 2.40961C1.92807 2.67471 2.14288 2.88961 2.40787 2.88961Z" fill="white" />
      <path d="M4.32633 2.88961C4.59133 2.88961 4.80614 2.67471 4.80614 2.40961C4.80614 2.14451 4.59133 1.92961 4.32633 1.92961C4.06134 1.92961 3.84653 2.14451 3.84653 2.40961C3.84653 2.67471 4.06134 2.88961 4.32633 2.88961Z" fill="white" />
      <path d="M6.2448 2.88961C6.50979 2.88961 6.72461 2.67471 6.72461 2.40961C6.72461 2.14451 6.50979 1.92961 6.2448 1.92961C5.97981 1.92961 5.76499 2.14451 5.76499 2.40961C5.76499 2.67471 5.97981 2.88961 6.2448 2.88961Z" fill="white" />
      <path d="M17.7458 9.59998C16.5126 9.60188 15.3077 9.9697 14.2834 10.6569C13.2591 11.3442 12.4615 12.32 11.9913 13.4609C11.5212 14.6018 11.3996 15.8567 11.6421 17.0667C11.8845 18.2768 12.48 19.3878 13.3534 20.2591C14.2267 21.1304 15.3386 21.723 16.5484 21.9619C17.7582 22.2008 19.0117 22.0753 20.1503 21.6013C21.2888 21.1273 22.2614 20.326 22.9449 19.2987C23.6284 18.2715 23.9923 17.0645 23.9904 15.8304C23.9891 15.0109 23.8266 14.1998 23.5121 13.4432C23.1976 12.6866 22.7373 11.9994 22.1574 11.4208C21.5775 10.8423 20.8895 10.3837 20.1325 10.0713C19.3756 9.75887 18.5646 9.59872 17.7458 9.59998ZM17.7458 21.12C16.7027 21.1181 15.6837 20.8068 14.8173 20.2255C13.951 19.6441 13.2763 18.8189 12.8784 17.8539C12.4806 16.8889 12.3775 15.8276 12.5822 14.804C12.7868 13.7804 13.29 12.8405 14.0282 12.1031C14.7664 11.3656 15.7065 10.8637 16.7296 10.6607C17.7528 10.4578 18.8131 10.5629 19.7765 10.9628C20.74 11.3627 21.5634 12.0395 22.1427 12.9076C22.722 13.7757 23.0311 14.7961 23.0312 15.84C23.0299 16.5334 22.8922 17.2197 22.6259 17.8598C22.3596 18.4999 21.9699 19.0813 21.4791 19.5707C20.9883 20.0601 20.406 20.448 19.7655 20.7121C19.1249 20.9763 18.4457 21.1213 17.7529 21.12L17.7458 21.12Z" fill="#79ADFC" />
      <path d="M17.5635 14.016C17.6324 13.9369 17.7181 13.8742 17.8144 13.8327C17.9107 13.7911 18.0151 13.7718 18.1199 13.776C18.3132 13.7738 18.5007 13.842 18.6475 13.968C18.7978 14.1214 18.8924 14.3208 18.916 14.5344L19.693 14.256C19.6743 13.9893 19.5812 13.7332 19.4244 13.5168C19.1775 13.1901 18.8193 12.9657 18.4179 12.886C18.0164 12.8064 17.5997 12.8771 17.247 13.0848C16.9967 13.2358 16.799 13.4604 16.681 13.728C16.5392 14.0276 16.4702 14.3566 16.4796 14.688V15.3888H15.8273V16.0224H16.4796V17.6832H15.8273V18.5472H19.482V17.6832H17.3717V16.0224H18.5707V15.3888H17.3717V14.688C17.3583 14.4488 17.4259 14.212 17.5635 14.016Z" fill="#79ADFC" />
    </svg>

  );
}

MoneyBarChartPictogram.defaultProps = {
  className: undefined,
};

MoneyBarChartPictogram.propTypes = {
  className: PropTypes.string,
};

export default MoneyBarChartPictogram;
export { MoneyBarChartPictogram };