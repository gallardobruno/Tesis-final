"use client"

import { Inter } from 'next/font/google'
import { ThemeProvider } from './Components/theme-provider.tsx'
import { ModeToggle } from './Components/mode-toggle.tsx'
import React from 'react';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet='UTF-8' />
        <meta 
        name='Tesis Bruno Gallardo'
        content='Tesis final de grado, carrera Arquitectura, Universidad Nacional de Córdoba, alumno: Bruno Gallardo, dni: 37900207'/>
        <title>Tesis Bruno Gallardo</title>
      </head>
      <body className={`min-h-screen {inter.className}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div>
            <header className='flex relative justify-end px-24' >
              <div className='mt-4 mw-full'>
              <ModeToggle />
              </div>
            </header>
            <main>{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  ); 
}


// 30:53