import React from 'react';
import PropTypes from 'prop-types';

function DocumentConnectPictogram(props) {
  const { className } = props;

  return (
    <svg width="24" height="24" className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.59414 2.88H2.87921V3.84H9.59414V2.88Z" fill="#0C1457" />
      <path d="M9.59414 4.8H2.87921V5.76H9.59414V4.8Z" fill="#0C1457" />
      <path d="M9.59414 6.72H2.87921V7.68H9.59414V6.72Z" fill="#0C1457" />
      <path d="M15.3526 8.64H2.87921V9.6H15.3526V8.64Z" fill="#0C1457" />
      <path d="M15.3526 10.56H2.87921V11.52H15.3526V10.56Z" fill="#0C1457" />
      <path d="M15.3526 12.48H2.87921V13.44H15.3526V12.48Z" fill="#0C1457" />
      <path d="M12.4734 5.76V0H0V24H18.2318V5.76H12.4734ZM17.2753 23.04H0.966251V0.96H11.4974V6.72H17.2558V23.04H17.2753Z" fill="#0C1457" />
      <path d="M17.2753 0V0.96C18.8098 0.987675 20.2718 1.60672 21.3469 2.68395C22.422 3.76117 23.0243 5.21047 23.024 6.72H24C24.0002 4.95589 23.2952 3.26245 22.0371 2.0052C20.7789 0.747943 19.0686 0.0277217 17.2753 0Z" fill="#4456F6" />
      <path d="M17.2753 1.92V2.88C18.2989 2.89762 19.2744 3.30995 19.9918 4.02819C20.7093 4.74643 21.1112 5.7131 21.111 6.72H22.087C22.0872 5.45852 21.5824 4.24769 20.6819 3.34942C19.7815 2.45115 18.5577 1.93766 17.2753 1.92Z" fill="#4456F6" />
      <path d="M17.2753 3.84V4.8C17.793 4.8 18.2895 5.00228 18.6556 5.36235C19.0217 5.72242 19.2273 6.21078 19.2273 6.72H20.2033C20.2033 5.95617 19.8949 5.22363 19.3458 4.68353C18.7966 4.14342 18.0519 3.84 17.2753 3.84Z" fill="#4456F6" />
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
