import React, { useState, useEffect } from "react";

// Button Component
const Button = ({ title, onClick }) => (
  <button 
    className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-all"
    onClick={onClick}
  >
    {title}
  </button>
);

const Home = () => {
  const images = [
    'https://miro.medium.com/v2/resize:fit:1358/1*mnT2LYAk9XgLr9wUuiOYjw.jpeg',

    'https://alind11.bambootruck.com/wp-content/uploads/elementor/thumbs/freepicdownloader.com-teenager-suffering-from-hangover-normal-qxdhsezu3u00zwcacg45f7lnviebr1iwkjm2rhm8c8.jpg',
    'https://img.freepik.com/free-photo/unpleased-adult-ill-caucasian-man-with-scarf-around-neck-wearing-winter-hat-holding-looking-syringe-medicine-blister-pack-isolated-pink-wall-with-copy-space_141793-107966.jpg?uid=R166662328&ga=GA1.1.220756668.1728029705&semt=ais_hybrid',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(timer);
  }, []);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 text-white relative">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}
      <div className="relative z-10 w-full lg:w-4/5 space-y-5 mt-10 text-center lg:text-left">
        {/* Header */}
        <h1 className="text-3xl lg:text-5xl font-bold leading-tight">
          Reclaim Your Strength.
        </h1>
        
        {/* Description */}
        <p className="text-sm lg:text-base">
          Specialized treatments at Dhara Nasha Mukti Kendra to overcome addiction and improve your quality of life.
        </p>

        {/* Buttons */}
        <div className="flex justify-center lg:justify-start space-x-4">
          <Button title="Previous" onClick={prevImage} />
          <Button title="Next" onClick={nextImage} />
        </div>
      </div>
    </div>
  );
};

export default Home;











