import React from 'react';
import PropTypes from 'prop-types';

function LightbulbPictogram(props) {
  const { className } = props;

  return (
    <svg width="24" height="24" className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.28 8.78533C17.2782 7.98577 17.0799 7.19792 16.7012 6.48601C16.3225 5.7741 15.7741 5.15827 15.1008 4.68872C14.4158 4.21457 13.6238 3.90301 12.7895 3.77953C11.9552 3.65605 11.1024 3.72415 10.3008 3.97826C9.53369 4.21591 8.83618 4.62498 8.26546 5.1719C7.69474 5.71881 7.26708 6.388 7.01757 7.12454C6.75472 7.8952 6.68467 8.71458 6.81311 9.51615C6.94154 10.3177 7.26484 11.0789 7.75677 11.7378C8.2045 12.3275 8.77933 12.8174 9.44203 13.1741C10.1047 13.5308 10.8397 13.7458 11.5968 13.8046V18.4179H12.5568V12.8819H12.0768C11.3955 12.8824 10.7238 12.728 10.1165 12.4313C9.50924 12.1347 8.98354 11.7042 8.58237 11.175C8.17298 10.6303 7.9053 9.99919 7.80175 9.33462C7.6982 8.67005 7.76178 7.99131 7.98717 7.3552C8.19063 6.76 8.53624 6.21884 8.99633 5.77504C9.45642 5.33124 10.0182 4.99713 10.6368 4.79943C11.2897 4.58414 11.9866 4.52131 12.6697 4.61615C13.3529 4.711 14.0028 4.96079 14.5657 5.34487C15.1285 5.72894 15.5881 6.23626 15.9065 6.82489C16.2249 7.41352 16.393 8.06654 16.3968 8.72995C16.3968 9.34172 16.1439 9.92843 15.6938 10.361C15.2437 10.7936 14.6333 11.0366 13.9968 11.0366C13.3602 11.0366 12.7498 10.7936 12.2997 10.361C11.8496 9.92843 11.5968 9.34172 11.5968 8.72995C11.5968 8.6076 11.6473 8.49027 11.7374 8.40375C11.8274 8.31724 11.9495 8.26863 12.0768 8.26863C12.2041 8.26863 12.3262 8.31724 12.4162 8.40375C12.5062 8.49027 12.5568 8.6076 12.5568 8.72995H13.5168C13.5168 8.3629 13.3651 8.01088 13.095 7.75133C12.8249 7.49178 12.4587 7.34597 12.0768 7.34597C11.6949 7.34597 11.3286 7.49178 11.0585 7.75133C10.7885 8.01088 10.6368 8.3629 10.6368 8.72995C10.6368 9.58642 10.9908 10.4078 11.6209 11.0134C12.251 11.619 13.1056 11.9593 13.9968 11.9593C14.8879 11.9593 15.7425 11.619 16.3726 11.0134C17.0028 10.4078 17.28 9.64179 17.28 8.78533Z" fill="#79ADFC" />
      <path d="M21.12 8.7669C21.1203 7.17382 20.6689 5.61077 19.8142 4.24579C18.9596 2.8808 17.734 1.76549 16.2693 1.01973C14.8046 0.273971 13.1561 -0.0740331 11.501 0.0131324C9.84594 0.100298 8.24688 0.619341 6.87571 1.51445C5.50455 2.40957 4.41313 3.6469 3.71878 5.09346C3.02442 6.54003 2.75338 8.14112 2.9348 9.72463C3.11622 11.3081 3.74323 12.8142 4.74844 14.0809C5.75365 15.3476 7.09905 16.3271 8.64001 16.914V17.5414H7.68001V22.1547H10.0896C10.0896 22.6441 10.2919 23.1135 10.652 23.4595C11.012 23.8056 11.5004 24 12.0096 24C12.5188 24 13.0072 23.8056 13.3673 23.4595C13.7273 23.1135 13.9296 22.6441 13.9296 22.1547H16.32V17.5414H15.36V16.914C17.0573 16.2648 18.5133 15.1416 19.54 13.6894C20.5667 12.2372 21.1171 10.5226 21.12 8.7669ZM12.0096 23.0866C11.755 23.0866 11.5108 22.9894 11.3308 22.8163C11.1508 22.6433 11.0496 22.4086 11.0496 22.1639H12.9696C12.9696 22.4086 12.8685 22.6433 12.6884 22.8163C12.5084 22.9894 12.2642 23.0866 12.0096 23.0866ZM15.36 21.2413H8.64001V20.3186H15.36V21.2413ZM8.64001 19.3959V18.4733H15.36V19.3959H8.64001ZM14.7168 16.1943L14.4 16.2773V17.5506H9.60001V16.305L9.27361 16.1943C7.45638 15.5772 5.92466 14.3625 4.94922 12.7649C3.97377 11.1673 3.61741 9.28974 3.94312 7.46403C4.26884 5.63832 5.25566 3.98207 6.72915 2.78805C8.20263 1.59404 10.0679 0.939143 11.9952 0.939143C13.9225 0.939143 15.7878 1.59404 17.2613 2.78805C18.7348 3.98207 19.7216 5.63832 20.0473 7.46403C20.373 9.28974 20.0167 11.1673 19.0412 12.7649C18.0658 14.3625 16.534 15.5772 14.7168 16.1943Z" fill="white" />
    </svg>

  );
}

LightbulbPictogram.defaultProps = {
  className: undefined,
};

LightbulbPictogram.propTypes = {
  className: PropTypes.string,
};

export default LightbulbPictogram;
export { LightbulbPictogram };