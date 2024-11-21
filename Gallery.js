import React, { useState } from 'react';
import ImageItem from './ImageItem';
import Modal from './Modal';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const images = [
    { src: 'https://images.unsplash.com/photo-1732109364161-7db69c7ae8ce?q=80&w=1586&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Image 1' },
    { src: 'https://plus.unsplash.com/premium_photo-1731138967966-82b9a6abe306?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Image 2' },
    { src: 'https://images.unsplash.com/photo-1732053989556-95d6a5fe31aa?q=80&w=1588&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Image 3' },
    { src: 'https://images.unsplash.com/photo-1731947463347-a6b36e97fe9d?q=80&w=1585&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Image 4' },
    { src: 'https://images.unsplash.com/photo-1731331323996-7ff41939ddf3?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Image 5' },
    { src: 'https://images.unsplash.com/photo-1720290079497-2f8227714a59?q=80&w=1596&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Image 6' },
    { src: 'https://images.unsplash.com/photo-1720964966274-055329e7032a?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Image 7' },
    { src: 'https://images.unsplash.com/photo-1727990326463-02a27e0641d1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4M3x8fGVufDB8fHx8fA%3D%3D', alt: 'Image 8' },
  ];

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const nextImage = () => {
    const currentIndex = images.findIndex((img) => img.src === selectedImage.src);
    const nextIndex = (currentIndex + 1) % images.length;
    setSelectedImage(images[nextIndex]);
  };

  const prevImage = () => {
    const currentIndex = images.findIndex((img) => img.src === selectedImage.src);
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setSelectedImage(images[prevIndex]);
  };

  return (
    <div className="gallery">
      {images.map((image, index) => (
        <ImageItem key={index} image={image} openModal={openModal} />
      ))}

      {isModalOpen && (
        <Modal
          image={selectedImage}
          closeModal={closeModal}
          nextImage={nextImage}
          prevImage={prevImage}
        />
      )}
    </div>
  );
};

export default Gallery;
