import React from 'react';
import PropTypes from 'prop-types';

function WetlinkPictogram(props) {
  const { className } = props;

  return (
    <svg width="24" height="24" className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_1328_445707)">
        <path d="M11.3376 20.7264C11.0687 20.7466 10.802 20.6651 10.5904 20.498C10.3788 20.3308 10.2378 20.0903 10.1952 19.824C10.1952 19.728 10.1952 19.6224 10.1952 19.5168C9.78205 19.5576 9.37377 19.6379 8.976 19.7568L8.2944 19.92C7.2768 20.1312 6.576 20.016 6.2112 19.5648C6.16409 19.5045 6.12234 19.4403 6.0864 19.3728C5.06084 19.7465 3.96969 19.9066 2.88 19.8432L2.9472 18.8832C3.97487 18.9218 4.99904 18.7418 5.952 18.3552L6.0096 18.0576C6.35935 16.7167 7.20739 15.5596 8.3808 14.8224C8.69833 14.614 9.05396 14.4704 9.4272 14.4C9.62955 14.3608 9.839 14.3827 10.0288 14.4631C10.2186 14.5435 10.3801 14.6786 10.4928 14.8512C10.6263 15.0988 10.6864 15.3794 10.666 15.66C10.6456 15.9406 10.5455 16.2095 10.3776 16.4352C9.83315 17.2419 9.09773 17.9014 8.2368 18.3552C7.824 18.5952 7.4016 18.8064 6.9792 18.9984C7.33373 19.0995 7.70947 19.0995 8.064 18.9984C8.2656 18.9984 8.4864 18.9024 8.6976 18.8448C9.15461 18.6983 9.62362 18.5923 10.0992 18.528C10.3613 18.4974 10.6258 18.5585 10.848 18.7008C10.9611 18.8058 11.0472 18.9366 11.099 19.082C11.1508 19.2274 11.1668 19.3831 11.1456 19.536C11.141 19.5903 11.141 19.6449 11.1456 19.6992C11.1456 19.7568 11.2992 19.776 11.424 19.7568C11.8262 19.6881 12.1961 19.4931 12.48 19.2L13.1712 19.8624C12.7274 20.3179 12.1482 20.6176 11.52 20.7168L11.3376 20.7264ZM9.6 15.36C9.3611 15.4117 9.13346 15.506 8.928 15.6384C8.08026 16.1588 7.42874 16.9454 7.0752 17.8752C7.3056 17.76 7.5264 17.6352 7.7472 17.5104C8.47843 17.1405 9.11295 16.6046 9.6 15.9456C9.792 15.6192 9.7536 15.3984 9.7248 15.3696L9.6 15.36Z" fill="#79ADFC" />
      </g>
      <path d="M9.51625 2.88H2.85487V3.84H9.51625V2.88Z" fill="white" />
      <path d="M9.51625 4.8H2.85487V5.76H9.51625V4.8Z" fill="white" />
      <path d="M9.51625 6.72H2.85487V7.68H9.51625V6.72Z" fill="white" />
      <path d="M15.226 8.64H2.85487V9.6H15.226V8.64Z" fill="white" />
      <path d="M15.226 10.56H2.85487V11.52H15.226V10.56Z" fill="white" />
      <path d="M24 10.56L21.6685 8.2848L20.9358 9.0528V2.88H12.3711V0H0V24H20.9358V13.7664L21.7542 12.912L22.1634 13.3056L21.4306 14.064L22.1158 14.736L23.5051 13.2864L22.4108 12.2208L24 10.56ZM21.6971 9.648L22.6487 10.608L21.6971 11.568L20.7454 10.608L21.6971 9.648ZM19.9841 3.84V10.0608L18.0809 12.048V5.76H12.3711V3.84H19.9841ZM0.951626 23.04V0.96H11.4195V6.72H17.1293V13.0848L13.8271 16.5312L13.456 19.2L16.1491 18.8064L17.1007 17.7888V23.088L0.951626 23.04ZM15.8731 15.7248L16.8247 16.6848L15.6542 17.8848L14.5408 18.048L14.7026 16.9248L15.8731 15.7248ZM19.9651 23.04H18.0618V16.7424L19.9651 14.736V23.04ZM17.4909 15.9648L16.5392 15.0048L18.0618 13.4112L20.0888 11.2896L21.0404 12.2496L17.4909 15.9648Z" fill="white" />
      <defs>
        <clipPath id="clip0_1328_445707">
          <rect width="10.2912" height="6.3264" fill="white" transform="translate(2.88 14.4)" />
        </clipPath>
      </defs>
    </svg>

  );
}

WetlinkPictogram.defaultProps = {
  className: undefined,
};

WetlinkPictogram.propTypes = {
  className: PropTypes.string,
};

export default WetlinkPictogram;
export { WetlinkPictogram };
