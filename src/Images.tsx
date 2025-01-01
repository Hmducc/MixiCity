import React, { useState, useEffect } from "react";

const FadingImageSlideshow: React.FC = () => {
  const images = [
    "../assets/112.png",
    "../assets/gang.jpg",
    "../assets/spider.jpg",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-full object-contain rounded-lg">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index}`}
          className={`absolute top-0 left-0 w-full h-full object-cover rounded transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
};

export default FadingImageSlideshow;
