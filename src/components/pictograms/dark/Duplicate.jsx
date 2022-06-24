import React from 'react';
import PropTypes from 'prop-types';

function Duplicate(props) {
  const { className } = props;

  return (
    <svg width="24" height="24" className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 24L0.0199877 16.32H1.01916L0.999172 23.04L6.01502 23.0208V23.9808L0 24Z" fill="white" />
      <path d="M12.3796 11.856L11.6702 12.5376L13.6086 14.4H1.01904V0.96H6.0149V0H0.0198669V15.36H13.6885L11.6702 17.2896L12.3796 17.9712L15.557 14.9184L12.3796 11.856Z" fill="white" />
      <path d="M6.01491 2.88H3.0174V3.84H6.01491V2.88Z" fill="white" />
      <path d="M6.01491 4.8H3.0174V5.76H6.01491V4.8Z" fill="white" />
      <path d="M6.01491 6.72H3.0174V7.68H6.01491V6.72Z" fill="white" />
      <path d="M6.01491 8.64H3.0174V9.6H6.01491V8.64Z" fill="white" />
      <path d="M6.01491 10.56H3.0174V11.52H6.01491V10.56Z" fill="white" />
      <path d="M6.01491 12.48H3.0174V13.44H6.01491V12.48Z" fill="white" />
      <path d="M6.01491 16.32H3.0174V17.28H6.01491V16.32Z" fill="white" />
      <path d="M6.01491 18.24H3.0174V19.2H6.01491V18.24Z" fill="white" />
      <path d="M6.01491 20.16H3.0174V21.12H6.01491V20.16Z" fill="white" />
      <path d="M24 24H6.01492V16.32H7.01409V23.04H23.0008V6.72H18.005L17.985 0.96H7.01409V13.44H6.01492V0H18.9842L19.0042 5.76H24V24Z" fill="#79ADFC" />
    </svg>

  );
}

Duplicate.defaultProps = {
  className: undefined,
};

Duplicate.propTypes = {
  className: PropTypes.string,
};

export default Duplicate;
export { Duplicate };
