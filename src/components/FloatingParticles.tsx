"use client";

import { useEffect } from 'react';

export default function FloatingParticles() {
  useEffect(() => {
    const createParticle = () => {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.animationDelay = Math.random() * 20 + 's';
      particle.style.animationDuration = (Math.random() * 10 + 15) + 's';
      
      const container = document.querySelector('.particles');
      if (container) {
        container.appendChild(particle);
        
        setTimeout(() => {
          if (particle.parentNode) {
            particle.parentNode.removeChild(particle);
          }
        }, 25000);
      }
    };

    const interval = setInterval(createParticle, 2000);
    
    // Create initial particles
    for (let i = 0; i < 10; i++) {
      setTimeout(createParticle, i * 200);
    }

    return () => clearInterval(interval);
  }, []);

  return <div className="particles" />;
}
