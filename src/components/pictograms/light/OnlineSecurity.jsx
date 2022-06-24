import React from 'react';
import PropTypes from 'prop-types';

function OnlineSecurity(props) {
  const { className } = props;

  return (
    <svg width="24" height="24" className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M23.9997 20.9493L23.0401 17.3677V3.59131C23.0427 3.40348 22.9717 3.22216 22.8424 3.08665C22.7131 2.95113 22.5359 2.87232 22.3492 2.86726H16.323V3.88094H22.0805V16.9332H18.8275L19.2881 16.5953L13.5306 13.3902L14.2503 16.9332H1.92905V3.86163H7.68662V2.89622H1.65077C1.46325 2.90375 1.28608 2.98468 1.15702 3.12173C1.02795 3.25879 0.957207 3.44114 0.959858 3.62992V17.9662L0.000263198 21.0072V22.3588C-0.00355141 22.5705 0.0341316 22.781 0.111161 22.978C0.18819 23.1751 0.303057 23.355 0.449198 23.5074C0.59534 23.6598 0.769893 23.7817 0.962889 23.8663C1.15589 23.9508 1.36354 23.9962 1.574 24H22.426C22.6365 23.9962 22.8441 23.9508 23.0371 23.8663C23.2301 23.7817 23.4047 23.6598 23.5508 23.5074C23.6969 23.355 23.8118 23.1751 23.8888 22.978C23.9659 22.781 24.0035 22.5705 23.9997 22.3588V20.9879V20.9493ZM17.5033 16.7015L16.8124 17.2035L17.8391 18.6034L17.225 19.0571L16.1982 17.6573L15.5073 18.1593L14.922 15.2631L17.5033 16.7015ZM2.02501 17.9276H14.4997L14.8932 19.8584L16.0159 19.0282L17.0427 20.428L19.2305 18.8254L18.578 17.9276H22.2629L23.0689 20.9493H1.03663L2.02501 17.9276ZM23.1361 22.3202C23.1362 22.4859 23.0721 22.6451 22.9574 22.764C22.8428 22.883 22.6866 22.9523 22.522 22.9574H1.58359C1.50168 22.9561 1.42082 22.9386 1.34562 22.9059C1.27042 22.8732 1.20236 22.8259 1.14533 22.7668C1.0883 22.7076 1.04342 22.6377 1.01324 22.5611C0.983063 22.4844 0.968185 22.4026 0.969454 22.3202V21.9533H23.1361V22.3202Z" fill="#0C1457" />
      <path d="M15.3634 4.86564V3.37892C15.3634 2.48278 15.0095 1.62332 14.3797 0.989653C13.7498 0.355983 12.8956 0 12.0048 0C11.1141 0 10.2598 0.355983 9.62993 0.989653C9.00007 1.62332 8.64623 2.48278 8.64623 3.37892V4.86564H6.72704V12.9075H17.2826V4.86564H15.3634ZM9.60582 3.37892C9.60582 2.73882 9.85857 2.12492 10.3085 1.6723C10.7584 1.21968 11.3686 0.965406 12.0048 0.965406C12.6411 0.965406 13.2513 1.21968 13.7011 1.6723C14.151 2.12492 14.4038 2.73882 14.4038 3.37892V4.86564H9.60582V3.37892ZM16.323 11.9035H7.68663V5.86967H16.323V11.9035Z" fill="#4456F6" />
      <path d="M12.005 7.87772C11.942 7.87897 11.8798 7.8927 11.822 7.91812C11.7643 7.94355 11.7121 7.98017 11.6684 8.0259C11.6247 8.07162 11.5904 8.12554 11.5674 8.18459C11.5445 8.24365 11.5333 8.30668 11.5346 8.37007V9.3934C11.5333 9.45679 11.5445 9.51982 11.5674 9.57888C11.5904 9.63793 11.6247 9.69185 11.6684 9.73757C11.7121 9.78329 11.7643 9.81992 11.822 9.84534C11.8798 9.87077 11.942 9.8845 12.005 9.88575C12.0688 9.88576 12.1321 9.87297 12.1909 9.84811C12.2498 9.82325 12.3031 9.78683 12.3478 9.74097C12.3925 9.69512 12.4277 9.64077 12.4513 9.58108C12.4748 9.5214 12.4863 9.4576 12.485 9.3934V8.37007C12.4863 8.30587 12.4748 8.24207 12.4513 8.18238C12.4277 8.1227 12.3925 8.06834 12.3478 8.02249C12.3031 7.97664 12.2498 7.94022 12.1909 7.91536C12.1321 7.8905 12.0688 7.87771 12.005 7.87772Z" fill="#4456F6" />
    </svg>

  );
}

OnlineSecurity.defaultProps = {
  className: undefined,
};

OnlineSecurity.propTypes = {
  className: PropTypes.string,
};

export default OnlineSecurity;
export { OnlineSecurity };
