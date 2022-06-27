import React from 'react';
import PropTypes from 'prop-types';

function UploadImageFailedSquarePictogram(props) {
  const { className } = props;

  return (
    <svg width="24" height="24" className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M3.83134 7.4106L4.79524 8.46214L4.05809 9.13786L3.84866 8.9094L3.65629 9.12925L2.90371 8.47075L3.83134 7.4106ZM5.81809 11.0579L4.64476 9.77786L5.38191 9.10214L6.55524 10.3821L5.81809 11.0579ZM3.09629 9.76925L1.97629 11.0493L1.22371 10.3907L2.34371 9.11075L3.09629 9.76925ZM7.57809 12.9779L6.40476 11.6979L7.14191 11.0221L8.31524 12.3021L7.57809 12.9779ZM1.41629 11.6893L0.856288 12.3293L0.103712 11.6707L0.663712 11.0307L1.41629 11.6893ZM8.16476 13.6179L8.90191 12.9421L9.82644 13.9507L9.08929 14.6264L8.16476 13.6179Z" fill="#0C1457" />
      <path fillRule="evenodd" clipRule="evenodd" d="M11.9633 3.9537L13.0304 5.28765L12.2496 5.91235L12.0367 5.6463L11.8827 5.87735L11.0506 5.32265L11.9633 3.9537ZM12.8896 6.71235L13.6704 6.08765L14.6228 7.27809L13.8419 7.90278L12.8896 6.71235ZM11.3494 6.67735L10.2827 8.27735L9.45064 7.72265L10.5173 6.12265L11.3494 6.67735ZM9.74936 9.07735L8.68269 10.6773L7.85064 10.1226L8.91731 8.52265L9.74936 9.07735ZM8.14936 11.4773L7.61602 12.2773L6.78397 11.7226L7.31731 10.9226L8.14936 11.4773Z" fill="#0C1457" />
      <path d="M17.28 20.16H0.96V17.28V16.32V11.9232V10.848V2.88H17.28V7.2672H18.24V1.92H0V16.32V17.28V21.12H18.2208L18.24 18.7008L17.2896 18.6912L17.28 20.16Z" fill="#0C1457" />
      <path d="M17.76 19.2C16.5258 19.2 15.3194 18.834 14.2932 18.1484C13.2671 17.4627 12.4673 16.4882 11.995 15.3479C11.5227 14.2077 11.3991 12.9531 11.6399 11.7426C11.8807 10.5322 12.475 9.42034 13.3477 8.54766C14.2203 7.67498 15.3322 7.08068 16.5426 6.8399C17.7531 6.59913 19.0077 6.7227 20.1479 7.195C21.2882 7.66729 22.2627 8.46708 22.9484 9.49325C23.634 10.5194 24 11.7258 24 12.96C23.9975 14.6142 23.3392 16.1999 22.1696 17.3695C20.9999 18.5392 19.4142 19.1975 17.76 19.2ZM17.76 7.68C16.7157 7.68 15.6949 7.98967 14.8266 8.56984C13.9583 9.15002 13.2816 9.97464 12.8819 10.9394C12.4823 11.9042 12.3777 12.9659 12.5815 13.9901C12.7852 15.0143 13.2881 15.9551 14.0265 16.6935C14.7649 17.4319 15.7057 17.9348 16.7299 18.1385C17.7541 18.3423 18.8158 18.2377 19.7806 17.8381C20.7454 17.4385 21.57 16.7617 22.1502 15.8934C22.7303 15.0251 23.04 14.0043 23.04 12.96C23.0375 11.5604 22.4804 10.2189 21.4907 9.22928C20.5011 8.23964 19.1596 7.68254 17.76 7.68Z" fill="#F64A44" />
      <path d="M15.2288 9.78239L14.55 10.4612L20.3132 16.2244L20.992 15.5456L15.2288 9.78239Z" fill="#F64A44" />
      <path d="M20.3132 9.77563L14.55 15.5388L15.2288 16.2176L20.992 10.4545L20.3132 9.77563Z" fill="#F64A44" />
    </svg>

  );
}

UploadImageFailedSquarePictogram.defaultProps = {
  className: undefined,
};

UploadImageFailedSquarePictogram.propTypes = {
  className: PropTypes.string,
};

export default UploadImageFailedSquarePictogram;
export { UploadImageFailedSquarePictogram };
