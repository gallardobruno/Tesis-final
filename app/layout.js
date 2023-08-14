"use client"

import { Inter } from 'next/font/google'
import { ThemeProvider } from './Components/theme-provider'
import { ModeToggle } from './Components/mode-toggle'
import React from 'react';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Tesis Bruno Gallardo',
  description: 'Tesis final de grado, carrera Arquitectura, Universidad Nacional de Córdoba, alumno: Bruno Gallardo, dni: 37900207 ',
}




export default function RootLayout({ children }) {
  return (
    <html lang="en">
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