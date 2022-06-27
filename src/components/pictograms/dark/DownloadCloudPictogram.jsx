import React from 'react';
import PropTypes from 'prop-types';

function DownloadCloudPictogram(props) {
  const { className } = props;

  return (
    <svg width="24" height="24" className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M7.5 21C8.32843 21 9 20.3284 9 19.5C9 18.6716 8.32843 18 7.5 18C6.67157 18 6 18.6716 6 19.5C6 20.3284 6.67157 21 7.5 21ZM7.5 20C7.77614 20 8 19.7761 8 19.5C8 19.2239 7.77614 19 7.5 19C7.22386 19 7 19.2239 7 19.5C7 19.7761 7.22386 20 7.5 20Z" fill="white" />
      <path d="M24 24H0V15.389H9.6V16.3458H0.96V23.0432H23.04V16.3458H14.4V15.389H24V24Z" fill="white" />
      <path d="M22.2144 7.13194C22.11 6.1491 21.6442 5.23959 20.9067 4.57881C20.1693 3.91804 19.2125 3.55282 18.2208 3.55358C17.7741 2.47316 17.0072 1.55433 16.0226 0.919859C15.038 0.285392 13.8826 -0.0344926 12.7107 0.00294853C11.5388 0.0403897 10.4063 0.433373 9.46445 1.12939C8.52263 1.8254 7.81636 2.7913 7.44001 3.89803C6.92503 3.67423 6.3698 3.55704 5.80801 3.55358C4.81635 3.55282 3.85953 3.91804 3.12208 4.57881C2.38463 5.23959 1.9188 6.1491 1.81441 7.13194C1.30615 7.23717 0.849561 7.51315 0.521031 7.91373C0.192501 8.31431 0.0119584 8.81518 0.00961011 9.33254C0.00742672 9.63119 0.0667996 9.9271 0.184044 10.2019C0.301288 10.4768 0.473905 10.7247 0.691209 10.9304C0.896722 11.1362 1.14258 11.2977 1.41345 11.4047C1.68432 11.5117 1.9744 11.5619 2.26561 11.5523H11.5296V14.6714L9.60961 12.7578L8.93761 13.4276L11.9808 16.4988L15.0336 13.4467L14.352 12.777L12.432 14.6905V10.5955H2.25601C2.08909 10.6029 1.92247 10.5752 1.767 10.5142C1.61152 10.4532 1.47068 10.3603 1.35361 10.2415C1.16938 10.0627 1.04313 9.83301 0.991158 9.58203C0.939186 9.33105 0.963879 9.0703 1.06204 8.83344C1.1602 8.59658 1.32734 8.39447 1.54187 8.2532C1.75641 8.11193 2.00849 8.03798 2.26561 8.04089H2.74561V7.5625C2.74561 6.75302 3.06826 5.9767 3.64257 5.40431C4.21688 4.83193 4.99581 4.51037 5.80801 4.51037C6.39839 4.51161 6.97558 4.68451 7.46881 5.00789L8.04481 5.37147L8.19841 4.71129C8.4195 3.68336 8.97418 2.75664 9.77669 2.07438C10.5792 1.39212 11.5849 0.992312 12.6382 0.936772C13.6915 0.881232 14.7339 1.17305 15.6042 1.76711C16.4744 2.36117 17.1241 3.22439 17.4528 4.22333L17.568 4.57734H18.0864H18.2208C19.033 4.57734 19.8119 4.8989 20.3863 5.47129C20.9606 6.04367 21.2832 6.82 21.2832 7.62947V8.10786H21.7632C22.0877 8.10919 22.4 8.2318 22.6381 8.45148C22.8763 8.67116 23.0232 8.97191 23.0496 9.29427C23.063 9.64576 22.9391 9.98874 22.704 10.2511C22.5729 10.3639 22.4203 10.4491 22.2554 10.5018C22.0904 10.5544 21.9165 10.5732 21.744 10.5572H13.4304V11.514H21.7344C22.0305 11.5324 22.3273 11.4902 22.6063 11.3898C22.8854 11.2894 23.1408 11.133 23.3568 10.9304C23.6358 10.6351 23.8317 10.2718 23.9248 9.87705C24.0179 9.48227 24.0049 9.07 23.8871 8.68184C23.7692 8.29367 23.5508 7.94335 23.2538 7.66619C22.9567 7.38903 22.5916 7.19485 22.1952 7.10324L22.2144 7.13194Z" fill="#79ADFC" />
      <path fillRule="evenodd" clipRule="evenodd" d="M3.5 21C4.32843 21 5 20.3284 5 19.5C5 18.6716 4.32843 18 3.5 18C2.67157 18 2 18.6716 2 19.5C2 20.3284 2.67157 21 3.5 21ZM3.5 20C3.77614 20 4 19.7761 4 19.5C4 19.2239 3.77614 19 3.5 19C3.22386 19 3 19.2239 3 19.5C3 19.7761 3.22386 20 3.5 20Z" fill="white" />
    </svg>

  );
}

DownloadCloudPictogram.defaultProps = {
  className: undefined,
};

DownloadCloudPictogram.propTypes = {
  className: PropTypes.string,
};

export default DownloadCloudPictogram;
export { DownloadCloudPictogram };
