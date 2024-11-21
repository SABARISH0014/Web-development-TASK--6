import React, { useEffect } from 'react';

const Modal = ({ image, closeModal, nextImage, prevImage }) => {

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'ArrowRight') {
        nextImage();
      } else if (event.key === 'ArrowLeft') {
        prevImage();
      } else if (event.key === 'Escape') {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [nextImage, prevImage, closeModal]);

  return (
    <div className="modal-overlay" onClick={closeModal} role="dialog" aria-labelledby="modal-title">
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={closeModal} aria-label="Close modal">
          X
        </button>
        <div className="modal-body">
          <img
            src={image.src}
            alt={image.alt}
            className="modal-image"
            aria-describedby="modal-description"
          />
        </div>
        <div className="modal-footer">
          <button onClick={prevImage} aria-label="Previous image" className="nav-btn">
            &lt; Prev
          </button>
          <button onClick={nextImage} aria-label="Next image" className="nav-btn">
            Next &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
