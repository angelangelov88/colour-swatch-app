import React from 'react';
import PropTypes from 'prop-types';

function MoneyLineGraphV2Pictogram(props) {
  const { className } = props;

  return (
    <svg width="24" height="24" className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21.0767 16.7424L19.591 17.0688L19.3418 15.9072L20.1853 15.7248L20.0894 15.2832L19.2364 15.4656L19.131 14.976C19.0754 14.8175 19.0754 14.6449 19.131 14.4864C19.1663 14.4198 19.2169 14.3625 19.2785 14.3192C19.3401 14.2758 19.4111 14.2476 19.4856 14.2368C19.6212 14.2042 19.764 14.2212 19.8882 14.2848C20.0182 14.3661 20.1138 14.4926 20.1565 14.64L20.6645 14.3232C20.6089 14.1405 20.5025 13.9773 20.3578 13.8528C20.2243 13.73 20.0632 13.641 19.8882 13.5936C19.7081 13.5552 19.5219 13.5552 19.3418 13.5936C19.1241 13.6392 18.9223 13.7419 18.7572 13.8912C18.6093 14.0386 18.5063 14.2251 18.46 14.4288C18.4076 14.6562 18.4076 14.8926 18.46 15.12L18.5655 15.6096L18.1054 15.7056L18.2013 16.1472L18.6613 16.0512L18.9201 17.2128L18.46 17.3088L18.5942 17.9136L21.1629 17.3568L21.0767 16.7424Z" fill="#4456F6" />
      <path d="M22.1022 11.5296L20.3866 8.97601L15.9585 9.93601L15.4696 12.9024L17.3866 21.4176L24 19.9776L22.1022 11.5296ZM16.4473 12.8832L16.8115 10.7328L19.9553 10.0512L21.1725 11.8272L22.8115 19.248L18.0863 20.2752L16.4473 12.8832Z" fill="#4456F6" />
      <path d="M17.4441 23.04H0.987219V19.2L0.96806 0.979204L17.4441 0.96L17.4537 3.8592H0.987219V4.80959H17.4537V8.64L18.2607 12.2592L19.2 12L18.4217 8.57281L18.4121 0L0 0.0192041L0.0191588 19.2V24H18.4026L18.4313 22.08L17.4537 22.0704L17.4441 23.04Z" fill="#0C1457" />
      <path d="M2.44408 2.89919C2.70875 2.89919 2.92331 2.68428 2.92331 2.41919C2.92331 2.15409 2.70875 1.93919 2.44408 1.93919C2.1794 1.93919 1.96484 2.15409 1.96484 2.41919C1.96484 2.68428 2.1794 2.89919 2.44408 2.89919Z" fill="#0C1457" />
      <path d="M4.3802 2.89919C4.64487 2.89919 4.85943 2.68428 4.85943 2.41919C4.85943 2.15409 4.64487 1.93919 4.3802 1.93919C4.11552 1.93919 3.90096 2.15409 3.90096 2.41919C3.90096 2.68428 4.11552 2.89919 4.3802 2.89919Z" fill="#0C1457" />
      <path d="M6.31628 2.89919C6.58096 2.89919 6.79552 2.68428 6.79552 2.41919C6.79552 2.15409 6.58096 1.93919 6.31628 1.93919C6.05161 1.93919 5.83705 2.15409 5.83705 2.41919C5.83705 2.68428 6.05161 2.89919 6.31628 2.89919Z" fill="#0C1457" />
      <path d="M2.92331 6.72958V21.12H14.5399V20.16H4.33226L5.78914 17.28H6.75717L8.69329 13.4496H9.62301L13.639 7.4784L12.8339 6.94078L9.10543 12.4896H8.08946L6.16293 16.32H5.1949L3.89137 18.8928V6.72958H2.92331Z" fill="#0C1457" />
    </svg>

  );
}

MoneyLineGraphV2Pictogram.defaultProps = {
  className: undefined,
};

MoneyLineGraphV2Pictogram.propTypes = {
  className: PropTypes.string,
};

export default MoneyLineGraphV2Pictogram;
export { MoneyLineGraphV2Pictogram };
