"use client"

import React from 'react';
import './globals.css'
import { useState, useEffect } from 'react';
import Presentation from './Presentation/page';
import { useTheme } from 'next-themes';
import Particles from './Components/particles.tsx';

export default function Home() {
  const { systemTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <Particles
				className="absolute inset-0 -z-10 animate-fade-in"
				quantity={100}
			/>
        <Presentation />  
    </>
  );
}