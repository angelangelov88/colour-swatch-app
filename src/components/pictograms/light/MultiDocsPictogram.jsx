import React from 'react';
import PropTypes from 'prop-types';

function MultiDocs(props) {
  const { className } = props;

  return (
    <svg width="24" height="24" className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M23 2.88H14V3.84H22V13.44L21.98 23.04H19V24H22.98L23 13.44H22.5H23V2.88Z" fill="#4456F6" />
      <path d="M11 2.88H4V3.84H11V2.88Z" fill="#0C1457" />
      <path d="M11 4.8H4V5.76H11V4.8Z" fill="#0C1457" />
      <path d="M11 6.72H4V7.68H11V6.72Z" fill="#0C1457" />
      <path d="M17 8.64H4V9.6H17V8.64Z" fill="#0C1457" />
      <path d="M17 10.56H4V11.52H17V10.56Z" fill="#0C1457" />
      <path d="M17 12.48H4V13.44H17V12.48Z" fill="#0C1457" />
      <path d="M14 5.76V0H1V24H20V5.76H14ZM19 13.44V23.04H2V0.96H13V6.72H19V13.44Z" fill="#0C1457" />
    </svg>

  );
}

MultiDocs.defaultProps = {
  className: undefined,
};

MultiDocs.propTypes = {
  className: PropTypes.string,
};

export default MultiDocs;
export { MultiDocs };
