import React, { useState } from 'react';
import promo from 'https://drive.google.com/file/d/1LGVvrpBsb_jGWpA010mOXQmDmyEnABms/view?usp=sharing';

const Promo = () => {
  const [muted, setMuted] = useState(true);

  const toggleMute = () => {
    setMuted(!muted);
  };

  return (
    <div>
      <video
        autoPlay
        loop
        muted={muted}
        onClick={toggleMute}
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      >
        <source src={promo} type="video/mp4" />
      </video>
    </div>
  );
};

export default Promo;
