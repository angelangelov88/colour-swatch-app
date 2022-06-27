import React from 'react';
import PropTypes from 'prop-types';

function ReloadPagePictogram(props) {
  const { className } = props;

  return (
    <svg width="24" height="24" className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.9612 19.8336V23.04H0.942287V4.8H16.9612V10.56H17.9035V0H0V24H17.9035V19.8336H16.9612ZM0.942287 0.96H16.9612V3.84H0.942287V0.96Z" fill="white" />
      <path d="M2.33685 2.90871C2.59706 2.90871 2.80799 2.69381 2.80799 2.42871C2.80799 2.16361 2.59706 1.94871 2.33685 1.94871C2.07665 1.94871 1.86571 2.16361 1.86571 2.42871C1.86571 2.69381 2.07665 2.90871 2.33685 2.90871Z" fill="white" />
      <path d="M4.22143 2.90871C4.48163 2.90871 4.69257 2.69381 4.69257 2.42871C4.69257 2.16361 4.48163 1.94871 4.22143 1.94871C3.96122 1.94871 3.75028 2.16361 3.75028 2.42871C3.75028 2.69381 3.96122 2.90871 4.22143 2.90871Z" fill="white" />
      <path d="M6.106 2.90871C6.36621 2.90871 6.57714 2.69381 6.57714 2.42871C6.57714 2.16361 6.36621 1.94871 6.106 1.94871C5.8458 1.94871 5.63486 2.16361 5.63486 2.42871C5.63486 2.69381 5.8458 2.90871 6.106 2.90871Z" fill="white" />
      <path d="M15.0577 6.74871H2.808V7.70871H15.0577V6.74871Z" fill="white" />
      <path d="M13.1732 8.66871H2.808V9.62871H13.1732V8.66871Z" fill="white" />
      <path d="M11.2954 10.5628H2.8148L2.81458 11.5228H11.2952L11.2954 10.5628Z" fill="white" />
      <path d="M10.3549 12.4856H2.81657L2.81635 13.4456H10.3547L10.3549 12.4856Z" fill="white" />
      <path d="M22.0118 14.5343C21.8306 13.4626 21.2976 12.4853 20.5 11.7625C19.7024 11.0397 18.6876 10.6143 17.6217 10.5559C16.5557 10.4975 15.502 10.8096 14.6329 11.4411C13.7639 12.0726 13.1311 12.986 12.8381 14.0318C12.5452 15.0776 12.6095 16.1937 13.0206 17.1973C13.4316 18.201 14.165 19.0327 15.1006 19.5562C16.0362 20.0797 17.1186 20.264 18.1705 20.079C19.2224 19.8939 20.1814 19.3504 20.8905 18.5375L20.2309 17.9135C19.6639 18.5633 18.8973 18.9979 18.0564 19.1461C17.2155 19.2943 16.3501 19.1474 15.6018 18.7295C14.8535 18.3115 14.2666 17.6472 13.937 16.8452C13.6075 16.0433 13.5548 15.1511 13.7876 14.3146C14.0205 13.4782 14.525 12.747 15.2187 12.2407C15.9124 11.7344 16.7543 11.4829 17.6065 11.5273C18.4588 11.5718 19.271 11.9096 19.9104 12.4855C20.5497 13.0613 20.9783 13.8412 21.126 14.6975C21.164 14.9097 21.1829 15.125 21.1826 15.3407C21.1826 15.3407 21.1826 15.4271 21.1826 15.4751L20.0424 14.0735L19.3168 14.6879L21.3993 17.2895L24 15.1967L23.4064 14.4575L22.0966 15.5423C22.1012 15.472 22.1012 15.4014 22.0966 15.3311C22.0976 15.064 22.0567 14.7974 22.0118 14.5343Z" fill="#79ADFC" />
    </svg>

  );
}

ReloadPagePictogram.defaultProps = {
  className: undefined,
};

ReloadPagePictogram.propTypes = {
  className: PropTypes.string,
};

export default ReloadPagePictogram;
export { ReloadPagePictogram };
