import React from 'react';
import PropTypes from 'prop-types';

function UploadDocumentFailedPictogram(props) {
  const { className } = props;

  return (
    <svg width="25" height="24" className={className} viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.64156 2.88H2.91348V3.84H9.64156V2.88Z" fill="#0C1457" />
      <path d="M9.64156 4.8H2.91348V5.76H9.64156V4.8Z" fill="#0C1457" />
      <path d="M9.64156 6.72H2.91348V7.68H9.64156V6.72Z" fill="#0C1457" />
      <path d="M2.92224 8.64117L2.92123 9.60117L11.5716 9.61022L11.5726 8.65022L2.92224 8.64117Z" fill="#0C1457" />
      <path d="M17.3404 21.5904L17.3308 23.04H0.991184V19.2V0.96H11.5447L11.5639 6.72H17.3308V10.08H18.292V5.76H12.525L12.5058 0H0.0300293V19.2V24H18.2823L18.3016 21.6L17.3404 21.5904Z" fill="#0C1457" />
      <path d="M17.7825 22.0704C16.5469 22.0704 15.339 21.7044 14.3116 21.0188C13.2842 20.3331 12.4835 19.3585 12.0106 18.2183C11.5377 17.0781 11.414 15.8235 11.6551 14.613C11.8961 13.4026 12.4912 12.2907 13.3649 11.4181C14.2386 10.5454 15.3518 9.95106 16.5637 9.71029C17.7756 9.46952 19.0318 9.59309 20.1734 10.0654C21.315 10.5377 22.2907 11.3375 22.9771 12.3636C23.6636 13.3898 24.03 14.5962 24.03 15.8304C24.0275 17.4846 23.3685 19.0703 22.1974 20.2399C21.0263 21.4096 19.4387 22.0679 17.7825 22.0704ZM17.7825 10.5504C16.737 10.5504 15.7149 10.8601 14.8456 11.4402C13.9763 12.0204 13.2987 12.845 12.8986 13.8098C12.4985 14.7746 12.3938 15.8363 12.5978 16.8605C12.8017 17.8847 13.3052 18.8255 14.0445 19.5639C14.7838 20.3023 15.7258 20.8052 16.7512 21.0089C17.7767 21.2127 18.8396 21.1081 19.8055 20.7085C20.7715 20.3088 21.5971 19.6321 22.178 18.7638C22.7589 17.8955 23.0689 16.8747 23.0689 15.8304C23.0663 14.4308 22.5086 13.0893 21.5178 12.0997C20.5269 11.11 19.1838 10.5529 17.7825 10.5504Z" fill="#F64A44" />
      <path d="M15.2882 12.6105L14.6086 13.2893L20.3787 19.0525L21.0583 18.3737L15.2882 12.6105Z" fill="#F64A44" />
      <path d="M20.3719 12.6105L14.6017 18.3737L15.2814 19.0525L21.0515 13.2893L20.3719 12.6105Z" fill="#F64A44" />
    </svg>

  );
}

UploadDocumentFailedPictogram.defaultProps = {
  className: undefined,
};

UploadDocumentFailedPictogram.propTypes = {
  className: PropTypes.string,
};

export default UploadDocumentFailedPictogram;
export { UploadDocumentFailedPictogram };
