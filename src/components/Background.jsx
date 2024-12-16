// components/StarBackground.js
import React from 'react';
import styles from './Star.module.css';


function generateShadows(n) {
    let shadows = [];
    for (let i = 0; i < n; i++) {
      let x = Math.random() * 2000;
      let y = Math.random() * 2000;
      shadows.push(`${x}px ${y}px #FFF`);
    }
    return shadows.join(', ');
  }
  
  const StarBackground = () => {
    const smallShadows = generateShadows(700);
    const mediumShadows = generateShadows(200);
    const bigShadows = generateShadows(100);
  
    return (
      <div className={styles.starsContainer}>
        <div
          className={styles.stars}
          style={{
            boxShadow: smallShadows,
          }}
        />
        <div
          className={styles.stars2}
          style={{
            boxShadow: mediumShadows,
          }}
        />
        <div
          className={styles.stars3}
          style={{
            boxShadow: bigShadows,
          }}
        />
      </div>
    );
  };
  
  export default StarBackground;
  