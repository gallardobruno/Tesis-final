import Image from 'next/image';
import logo from '../../public/logos-1.png'; 
import Link from 'next/link';
import { StateStage } from '../Badges/StateStage';

export default function Presentation() {  

  return (
 <main className="flex flex-col items-center justify-between p-24">

      <div className=" max-w-5xl w-full mb-16">
        <div className="relative flex place-items-center before:absolute before:h-[200px] before:w-[480px] before:-translate-x-1/4 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-3xl before:content-[''] after:absolute after:-z-20 after:h-[150px] after:w-[320px] after:translate-x-1/5 after:bg-gradient-conic after:from-sky-200 after:via-blue-300 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-10 before:dark:opacity-10 dark:after:blur-3xl ">
          <div className="text-5xl relative dark:drop-shadow-md-[0_0_0.3rem_#ffffff70] dark:text-white">
            <h1 className="font-semibold">Bruno Ignacio Gallardo</h1>
            <h1 className="font-normal">Proyecto final de carrera</h1>
          </div>   
        </div><br/>
        <Image src={logo}  alt="faud UNC" width={200} height='auto' className='relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert'/>
      </div>

      <div className='mt-11 mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left'>
      
      <Link href='/Presentation/stageOne'>
          <div
          className='group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'
          target='_blank'
          rel='noopener noreferrer'
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Etapa 1{' '}
            <span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
              <svg className="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m7 9 4-4-4-4M1 9l4-4-4-4"/>
              </svg>
            </span>
          </h2>
          <div className='flex items-end justify-between'>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            ESTUDIO DEL <br/>TEMA-PROBLEMA.
          </p>
          <StateStage />
          </div>
          </div>
        </Link>

        <Link href='/Presentation/stageTwo'>
          <div
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Etapa 2{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              <svg className="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m7 9 4-4-4-4M1 9l4-4-4-4"/>
              </svg>
              </span>
            </h2>
            <div className='flex items-end justify-between'>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              ALTERNATIVAS DE <br/> DISEÑO.
           </p>
           <span className="inline-flex items-center rounded-md bg-red-50 dark:bg-red-300 dark:bg-opacity-10 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">No Iniciada</span>
          </div>
         </div>
        </Link>
        
        <Link href='/Presentation/stageThree'>
          <div
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Etapa 3{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              <svg className="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m7 9 4-4-4-4M1 9l4-4-4-4"/>
              </svg>
              </span>
            </h2>
            <div className='flex items-end justify-between'>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              DESARROLLO DE <br/> ANTEPROYECTO.
            </p>
            <span className="inline-flex items-center rounded-md bg-red-50 dark:bg-red-300 dark:bg-opacity-10 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">No Iniciada</span>
          </div>
          </div>
        </Link>
       
        <Link href='/Presentation/stageFour'>
          <div
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Etapa 4{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              <svg className="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m7 9 4-4-4-4M1 9l4-4-4-4"/>
              </svg>
              </span>
            </h2>
            <div className='flex items-end justify-between'>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              DESARROLLO DE <br/> PROYECTO.
            </p>
            <span className="inline-flex items-center rounded-md bg-red-50 dark:bg-red-300 dark:bg-opacity-10 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">No Iniciada</span>
          </div>
          </div>
        </Link>
        
        <Link href='/Presentation/stageFive'>
          <div
           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Etapa 5{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              <svg className="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m7 9 4-4-4-4M1 9l4-4-4-4"/>
              </svg>
              </span>
           </h2>
           <div className='flex items-end justify-between'>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              COMUNICACIÓN DE <br/>PROYECTO.
            </p>
            <span className="inline-flex items-center rounded-md bg-red-50 dark:bg-red-300 dark:bg-opacity-10 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">No Iniciada</span>
          </div>
          </div>
        </Link>
       
      </div>
    </main>
  )
}
