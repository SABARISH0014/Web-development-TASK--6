import React from 'react';

const ImageItem = ({ image, openModal }) => {
  return (
    <div className="image-item" onClick={() => openModal(image)} role="button" tabIndex="0">
      <img src={image.src} alt={image.alt} className="gallery-image" />
    </div>
  );
};

export default ImageItem;
