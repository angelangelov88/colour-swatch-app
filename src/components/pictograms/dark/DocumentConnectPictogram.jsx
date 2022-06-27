import React from 'react';
import PropTypes from 'prop-types';

function DocumentConnectPictogram(props) {
  const { className } = props;

  return (
    <svg width="25" height="24" className={className} viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.7541 2.88H2.92722V3.84H9.7541V2.88Z" fill="white" />
      <path d="M9.7541 4.8H2.92722V5.76H9.7541V4.8Z" fill="white" />
      <path d="M9.7541 6.72H2.92722V7.68H9.7541V6.72Z" fill="white" />
      <path d="M15.6085 8.64H2.92722V9.6H15.6085V8.64Z" fill="white" />
      <path d="M15.6085 10.56H2.92722V11.52H15.6085V10.56Z" fill="white" />
      <path d="M15.6085 12.48H2.92722V13.44H15.6085V12.48Z" fill="white" />
      <path d="M12.6813 5.76V0H0V24H18.5358V5.76H12.6813ZM17.5634 23.04H0.982362V0.96H11.6891V6.72H17.5435V23.04H17.5634Z" fill="white" />
      <path d="M17.5634 0V0.96C19.1234 0.987675 20.6098 1.60672 21.7029 2.68395C22.7959 3.76117 23.4081 5.21047 23.4079 6.72H24.4002C24.4004 4.95589 23.6836 3.26245 22.4045 2.0052C21.1254 0.747943 19.3866 0.0277217 17.5634 0Z" fill="#79ADFC" />
      <path d="M17.5634 1.92V2.88C18.6039 2.89762 19.5957 3.30995 20.3251 4.02819C21.0545 4.74643 21.4632 5.7131 21.463 6.72H22.4553C22.4554 5.45852 21.9422 4.24769 21.0268 3.34942C20.1113 2.45115 18.8671 1.93766 17.5634 1.92Z" fill="#79ADFC" />
      <path d="M17.5634 3.84V4.8C18.0897 4.8 18.5945 5.00228 18.9667 5.36235C19.3388 5.72242 19.5479 6.21078 19.5479 6.72H20.5402C20.5402 5.95617 20.2266 5.22363 19.6683 4.68353C19.11 4.14342 18.3529 3.84 17.5634 3.84Z" fill="#79ADFC" />
    </svg>

  );
}

DocumentConnectPictogram.defaultProps = {
  className: undefined,
};

DocumentConnectPictogram.propTypes = {
  className: PropTypes.string,
};

export default DocumentConnectPictogram;
export { DocumentConnectPictogram };
