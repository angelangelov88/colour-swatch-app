import React from 'react';
import PropTypes from 'prop-types';

function EditDocumentPictogram(props) {
  const { className } = props;

  return (
    <svg width="24" height="24" className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.50494 2.88H2.85148V3.84H9.50494V2.88Z" fill="#0C1457" />
      <path d="M9.50494 4.79999H2.85148V5.75999H9.50494V4.79999Z" fill="#0C1457" />
      <path d="M9.50494 6.72H2.85148V7.68H9.50494V6.72Z" fill="#0C1457" />
      <path d="M15.2079 8.64001H2.85148V9.60001H15.2079V8.64001Z" fill="#0C1457" />
      <path d="M12.3564 10.56H2.85148V11.52H12.3564V10.56Z" fill="#0C1457" />
      <path d="M19.9604 23.04H18.0594V17.28H17.1089V23.04H0.950494V19.2V18.24V0.96H11.3869L11.4059 6.72H17.1089V14.4H18.0594V5.76H12.3754L12.3659 3.84H19.9699L19.9604 16.6944L20.9014 17.28L20.9109 2.88H12.3659L12.3564 0H0V18.24V19.2V24H17.1089H18.0594H20.9109V20.16H19.9604V23.04Z" fill="#0C1457" />
      <path d="M20.4357 20.2177L19.7703 19.5265L22.1656 17.1937L21.4337 16.4353L22.118 15.7729L23.5058 17.2225L20.4357 20.2177Z" fill="#4456F6" />
      <path d="M21.6713 22.2528L13.8392 14.064L13.4685 11.3952L16.1584 11.7888L24 19.9872L21.6713 22.2528ZM14.7422 13.6128L21.6998 20.8896L22.6503 19.9296L15.7022 12.6528L14.5901 12.4896L14.7422 13.6128Z" fill="#4456F6" />
      <path d="M17.1799 13.5159L15.5403 15.1179L16.2012 15.8079L17.8408 14.2059L17.1799 13.5159Z" fill="#4456F6" />
    </svg>

  );
}

EditDocumentPictogram.defaultProps = {
  className: undefined,
};

EditDocumentPictogram.propTypes = {
  className: PropTypes.string,
};

export default EditDocumentPictogram;
export { EditDocumentPictogram };
