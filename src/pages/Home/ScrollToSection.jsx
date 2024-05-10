import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToSection = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const targetElement = document.querySelector(hash);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [pathname, hash]);

  return null;
};