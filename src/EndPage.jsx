import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';
import './App.css';
import OtterGif from './OtterGif';
import OtterGifFlower from './OtterGifFlower';


const EndPage = () => {
    const [showConfetti, setShowConfetti] = useState(true);

    useEffect(() => {
        setShowConfetti(true);

        const timer = setTimeout(() => {
          setShowConfetti(false);
        }, 1000000);
    
        return () => clearTimeout(timer);
      }, []);

  return (
    <div>
        {showConfetti && <Confetti />}
        <h1 style={{ position: 'absolute', left: '50%', top: '20%', transform: 'translateX(-50%)' }}>Woohoooo</h1>
        <OtterGif/>
        <h1 style={{ 
          position: 'fixed', 
          top: '70%',
          left: '50%', 
          transform: 'translate(-50%, -50%)',
          fontSize: '3em', 
        }}>
          ❤️
        </h1>

    </div>
  );
};

export default EndPage;
