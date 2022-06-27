import React from 'react';
import PropTypes from 'prop-types';

function SustainablePageV1Pictogram(props) {
  const { className } = props;

  return (
    <svg width="24" height="24" className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.44846 2.88H2.83936V3.84H9.44846V2.88Z" fill="white" />
      <path d="M9.44846 4.8H2.83936V5.76H9.44846V4.8Z" fill="white" />
      <path d="M9.44846 6.72H2.83936V7.68H9.44846V6.72Z" fill="white" />
      <path d="M15.1175 8.64H2.83936V9.6H15.1175V8.64Z" fill="white" />
      <path d="M14.1775 10.56H2.83936V11.52H14.1775V10.56Z" fill="white" />
      <path d="M17.9568 8.64V5.76H12.2878L12.2686 0H0V19.2V24H17.9376L17.9568 22.0896L17.0072 22.08L16.9976 23.04H0.949639V19.2V0.96H11.3285L11.3477 6.72H17.0072V8.64H17.9568Z" fill="white" />
      <path d="M23.9904 21.12L20.988 15.744L20.1631 16.224L22.3597 20.16H20.0192L20.6139 19.6032L19.9712 18.9024L18.1487 20.6112L19.9712 22.32L20.6139 21.6192L20.0863 21.12H23.9904Z" fill="#79ADFC" />
      <path d="M13.7458 18.2016L14.024 19.0464L14.9256 18.7392L14.187 16.5312L11.7506 17.0208L11.9328 17.9616L12.9017 17.76L11.0312 21.12H17.0072V20.16H12.6523L13.7458 18.2016Z" fill="#79ADFC" />
      <path d="M17.6978 14.4384L20.1823 14.784L20.729 12.5184L19.8082 12.2976L19.5875 13.2096L17.506 9.47519L14.3789 15.0912L15.1943 15.5616L17.506 11.424L18.7338 13.6128L17.8225 13.4976L17.6978 14.4384Z" fill="#79ADFC" />
    </svg>

  );
}

SustainablePageV1Pictogram.defaultProps = {
  className: undefined,
};

SustainablePageV1Pictogram.propTypes = {
  className: PropTypes.string,
};

export default SustainablePageV1Pictogram;
export { SustainablePageV1Pictogram };
