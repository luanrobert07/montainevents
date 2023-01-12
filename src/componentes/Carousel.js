import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import img1 from '../imagens/img1.png'
import img2 from '../imagens/img2.png'

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [interval] = useState(3000);
  const images = useMemo(() => [
    { url: img1, caption: 'img1' },
    { url: img2, caption: 'img2' },
  ], []);


  const handlePreviousClick = useCallback(() => {
    const newIndex = currentIndex - 1;
    setCurrentIndex(newIndex < 0 ? images.length - 1 : newIndex);
}, [currentIndex, images.length]);

const handleNextClick = useCallback(() => {
    const newIndex = currentIndex + 1;
    setCurrentIndex(newIndex === images.length ? 0 : newIndex);
}, [currentIndex, images.length]);

const intervalRef = useRef(null);
    useEffect(() => {
        intervalRef.current = setTimeout(() => {
            const newIndex = (currentIndex + 1) % images.length;
              setCurrentIndex(newIndex);
              }, interval);
              return () => clearTimeout(intervalRef.current);
              }, [currentIndex, images.length, interval]);



  return (
    <div>
      <button className='button_carousel' onClick={handlePreviousClick}>Previous</button>
      <img src={images[currentIndex].url} alt={images[currentIndex].caption} />
      <button className='button_carousel' onClick={handleNextClick}>Next</button>
    </div>
  );
}

export default Carousel;