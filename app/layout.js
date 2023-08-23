"use client"

import { Inter } from 'next/font/google'
import Providers from './store/provider'
import { ThemeProvider } from './Components/theme-provider.tsx'
import { ModeToggle } from './Components/mode-toggle.tsx'
import { GoToHome } from './Badges/GoToHome'
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
              <header className=' ' >
                <div className='flex justify-end px-24 space-x-2 fixed top-0 py-2 w-full bg-opacity-20 backdrop-blur-sm bg-gray-100'>
                <GoToHome /><ModeToggle />
                </div>
              </header>
              <Providers>{children}</Providers>
            </div>
          </ThemeProvider>
      </body>
    </html>
  ); 
}


// 30:53