"use client"

import React from 'react';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import '../app/styles/globals.css';

const Home = () => {
  const [hour, setHour] = useState<number>(0);
  const [itemHover, setItemHover] = useState<boolean>(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const currentHour = new Date().getHours();
    setHour(currentHour);
    setLoading(false);
  }, []);

  if (loading) {
    return <div className='loading'>Loading...</div>;
  }

  const bubbleeStyle = () => {
    let widthRatio = window.outerWidth / 1920;
    let heightRatio = window.outerHeight / 1080;

    const style = {
      width: `${300 * widthRatio}px`,
      height: `${180 * heightRatio}px`
    }
    
    return style;
  }

  return (
    <div className={`${ ( 6 <= hour ) && ( hour < 20 )  ? "afternoon" : "night"}`}>
      <div 
        className='speech-bubble'
        onMouseOver={() => {setItemHover(true);}}
        onMouseOut={() => {setItemHover(false);}}
      >
        <Link href="/other">
          {
            itemHover ? 
              <div
                style={bubbleeStyle()}
              >
                <img style={bubbleeStyle()} src='/background_night.png' />
              </div>
              : "Home"
          }
        </Link>
      </div>
    </div>
  );
};

export default Home;