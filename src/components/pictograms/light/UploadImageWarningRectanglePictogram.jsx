import React from 'react';
import PropTypes from 'prop-types';

function UploadImageWarningRectanglePictogram(props) {
  const { className } = props;

  return (
    <svg width="24" height="24" className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.2896 22.0704V23.0304H0.969602V12.9984L1.7472 12.816V11.7888L2.7072 11.5488V10.5216L3.4272 10.3488L4.1568 10.5216L4.1088 11.5584L5.1168 11.808V12.816L6.0768 13.104L6.192 13.8048L6.7968 14.0928L6.912 14.7648L7.5168 15.0528L7.632 15.7248L8.2368 16.0224L8.352 16.6848L9.1776 17.0976L9.6096 16.2336L9.216 16.0416L9.1008 15.3696L8.496 15.072L8.2368 14.3904L7.632 14.0928L7.5168 13.4304L6.912 13.1328L6.8448 12.72H6.6624L7.92 11.6928L8.3232 9.7728L9.84 8.5152L10.2432 6.5952L11.7696 5.3184L12.0096 4.4832L12.1728 4.9248L13.4592 5.6352L13.728 7.1328L15.0624 7.8816L15.3312 9.3792L16.8672 10.2336L17.28 9.8112H18.24V0H0V24H18.24V22.08L17.2896 22.0704ZM17.2896 0.9504V9.3792L16.2048 8.7744L15.9168 7.2384L14.5824 6.4992L14.3136 5.0016L12.9408 4.2336L11.8752 1.4784L10.9152 4.8096L9.3792 6.096L8.976 8.016L7.4688 9.2736L7.0656 11.1936L6.0192 12.0384V11.0208L5.0592 10.7712V9.744L3.984 9.4752L3.4368 6.144L2.7936 9.4944L1.7088 9.7536V10.7808L0.96 10.9536V0.96L17.2896 0.9504Z" fill="#0C1457" />
      <path d="M18.24 13.44H17.28V20.16H18.24V13.44Z" fill="#F0B618" />
      <path d="M18.24 11.52H17.28V12.48H18.24V11.52Z" fill="#F0B618" />
      <path d="M17.76 22.08C16.5259 22.08 15.3194 21.714 14.2932 21.0284C13.2671 20.3427 12.4673 19.3682 11.995 18.2279C11.5227 17.0877 11.3991 15.8331 11.6399 14.6226C11.8807 13.4122 12.475 12.3003 13.3477 11.4277C14.2203 10.555 15.3322 9.96067 16.5426 9.7199C17.7531 9.47913 19.0077 9.6027 20.148 10.075C21.2882 10.5473 22.2627 11.3471 22.9484 12.3732C23.634 13.3994 24 14.6058 24 15.84C23.9975 17.4942 23.3392 19.0799 22.1695 20.2495C20.9999 21.4192 19.4142 22.0775 17.76 22.08ZM17.76 10.56C16.7157 10.56 15.6949 10.8697 14.8266 11.4498C13.9583 12.03 13.2816 12.8546 12.8819 13.8194C12.4823 14.7842 12.3777 15.8459 12.5815 16.8701C12.7852 17.8943 13.2881 18.8351 14.0265 19.5735C14.7649 20.3119 15.7057 20.8148 16.7299 21.0185C17.7542 21.2223 18.8158 21.1177 19.7806 20.7181C20.7454 20.3185 21.57 19.6417 22.1502 18.7734C22.7303 17.9051 23.04 16.8843 23.04 15.84C23.0375 14.4404 22.4804 13.0989 21.4907 12.1093C20.5011 11.1196 19.1596 10.5625 17.76 10.56Z" fill="#F0B618" />
    </svg>

  );
}

UploadImageWarningRectanglePictogram.defaultProps = {
  className: undefined,
};

UploadImageWarningRectanglePictogram.propTypes = {
  className: PropTypes.string,
};

export default UploadImageWarningRectanglePictogram;
export { UploadImageWarningRectanglePictogram };
