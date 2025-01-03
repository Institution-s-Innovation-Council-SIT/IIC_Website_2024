import React, { useEffect, useState } from 'react';
import './Home.css'; // Adjust the path if the CSS file is in a different directory

const Home = () => {
  // Array of image URLs for the carousel
  const images = [
    '/iic-what1.jpeg', // Replace with actual image paths or import them if they are local
    '/iic-what2.jpeg',
    '/iic-what3.jpeg',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Set loading animation for 2 seconds
    const loadingTimeout = setTimeout(() => setIsLoading(false), 2000);

    // Carousel interval
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => {
      clearTimeout(loadingTimeout); // Cleanup loading timeout
      clearInterval(interval); // Cleanup carousel interval
    };
  }, [images.length]);

  if (isLoading) {
    return (
      <div className="loading-container">
        <img 
          src="/logo_removedbg.png" 
          alt="IIC Logo" 
          className="loading-logo" 
        />
        <div className="loading-dots">
          <span>.</span>
          <span>.</span>
          <span>.</span>
        </div>
      </div>
    );
  }

  return (
    <div className="home">
      <h1>Welcome to the Institution's Innovation Council</h1>
      {/* Sliding image carousel */}
      <div className="image-carousel">
        <img
          src={images[currentImageIndex]}
          alt={`Slide ${currentImageIndex + 1}`} // Corrected alt text
          className="carousel-image"
        />
      </div>
      <p>
        We foster innovation and creativity among students, bringing together the brightest minds to work on
        impactful projects and initiatives.
      </p>

      {/* New section for "What We Do" */}
      <section className="what-we-do">
        <h2>What We Do</h2>
        <p>
          At the Institution's Innovation Council, we drive innovation through various programs, workshops, and
          competitions. We aim to inspire students to develop cutting-edge solutions for real-world problems,
          empowering them to excel in their respective fields.
        </p>
      </section>
    </div>
  );
};

export default Home;
