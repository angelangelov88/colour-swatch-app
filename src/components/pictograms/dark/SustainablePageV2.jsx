import React from 'react';
import PropTypes from 'prop-types';

function SustainablePageV2(props) {
  const { className } = props;

  return (
    <svg width="24" height="24" className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.6144 9.35039L12.4896 9.1488H12.2496C11.6043 9.10097 10.9581 9.22984 10.3805 9.52159C9.80293 9.81334 9.31573 10.2569 8.97127 10.8047C8.62681 11.3525 8.43809 11.9838 8.42539 12.6308C8.41268 13.2777 8.57648 13.9159 8.89918 14.4768L8.17918 15.7728L6.46078 10.2336C6.84176 9.80279 7.11245 9.28594 7.24957 8.72743C7.38669 8.16891 7.38614 7.58545 7.24798 7.0272C7.08967 6.37455 6.75243 5.77901 6.27418 5.30754C5.79592 4.83607 5.19562 4.50737 4.54078 4.3584L4.31038 4.31039L4.12798 4.464C3.61631 4.91521 3.24026 5.49988 3.0419 6.15261C2.84354 6.80534 2.83069 7.50039 3.00478 8.16C3.17182 8.78366 3.50747 9.34923 3.97489 9.79462C4.4423 10.24 5.02339 10.548 5.65438 10.6848L7.57438 17.0112V21.1296H8.53438V17.0688L9.73438 14.9184C10.3345 14.9148 10.9233 14.7554 11.4433 14.4559C11.9633 14.1563 12.3966 13.7269 12.7008 13.2096C13.0477 12.6223 13.2234 11.9496 13.2081 11.2677C13.1929 10.5857 12.9872 9.92162 12.6144 9.35039ZM3.91678 7.9296C3.7951 7.48539 3.79131 7.01713 3.90578 6.57101C4.02026 6.1249 4.24905 5.71634 4.56958 5.3856C5.01044 5.52096 5.40816 5.76943 5.72312 6.10629C6.03809 6.44315 6.25932 6.85665 6.36478 7.3056C6.51665 7.91699 6.43804 8.56289 6.14398 9.12L5.41438 6.7296L4.54078 6.9696L5.32798 9.54239C4.98738 9.3958 4.68388 9.1749 4.4397 8.89584C4.19553 8.61678 4.01686 8.28664 3.91678 7.9296ZM11.8848 12.7296C11.7113 13.0189 11.4819 13.2706 11.2099 13.4701C10.9379 13.6696 10.6288 13.8127 10.3008 13.8912L11.7216 11.3376L10.896 10.8672L9.46558 13.4208C9.36267 13.0887 9.33001 12.7388 9.36968 12.3934C9.40934 12.0479 9.52047 11.7145 9.69598 11.4144C9.91914 11.0162 10.2435 10.6839 10.6363 10.4513C11.0291 10.2187 11.4763 10.0939 11.9328 10.0896C12.1535 10.4963 12.2651 10.9533 12.2567 11.4159C12.2483 11.8786 12.1202 12.3312 11.8848 12.7296Z" fill="#79ADFC" />
      <path d="M24 21.12L20.9952 15.744L20.1696 16.224L22.3776 20.16H20.2752L20.8224 19.6512L20.1792 18.9408L18.3552 20.6592L20.1792 22.368L20.8224 21.6576L20.256 21.12H24Z" fill="white" />
      <path d="M13.7856 18.1632L14.1696 18.9792L15.024 18.5664L14.0352 16.4544L11.664 17.2224L11.9616 18.144L12.8832 17.8368L11.0496 21.12H17.0592L17.0496 23.04H0.950402V19.2V0.96H11.3568L11.376 6.72H17.0592V10.3008L14.3616 15.1296L15.1872 15.6L17.5008 11.4624L18.6912 13.6032L17.8368 13.4112L17.6448 14.352L20.0928 14.8896L20.8224 12.6816L19.92 12.3744L19.6128 13.3056L18.0096 10.4256V5.76H12.3168L12.3072 0H0V19.2V24H17.9904L18.0096 20.16H12.672L13.7856 18.1632Z" fill="white" />
    </svg>

  );
}

SustainablePageV2.defaultProps = {
  className: undefined,
};

SustainablePageV2.propTypes = {
  className: PropTypes.string,
};

export default SustainablePageV2;
export { SustainablePageV2 };
