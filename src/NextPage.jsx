import React, { useState, useEffect } from 'react';

import './App.css';
import Otters from './Otters';
import OtterGit from './OtterGif';
import { useNavigate } from 'react-router-dom';
import OtterGifFlower from './OtterGifFlower';

const NextPage = () => {
  const [buttonPosition, setButtonPosition] = useState({ x: window.innerWidth / 2 + 70, y: window.innerHeight / 2 + 228 });


  const navigate = useNavigate();

  const handleYesClick = () => {
    console.log('Kliknięto "tak"');
    navigate('/end-page');
  };

  const handleNoClick = () => {    
    console.log('Kliknięto "nie"');
  };

  const handleNoMouseEnter = () => {
    const newX = Math.random() * (window.innerWidth - 100);
    const newY = Math.random() * (window.innerHeight - 100); 
    setButtonPosition({ x: newX, y: newY });
  };
  

  return (
    <div>
      <h1 style={{ position: 'absolute', left: '50%', top: '20%', transform: 'translateX(-50%)' }}>Zostaniesz moją walentynką? Hihi</h1>
      
      <OtterGifFlower/>

      <button
      onClick={handleYesClick}
      className="btn btn-primary"
      style={{
        position: 'absolute',
        left: '45%',
        top: '75%', 
        transform: 'translateX(-50%)',
        background: '#a68299',
        borderColor: 'white',
        width: '120px', 
        height: '60px', 
        fontSize: '1.5em' 
      }}
    >
      Tak
    </button>
    <button
      onClick={handleNoClick}
      onMouseEnter={handleNoMouseEnter}
      className="btn btn-danger"
      style={{
        position: 'absolute',
        left: buttonPosition.x,
        top: buttonPosition.y,
        background: '#a68299',
        borderColor: 'white',
        width: '120px',  
        height: '60px', 
        fontSize: '1.5em' 
      }} 
    >
      Nie
    </button>

    </div>
  );
};

export default NextPage;
