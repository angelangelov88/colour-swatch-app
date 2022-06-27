import React from 'react';
import PropTypes from 'prop-types';

function TimePictogram(props) {
  const { className } = props;

  return (
    <svg width="24" height="24" className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.2601 14.9892L12.5241 12.2447V7.6481H11.5641V12.6477L14.5881 15.6609L15.2601 14.9892Z" fill="#4456F6" />
      <path d="M11.9961 0.00959454C9.67004 -0.00313583 7.39101 0.663955 5.43926 1.92883L2.86646 0V4.2415C2.65526 4.491 2.44406 4.7405 2.25206 5.00919C0.681685 7.19566 -0.107382 9.84655 0.0117577 12.5355C0.130897 15.2245 1.15132 17.7953 2.90892 19.8344C4.66651 21.8736 7.05914 23.2625 9.70199 23.778C12.3448 24.2934 15.0843 23.9054 17.4799 22.6762C19.8754 21.4471 21.7877 19.4483 22.9094 17.0013C24.031 14.5544 24.2967 11.8014 23.6638 9.1852C23.0308 6.56901 21.536 4.24163 19.4197 2.57738C17.3035 0.913122 14.6887 0.00870997 11.9961 0.00959454ZM11.9961 23.0404C9.06885 23.0378 6.26225 21.8743 4.1924 19.8053C2.12256 17.7363 0.958603 14.9308 0.956061 12.0048C0.951661 9.7915 1.62134 7.6293 2.87606 5.80567V9.19311L4.52726 8.70371C3.81383 10.2903 3.62647 12.0632 3.99255 13.7638C4.35863 15.4643 5.25897 17.0033 6.5621 18.1561C7.86524 19.3089 9.50292 20.0151 11.236 20.1715C12.9691 20.328 14.7069 19.9265 16.1955 19.0257C17.6842 18.125 18.8458 16.7721 19.5107 15.1646C20.1757 13.5571 20.3091 11.7793 19.8916 10.0907C19.474 8.40201 18.5274 6.89102 17.1898 5.77831C15.8523 4.66559 14.1939 4.00943 12.4569 3.90563C11.2392 3.83532 10.0214 4.04202 8.89525 4.51019L8.38646 4.7309L7.98326 4.90363L9.50006 6.21831L3.87446 7.86884V2.01519L5.42966 3.15713L5.57366 3.05158C6.98675 2.03373 8.62072 1.36453 10.342 1.09867C12.0634 0.832815 13.8232 0.977841 15.4777 1.5219C17.1322 2.06595 18.6345 2.9936 19.8617 4.22904C21.089 5.46448 22.0064 6.97264 22.539 8.63029C23.0716 10.2879 23.2043 12.048 22.9262 13.7668C22.6481 15.4855 21.9672 17.114 20.939 18.5194C19.9108 19.9247 18.5646 21.0669 17.0103 21.8526C15.456 22.6384 13.7378 23.0454 11.9961 23.0404ZM4.81526 11.5442C4.89479 10.3951 5.26256 9.31916 5.85206 8.32946L11.7465 6.60215L9.82645 5.16273C10.6648 4.88831 11.5474 4.77437 12.4281 4.82686C13.8512 4.91158 15.2172 5.41673 16.3529 6.2783C17.4885 7.13987 18.3427 8.31908 18.8072 9.66645C19.2717 11.0138 19.3256 12.4687 18.962 13.8467C18.5984 15.2247 17.8337 16.4638 16.7649 17.4069C15.696 18.35 14.3711 18.9547 12.9581 19.1444C11.5451 19.334 10.1075 19.1 8.82769 18.4721C7.54784 17.8442 6.4833 16.8506 5.76899 15.6172C5.05467 14.3839 4.72273 12.9663 4.81526 11.5442Z" fill="#0C1457" />
    </svg>

  );
}

TimePictogram.defaultProps = {
  className: undefined,
};

TimePictogram.propTypes = {
  className: PropTypes.string,
};

export default TimePictogram;
export { TimePictogram };
