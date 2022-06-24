import React from 'react';
import PropTypes from 'prop-types';

function Link(props) {
  const { className } = props;

  return (
    <svg width="24" height="24" className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.52 2.88H4.8V3.84H11.52V2.88Z" fill="white" />
      <path d="M11.52 4.8H4.8V5.76H11.52V4.8Z" fill="white" />
      <path d="M11.52 6.72H4.8V7.68H11.52V6.72Z" fill="white" />
      <path d="M22.9056 17.0784L20.16 15.6192V5.76H14.4V0H1.92V24H20.16V20.16L20.5824 20.7168L22.7712 19.1904L21.7536 17.8464L22.9056 17.0784ZM2.88 23.04V0.96H13.44V6.72H19.2V15.1104L17.1168 14.0064L18.432 20.1984L19.2 19.6608V23.04H2.88ZM20.784 19.4304L19.7664 18.096L19.0656 18.576L18.48 15.8208L21.0624 17.184L20.3808 17.664L21.408 19.008L20.784 19.4304Z" fill="white" />
      <path d="M12.3264 16.6176C11.9467 16.6185 11.5706 16.5443 11.2196 16.3993C10.8687 16.2544 10.5499 16.0414 10.2816 15.7728C10.0615 15.5552 9.87971 15.3021 9.74399 15.024L10.56 14.5728C10.6494 14.758 10.7695 14.9268 10.9152 15.072C11.286 15.423 11.7773 15.6187 12.288 15.6187C12.7987 15.6187 13.29 15.423 13.6608 15.072L15.0336 13.6992C15.215 13.5205 15.3591 13.3076 15.4574 13.0727C15.5557 12.8378 15.6064 12.5858 15.6064 12.3312C15.6064 12.0766 15.5557 11.8245 15.4574 11.5896C15.3591 11.3548 15.215 11.1418 15.0336 10.9632C14.6628 10.6121 14.1715 10.4164 13.6608 10.4164C13.1501 10.4164 12.6588 10.6121 12.288 10.9632L10.9152 12.3264C10.7695 12.4716 10.6494 12.6403 10.56 12.8256L9.70558 12.3936C9.8413 12.1155 10.0231 11.8623 10.2432 11.6448L11.6064 10.2816C12.1584 9.75402 12.8925 9.45961 13.656 9.45961C14.4195 9.45961 15.1536 9.75402 15.7056 10.2816C15.977 10.5495 16.1925 10.8686 16.3395 11.2204C16.4866 11.5723 16.5623 11.9498 16.5623 12.3312C16.5623 12.7125 16.4866 13.0901 16.3395 13.4419C16.1925 13.7937 15.977 14.1129 15.7056 14.3808L14.4 15.7728C14.1283 16.0449 13.8048 16.2598 13.4487 16.4049C13.0925 16.55 12.7109 16.6223 12.3264 16.6176Z" fill="#79ADFC" />
      <path d="M8.54403 20.3328C7.78021 20.3328 7.04768 20.0294 6.50758 19.4892C5.96747 18.9491 5.66403 18.2166 5.66403 17.4528C5.6631 17.0731 5.73728 16.697 5.88227 16.346C6.02725 15.9951 6.24018 15.6763 6.50884 15.408L7.87205 14.0352C8.42401 13.5076 9.15811 13.2132 9.92163 13.2132C10.6852 13.2132 11.4193 13.5076 11.9712 14.0352C12.1914 14.2527 12.3731 14.5059 12.5088 14.784L11.6545 15.2064C11.5649 15.0241 11.4448 14.8585 11.2992 14.7168C10.9284 14.3657 10.4371 14.17 9.92644 14.17C9.41576 14.17 8.92449 14.3657 8.55364 14.7168L7.18085 16.08C6.82314 16.4474 6.62295 16.94 6.62295 17.4528C6.62295 17.9656 6.82314 18.4581 7.18085 18.8256C7.5517 19.1767 8.04296 19.3724 8.55364 19.3724C9.06432 19.3724 9.55559 19.1767 9.92644 18.8256L11.2992 17.4528C11.4418 17.3086 11.5616 17.1435 11.6545 16.9632L12.5088 17.3952C12.3701 17.6686 12.1886 17.9182 11.9712 18.1344L10.56 19.4592C10.0299 20.0054 9.30507 20.3194 8.54403 20.3328Z" fill="#79ADFC" />
    </svg>

  );
}

Link.defaultProps = {
  className: undefined,
};

Link.propTypes = {
  className: PropTypes.string,
};

export default Link;
export { Link };
