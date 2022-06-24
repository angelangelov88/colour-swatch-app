import React from 'react';
import PropTypes from 'prop-types';

function MoneyLineGraphV2(props) {
  const { className } = props;

  return (
    <svg width="24" height="24" className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21.043 16.7424L19.5598 17.0688L19.3109 15.9072L20.153 15.7248L20.0573 15.2832L19.2057 15.4656L19.1004 14.976C19.045 14.8175 19.045 14.6449 19.1004 14.4864C19.1357 14.4198 19.1862 14.3625 19.2477 14.3192C19.3092 14.2758 19.3801 14.2476 19.4545 14.2368C19.5899 14.2042 19.7324 14.2212 19.8564 14.2848C19.9862 14.3661 20.0816 14.4926 20.1243 14.64L20.6315 14.3232C20.5759 14.1405 20.4697 13.9773 20.3253 13.8528C20.192 13.73 20.0311 13.641 19.8564 13.5936C19.6766 13.5552 19.4907 13.5552 19.3109 13.5936C19.0935 13.6392 18.8921 13.7419 18.7272 13.8912C18.5796 14.0386 18.4767 14.2251 18.4305 14.4288C18.3782 14.6562 18.3782 14.8926 18.4305 15.12L18.5358 15.6096L18.0765 15.7056L18.1722 16.1472L18.6315 16.0512L18.8899 17.2128L18.4305 17.3088L18.5645 17.9136L21.1291 17.3568L21.043 16.7424Z" fill="#79ADFC" />
      <path d="M22.0669 11.5296L20.354 8.97601L15.933 9.93601L15.4449 12.9024L17.3588 21.4176L23.9617 19.9776L22.0669 11.5296ZM16.421 12.8832L16.7846 10.7328L19.9234 10.0512L21.1387 11.8272L22.775 19.248L18.0574 20.2752L16.421 12.8832Z" fill="#79ADFC" />
      <path d="M17.4162 23.04H0.985642V19.2L0.966514 0.979204L17.4162 0.96L17.4258 3.8592H0.985642V4.80959H17.4258V8.64L18.2315 12.2592L19.1693 12L18.3923 8.57281L18.3827 0L0 0.0192041L0.0191282 19.2V24H18.3732L18.4019 22.08L17.4258 22.0704L17.4162 23.04Z" fill="white" />
      <path d="M2.44018 2.89919C2.70443 2.89919 2.91864 2.68429 2.91864 2.41919C2.91864 2.1541 2.70443 1.93919 2.44018 1.93919C2.17593 1.93919 1.96171 2.1541 1.96171 2.41919C1.96171 2.68429 2.17593 2.89919 2.44018 2.89919Z" fill="white" />
      <path d="M4.3732 2.89919C4.63745 2.89919 4.85166 2.68429 4.85166 2.41919C4.85166 2.1541 4.63745 1.93919 4.3732 1.93919C4.10895 1.93919 3.89473 2.1541 3.89473 2.41919C3.89473 2.68429 4.10895 2.89919 4.3732 2.89919Z" fill="white" />
      <path d="M6.3062 2.89919C6.57045 2.89919 6.78466 2.68429 6.78466 2.41919C6.78466 2.1541 6.57045 1.93919 6.3062 1.93919C6.04195 1.93919 5.82773 2.1541 5.82773 2.41919C5.82773 2.68429 6.04195 2.89919 6.3062 2.89919Z" fill="white" />
      <path d="M2.91864 6.72958V21.12H14.5167V20.16H4.32534L5.77989 17.28H6.74638L8.67941 13.4496H9.60763L13.6172 7.4784L12.8134 6.94078L9.09088 12.4896H8.07653L6.15308 16.32H5.1866L3.88515 18.8928V6.72958H2.91864Z" fill="white" />
    </svg>

  );
}

MoneyLineGraphV2.defaultProps = {
  className: undefined,
};

MoneyLineGraphV2.propTypes = {
  className: PropTypes.string,
};

export default MoneyLineGraphV2;
export { MoneyLineGraphV2 };
