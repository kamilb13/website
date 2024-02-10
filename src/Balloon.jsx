import React, { useState } from 'react';
import './Balloon.css'; // Twój plik CSS dla komponentu Balloon

const Balloon = () => {
  const [isPopped, setIsPopped] = useState(false);

  const handleClick = () => {
    setIsPopped(true);
  };

  return (
    <div>
      {!isPopped ? (
        <div className="balloon" onClick={handleClick}>
          Balloon
        </div>
      ) : (
        <div className="popped-balloon">
          <img src="explosion.gif" alt="Explosion" />
        </div>
      )}
    </div>
  );
};

export default Balloon;
