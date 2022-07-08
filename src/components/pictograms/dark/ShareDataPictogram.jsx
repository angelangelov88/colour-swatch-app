import React from 'react';
import PropTypes from 'prop-types';

function ShareDataPictogram(props) {
  const { className } = props;

  return (
    <svg width="24" height="24" className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.4589 20.16H2.89854V21.12H15.4589V20.16Z" fill="white" />
      <path d="M15.4589 18.24H2.89854V19.2H15.4589V18.24Z" fill="white" />
      <path d="M15.4589 16.32H2.89854V17.28H15.4589V16.32Z" fill="white" />
      <path d="M6.55071 15.36H2.89854V14.4H5.79709L6.55071 15.36Z" fill="white" />
      <path d="M5.79709 4.8H2.89854V3.84H6.68597L5.79709 4.8Z" fill="white" />
      <path d="M3.86473 6.71999H2.89854V5.75999H4.61835L3.86473 6.71999Z" fill="white" />
      <path d="M4.58936 13.44H2.89854V12.48H3.86473L4.58936 13.44Z" fill="white" />
      <path d="M14.6762 5.75999L15.4588 6.71999H17.3912V15.36H18.3574V5.75999H14.6762Z" fill="white" />
      <path d="M17.3913 23.04H0.966182V19.2V18.24V0.96H11.5845L11.5942 3.84H12.57L12.5604 0H0V18.24V19.2V24H18.3575V18.24H17.3913V23.04Z" fill="white" />
      <path d="M21.8647 22.3296L13.3334 15.0048L13.971 14.2848L21.7681 20.976L22.6377 19.9776L14.6474 13.1232L15.2754 12.4032L24 19.8816L21.8647 22.3296Z" fill="#79ADFC" />
      <path d="M7.25598 13.7281C6.95788 13.7281 6.66646 13.6402 6.41859 13.4757C6.17073 13.3111 5.97755 13.0772 5.86347 12.8036C5.74939 12.5299 5.71954 12.2288 5.77769 11.9383C5.83585 11.6478 5.97941 11.3809 6.1902 11.1715C6.40099 10.962 6.66955 10.8194 6.96192 10.7616C7.2543 10.7038 7.55736 10.7335 7.83278 10.8468C8.10819 10.9602 8.34359 11.1521 8.5092 11.3984C8.67482 11.6447 8.76322 11.9343 8.76322 12.2305C8.76322 12.6276 8.60443 13.0086 8.32176 13.2894C8.0391 13.5703 7.65573 13.7281 7.25598 13.7281ZM7.25598 11.6929C7.14897 11.6929 7.04435 11.7244 6.95538 11.7835C6.8664 11.8425 6.79704 11.9265 6.75608 12.0247C6.71513 12.123 6.70442 12.2311 6.7253 12.3353C6.74618 12.4396 6.79771 12.5354 6.87338 12.6106C6.94905 12.6858 7.04547 12.737 7.15042 12.7577C7.25538 12.7785 7.36416 12.7678 7.46303 12.7271C7.56189 12.6864 7.64639 12.6175 7.70584 12.5291C7.76529 12.4407 7.79704 12.3368 7.79704 12.2305C7.79704 12.0879 7.74002 11.9511 7.63856 11.8503C7.53709 11.7495 7.39948 11.6929 7.25598 11.6929Z" fill="white" />
      <path d="M12.3478 11.0783C12.0057 11.0783 11.6714 10.9776 11.387 10.7887C11.1026 10.5999 10.8809 10.3316 10.75 10.0176C10.6191 9.70357 10.5848 9.35806 10.6516 9.02472C10.7183 8.69138 10.883 8.3852 11.1249 8.14488C11.3668 7.90455 11.6749 7.74088 12.0104 7.67457C12.3459 7.60827 12.6936 7.6423 13.0096 7.77237C13.3257 7.90243 13.5958 8.12268 13.7858 8.40527C13.9759 8.68786 14.0773 9.0201 14.0773 9.35996C14.0773 9.58563 14.0325 9.80908 13.9456 10.0176C13.8587 10.226 13.7313 10.4155 13.5707 10.5751C13.4101 10.7346 13.2195 10.8612 13.0096 10.9476C12.7998 11.0339 12.5749 11.0783 12.3478 11.0783ZM12.3478 8.60156C12.1968 8.60156 12.0493 8.64604 11.9237 8.72938C11.7982 8.81271 11.7004 8.93114 11.6426 9.06972C11.5849 9.2083 11.5697 9.3608 11.5992 9.50791C11.6286 9.65503 11.7013 9.79015 11.8081 9.89621C11.9148 10.0023 12.0508 10.0745 12.1989 10.1038C12.347 10.133 12.5004 10.118 12.6399 10.0606C12.7794 10.0032 12.8986 9.90603 12.9825 9.78131C13.0663 9.65659 13.1111 9.50996 13.1111 9.35996C13.1111 9.26037 13.0913 9.16173 13.053 9.06972C13.0146 8.97771 12.9584 8.89411 12.8875 8.82368C12.8167 8.75326 12.7325 8.69741 12.6399 8.6593C12.5473 8.62119 12.448 8.60156 12.3478 8.60156Z" fill="white" />
      <path d="M9.19798 7.45924C8.94915 7.45924 8.70593 7.38581 8.49917 7.24825C8.29241 7.11069 8.13144 6.9152 8.03666 6.6866C7.94188 6.45799 7.91759 6.20657 7.96684 5.96422C8.01609 5.72188 8.1367 5.49952 8.31332 5.32538C8.48995 5.15123 8.71466 5.03312 8.95894 4.98606C9.20322 4.93899 9.45604 4.9651 9.68537 5.06103C9.91471 5.15696 10.1102 5.3184 10.247 5.52489C10.3839 5.73138 10.4559 5.9736 10.454 6.22083C10.454 6.38427 10.4215 6.54612 10.3582 6.697C10.295 6.84788 10.2023 6.98482 10.0856 7.09995C9.96879 7.21507 9.83025 7.30608 9.67791 7.36775C9.52558 7.42942 9.36246 7.46051 9.19798 7.45924ZM9.19798 5.93285C9.12279 5.93534 9.05153 5.96679 8.99924 6.02053C8.94696 6.07427 8.91776 6.14609 8.91781 6.22083C8.91781 6.29467 8.94732 6.3655 8.99986 6.41771C9.05241 6.46992 9.12367 6.49924 9.19798 6.49924C9.27321 6.49928 9.34551 6.47028 9.3996 6.41833C9.45369 6.36637 9.48534 6.29554 9.48785 6.22083C9.48543 6.14521 9.45412 6.07336 9.40028 6.01986C9.34643 5.96636 9.27408 5.93525 9.19798 5.93285Z" fill="white" />
      <path d="M10.8287 9.6581L7.92654 11.5805L8.46248 12.3792L11.3646 10.4569L10.8287 9.6581Z" fill="white" />
      <path d="M10.0081 6.41239L9.33287 7.09898L11.1848 8.89715L11.8601 8.21055L10.0081 6.41239Z" fill="white" />
      <path d="M11.3512 3.49929L9.38937 5.36403L10.0573 6.05773L12.0191 4.19299L11.3512 3.49929Z" fill="white" />
      <path d="M9.66182 16.3008C8.16 16.3004 6.70105 15.8033 5.51498 14.888C4.32891 13.9726 3.4832 12.691 3.1112 11.2453C2.7392 9.79962 2.86206 8.27201 3.46043 6.90335C4.05879 5.5347 5.09861 4.40286 6.41594 3.68629C7.73327 2.96973 9.25316 2.7092 10.736 2.94579C12.2188 3.18237 13.5802 3.9026 14.6055 4.99293C15.6308 6.08327 16.2617 7.48166 16.3988 8.96764C16.5358 10.4536 16.1711 11.9427 15.3623 13.2C14.7506 14.1509 13.9077 14.9333 12.9115 15.4753C11.9152 16.0172 10.7976 16.3011 9.66182 16.3008ZM9.66182 3.82077C8.51527 3.82077 7.39444 4.1586 6.44112 4.79152C5.48779 5.42444 4.74478 6.32403 4.30601 7.37653C3.86724 8.42903 3.75245 9.58718 3.97613 10.7045C4.19981 11.8218 4.75192 12.8482 5.56266 13.6537C6.37339 14.4593 7.40635 15.0079 8.53087 15.2301C9.6554 15.4524 10.821 15.3383 11.8803 14.9023C12.9396 14.4664 13.8449 13.7281 14.4819 12.7809C15.1189 11.8336 15.4589 10.72 15.4589 9.58077C15.4589 8.05312 14.8482 6.58807 13.761 5.50786C12.6738 4.42765 11.1993 3.82077 9.66182 3.82077Z" fill="#79ADFC" />
    </svg>

  );
}

ShareDataPictogram.defaultProps = {
  className: undefined,
};

ShareDataPictogram.propTypes = {
  className: PropTypes.string,
};

export default ShareDataPictogram;
export { ShareDataPictogram };