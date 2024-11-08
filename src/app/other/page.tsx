import React from 'react';

const OtherPage: React.FC = () => {
  return (
    <div 
      style={{
        width: "100vw",
        height: "100vh",
        position: "fixed",
        backgroundImage: "url(/background_night.png)",
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <h1>Other Component Page</h1>
    </div>
  );
}

export default OtherPage;