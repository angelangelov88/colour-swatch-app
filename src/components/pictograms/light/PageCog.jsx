import React from 'react';
import PropTypes from 'prop-types';

function PageCog(props) {
  const { className } = props;

  return (
    <svg width="24" height="24" className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.4484 22.08V23.04H0.973084V19.2V4.8H17.4292V10.56H18.3926V4.8V3.84V0H0V19.2V24H18.4022V22.08H17.4484ZM17.4484 0.96V3.84H0.973084V0.96H17.4484Z" fill="#0C1457" />
      <path d="M2.41832 2.88961C2.68437 2.88961 2.90005 2.67471 2.90005 2.40961C2.90005 2.14451 2.68437 1.92961 2.41832 1.92961C2.15226 1.92961 1.93658 2.14451 1.93658 2.40961C1.93658 2.67471 2.15226 2.88961 2.41832 2.88961Z" fill="#0C1457" />
      <path d="M4.35487 2.88961C4.62093 2.88961 4.83661 2.67471 4.83661 2.40961C4.83661 2.14451 4.62093 1.92961 4.35487 1.92961C4.08882 1.92961 3.87314 2.14451 3.87314 2.40961C3.87314 2.67471 4.08882 2.88961 4.35487 2.88961Z" fill="#0C1457" />
      <path d="M6.29146 2.88961C6.55751 2.88961 6.77319 2.67471 6.77319 2.40961C6.77319 2.14451 6.55751 1.92961 6.29146 1.92961C6.0254 1.92961 5.80972 2.14451 5.80972 2.40961C5.80972 2.67471 6.0254 2.88961 6.29146 2.88961Z" fill="#0C1457" />
      <path d="M15.4926 6.72961H2.90005V7.68961H15.4926V6.72961Z" fill="#0C1457" />
      <path d="M13.556 8.64961H2.90005V9.60961H13.556V8.64961Z" fill="#0C1457" />
      <path d="M11.626 10.5014L2.9068 10.553L2.91252 11.513L11.6318 11.4614L11.626 10.5014Z" fill="#0C1457" />
      <path d="M10.6548 12.4271L2.9086 12.4729L2.91432 13.4329L10.6605 13.3871L10.6548 12.4271Z" fill="#0C1457" />
      <path d="M17.8723 22.5888C17.6604 22.5888 17.4484 22.5888 17.2364 22.5888H16.9378L16.3019 20.8224C16.1606 20.7764 16.0223 20.7219 15.8876 20.6592L14.1919 21.456L13.951 21.264C13.6228 21.0042 13.3254 20.7078 13.0646 20.3808L12.8623 20.1504L13.662 18.48C13.5959 18.3394 13.538 18.1952 13.4886 18.048L11.7254 17.424V17.1264C11.7254 16.9152 11.7254 16.7136 11.7254 16.5024C11.7254 16.2912 11.7254 16.08 11.7254 15.8688V15.5712L13.5175 14.9376C13.5656 14.8032 13.6234 14.6784 13.6812 14.5536L12.8623 12.8448L13.055 12.6144C13.3217 12.2894 13.622 11.9934 13.951 11.7312L14.1919 11.5392L15.9647 12.3744C16.0641 12.3277 16.1672 12.2891 16.273 12.2592L16.9378 10.4064H17.2364C17.6563 10.368 18.0788 10.368 18.4986 10.4064H18.8069L19.491 12.3264L19.7126 12.4128L21.5528 11.5488L21.7937 11.7408C22.1227 12.003 22.423 12.299 22.6897 12.624L22.8824 12.8544L21.996 14.6976C22.0259 14.7631 22.0516 14.8305 22.0731 14.8992L24 15.5808V15.8784C24 16.0896 24 16.3008 24 16.512C24 16.7232 24 16.9248 24 17.136V17.4336L22.0731 18.1056C22.0368 18.1872 22.0046 18.2705 21.9767 18.3552L22.8438 20.16L22.6415 20.3904C22.3784 20.7182 22.0813 21.0175 21.7551 21.2832L21.5143 21.4656L19.7511 20.64L19.4235 20.784L18.7684 22.5984H18.46C18.3059 22.5696 18.0939 22.5888 17.8723 22.5888ZM17.6411 21.6288H18.1036L18.7009 19.9584L18.9322 19.8816C19.1459 19.8119 19.3523 19.7218 19.5488 19.6128L19.7607 19.4976L21.4083 20.2752L21.7359 19.9488L20.9362 18.2784L21.0422 18.0768C21.1284 17.8996 21.2024 17.7168 21.2637 17.5296L21.3312 17.2992L23.104 16.6752C23.1168 16.5219 23.1168 16.3677 23.104 16.2144L21.3119 15.5808L21.2348 15.3504C21.1783 15.1784 21.1074 15.0114 21.0229 14.8512L20.9169 14.64L21.7359 12.9408C21.634 12.8249 21.5246 12.7159 21.4083 12.6144L19.6933 13.4208L19.4813 13.3056C19.315 13.2165 19.1408 13.1426 18.9611 13.0848L18.7298 13.008L18.1036 11.2512C17.9496 11.2416 17.7951 11.2416 17.6411 11.2512L17.0245 12.9696L16.7836 13.0464C16.5767 13.1014 16.3764 13.1787 16.1863 13.2768L15.9743 13.3824L14.3364 12.6144C14.2208 12.7104 14.1148 12.8256 14.0088 12.9312L14.77 14.5248L14.6447 14.736C14.528 14.9462 14.4343 15.1682 14.3653 15.3984L14.2882 15.6288L12.6407 16.2144C12.6278 16.3677 12.6278 16.5219 12.6407 16.6752L14.269 17.2416L14.3364 17.4816C14.4118 17.7247 14.5119 17.9595 14.6351 18.1824L14.7507 18.4032L14.0088 19.9488L14.3364 20.2752L15.9069 19.536L16.1188 19.6416C16.3397 19.7581 16.5722 19.8514 16.8125 19.92L17.0534 19.9872L17.6411 21.6288ZM17.8049 18.5856C17.3857 18.5837 16.9764 18.458 16.6289 18.2243C16.2814 17.9907 16.0113 17.6596 15.8526 17.273C15.6939 16.8863 15.6539 16.4615 15.7376 16.0522C15.8212 15.6429 16.0248 15.2675 16.3226 14.9735C16.6204 14.6794 16.999 14.48 17.4105 14.4004C17.822 14.3207 18.248 14.3645 18.6346 14.5261C19.0212 14.6877 19.351 14.9599 19.5823 15.3082C19.8136 15.6566 19.9361 16.0655 19.9342 16.4832C19.9291 17.04 19.7035 17.5723 19.3066 17.9642C18.9096 18.3562 18.3734 18.576 17.8145 18.576L17.8049 18.5856ZM17.8049 15.3312C17.5766 15.3331 17.3541 15.4023 17.1652 15.53C16.9763 15.6577 16.8297 15.8383 16.7436 16.049C16.6576 16.2596 16.6361 16.4909 16.6818 16.7138C16.7275 16.9366 16.8383 17.141 17.0004 17.3011C17.1625 17.4613 17.3685 17.5701 17.5925 17.6137C17.8165 17.6574 18.0485 17.634 18.2592 17.5466C18.4699 17.4591 18.6499 17.3115 18.7765 17.1222C18.9031 16.933 18.9707 16.7106 18.9707 16.4832C18.9608 16.1835 18.8349 15.8992 18.6194 15.6899C18.4039 15.4805 18.1155 15.3623 17.8145 15.36L17.8049 15.3312Z" fill="#4456F6" />
    </svg>

  );
}

PageCog.defaultProps = {
  className: undefined,
};

PageCog.propTypes = {
  className: PropTypes.string,
};

export default PageCog;
export { PageCog };
