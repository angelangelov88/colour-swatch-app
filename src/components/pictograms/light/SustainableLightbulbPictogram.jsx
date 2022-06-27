import React from 'react';
import PropTypes from 'prop-types';

function SustainableLightbulbPictogram(props) {
  const { className } = props;

  return (
    <svg width="24" height="24" className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.4289 4.33796L17.2945 4.13896H17.0545C16.255 4.079 15.4546 4.24389 14.7461 4.61452C14.0375 4.98515 13.4499 5.54635 13.0513 6.23309C12.6703 6.85648 12.4689 7.57072 12.4689 8.29878C12.4689 9.02684 12.6703 9.74109 13.0513 10.3645L11.8129 12.5155L10.8529 11.5679C11.04 10.9218 11.0497 10.2382 10.881 9.58714C10.7123 8.9361 10.3713 8.34103 9.89292 7.86291C9.35252 7.3256 8.66836 6.95118 7.92039 6.78339C7.17242 6.6156 6.39152 6.66136 5.66892 6.91534L5.43852 6.94377L5.36172 7.17119C5.10441 7.88443 5.05804 8.65521 5.22804 9.39349C5.39803 10.1318 5.77736 10.8071 6.32172 11.3405C7.04917 12.054 8.0322 12.4557 9.05772 12.4586C9.44535 12.4536 9.83019 12.393 10.2001 12.2786L11.4961 13.5009V18.3146H12.4561V13.3872L13.9249 10.8193C14.6496 10.8373 15.3659 10.6631 15.9991 10.3147C16.6323 9.96639 17.1593 9.45673 17.5249 8.8389C17.9425 8.15673 18.1551 7.37153 18.1382 6.57469C18.1212 5.77786 17.8752 5.00217 17.4289 4.33796V4.33796ZM7.01292 10.6488C6.62315 10.2716 6.34078 9.7999 6.19418 9.28096C6.04758 8.76202 6.0419 8.21413 6.17772 7.69234C6.70564 7.55903 7.25967 7.5641 7.785 7.70703C8.31033 7.84996 8.78875 8.12579 9.17292 8.50725C9.46724 8.80246 9.69407 9.1565 9.83814 9.54551C9.98221 9.93452 10.0402 10.3495 10.0081 10.7625L7.60812 8.47882L6.94572 9.16107L9.37452 11.4637C8.94413 11.5119 8.50828 11.4636 8.09939 11.3225C7.69051 11.1814 7.31914 10.9511 7.01292 10.6488V10.6488ZM16.7089 8.33669C16.4729 8.72094 16.1547 9.04974 15.7767 9.30013C15.3987 9.55053 14.9698 9.7165 14.5201 9.78647L16.3441 6.59317L15.5089 6.12886L13.6657 9.36007C13.4975 8.92879 13.4292 8.46584 13.4658 8.00512C13.5023 7.54441 13.6428 7.09759 13.8769 6.6974C14.1685 6.19896 14.5885 5.78559 15.0944 5.49932C15.6002 5.21306 16.1738 5.0641 16.7569 5.06759C17.0442 5.56747 17.1912 6.13393 17.1827 6.70857C17.1743 7.28321 17.0107 7.84523 16.7089 8.33669V8.33669Z" fill="#4456F6" />
      <path d="M21.1154 8.72522C21.1146 7.45284 20.8253 6.19674 20.2689 5.04902C19.7124 3.90129 18.9028 2.89103 17.8994 2.09225C16.8117 1.21662 15.5395 0.592013 14.1759 0.264118C12.8122 -0.0637758 11.3915 -0.0866667 10.0178 0.197117C8.32014 0.535194 6.7586 1.3528 5.52299 2.55053C4.28738 3.74827 3.43092 5.27455 3.05775 6.94379C2.63684 8.9661 2.96922 11.0704 3.99382 12.8703C5.01843 14.6701 6.66649 16.0447 8.63536 16.7416V17.367H7.67536V22.1049H10.0754C10.0754 22.6075 10.2776 23.0895 10.6377 23.4449C10.9978 23.8003 11.4861 24 11.9954 24C12.5046 24 12.9929 23.8003 13.353 23.4449C13.7131 23.0895 13.9154 22.6075 13.9154 22.1049H16.3538V17.367H15.3938V16.789C17.0626 16.175 18.5031 15.0752 19.5248 13.6352C20.5465 12.1953 21.1012 10.4831 21.1154 8.72522ZM12 23.04C11.7807 23.0463 11.5658 22.9783 11.3912 22.8473C11.2165 22.7162 11.0926 22.5301 11.04 22.3198H12.8736C12.8248 22.5161 12.7138 22.6919 12.5566 22.8215C12.3994 22.9511 12.2044 23.0276 12 23.04ZM15.3554 21.1573H8.63536V20.2097H15.3554V21.1573ZM15.3554 19.2622H8.63536V18.3146H15.3554V19.2622ZM9.59536 17.367V16.1162L9.26895 16.012C7.44109 15.4416 5.89158 14.224 4.91859 12.5936C3.9456 10.9632 3.6179 9.03523 3.99856 7.18068C4.33953 5.7 5.10747 4.3484 6.20964 3.28909C7.31182 2.22977 8.7011 1.50803 10.2098 1.21101C11.442 0.951139 12.7174 0.966012 13.9431 1.25453C15.1688 1.54304 16.3138 2.09793 17.2946 2.87873C18.1863 3.58344 18.9076 4.47564 19.4058 5.49033C19.9041 6.50501 20.1667 7.61661 20.1746 8.74416C20.1506 10.3638 19.6138 11.9354 18.6393 13.2387C17.6649 14.5421 16.3018 15.5118 14.741 16.012L14.4146 16.1162V17.367H9.59536Z" fill="#0C1457" />
    </svg>
  );
}

SustainableLightbulbPictogram.defaultProps = {
  className: undefined,
};

SustainableLightbulbPictogram.propTypes = {
  className: PropTypes.string,
};

export default SustainableLightbulbPictogram;
export { SustainableLightbulbPictogram };
