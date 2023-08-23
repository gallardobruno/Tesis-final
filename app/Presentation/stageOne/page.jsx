"use client"

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { añadirEtapa } from '../../store/SliceOne';
import Image from 'next/image';
import marArgentino from '../../../public/espacios_maritimos.png'
import billGates from '../../../public/bill gates.png'
import mapArgentina from '../../../public/Blank_Argentina_Map.png'
import golfo from '../../../public/Golfo-San-Jorge.png'
import caleta from '../../../public/ArcGIS.png'
import Video from '../../Components/youTubeVideo'

export default function StageOne() {
  const dispatch=useDispatch();
  const estadoEtapa1 = useSelector(state => state.misValores.estadoEtapa);
  console.log(`el estado de StageOne es ${estadoEtapa1}`)

  const handleContinuar = () => {
    console.log('Dispatching acción añadirEtapa');
    dispatch(añadirEtapa('enProceso'))
  };

  const handleCompletado = () => {
    dispatch(añadirEtapa('completada'));
  };

  return (
    <div className="flex-col">    
<div className="scrollable-div">
  <div className="flex justify-center w-full h-screen sm:items-center bg-black">
    <div className="flex-col flex items-center justify-center max-w-5xl w-full text-white">
      <h1 className="font-sans text-5xl font-semibold tracking-wide ">
      <p>CENTRO DE INVESTIGACIÓN MARINA</p>
      </h1><br/>
      <p className='font-sans font-light text-lg'>Educación de formación avanzada en energías renovables y nuevos recursos para la cuenca del Golfo San Jorge</p>
      <div>
{estadoEtapa1 === 'noIniciada' && (
        <button onClick={handleContinuar} className="btn-comenzar">
          Comencemos
        </button>
      )}
</div>
    </div>
  </div>
  </div>

<div className="scrollable-div">
<div className="flex justify-center w-full h-screen sm:py-10">
    <div className="max-w-5xl w-full">
     <div className="pt-32">
      <p className="font-semibold">ETAPA 1 | ESTUDIO DEL TEMA PROBLEMA</p>
      1 | Montaje del proceso de tesis / Agendas sociales oportunas del hábitat Latinoamericano <br/>
      2 | Construcción de un imaginario / Hipótesis de Proyecto <br/>
      3 | Enfoque teórico - práctico / Programa - ideogramas tecno-espaciales-imaginarios
     </div>
    </div>
  </div>
</div>


<div className="scrollable-div">
  <div className="flex justify-center w-full h-screen sm:relative">
    <div className="max-w-5xl w-full">
    <div className="flex justify-end text-white"><p className="bg-black">Pág 01</p></div><br/>
     <section className="pt-22">
      <p className="text-2xl font-semibold">TEMA-PROBLEMA</p>
      <p className="text-2xl font-normal">3 Escalas</p><br/>
      <p className="text-2xl font-light">GLOBAL:</p><br/>

      <ol className='list-decimal list-inside'>
  <li>Automatización y Reemplazo de Puestos de Trabajo:
    <ul className='list-disc list-inside pl-4'>
      <li>Avance tecnológico y automatización en diversas industrias.</li>
      <li>Potencial desplazamiento de trabajadores por la adopción de tecnologías.</li>
    </ul>
  </li><br/>

  <li>Era de la Información y Telecomunicaciones:
<ul className='list-disc list-inside pl-4'>
      <li>Impacto de la revolución digital en la forma en que accedemos y compartimos información.</li>
      <li>Cambio en la dinámica social, económica y cultural debido a la digitalización.</li>
    </ul>
  </li><br/>

  <li>Impacto en la Educación con Carreras Obsoletas:
<ul className='list-disc list-inside pl-4'>
      <li>Desafíos de mantenerse actualizado en un entorno de rápido cambio tecnológico.</li>
      <li>Exploración de nuevas modalidades de aprendizaje y capacitación para mantener la relevancia.</li>
    </ul>
  </li><br/>

  <li>Nuevos Enfoques:
<ul className='list-disc list-inside pl-4'>
      <li>Carreras sobre Inteligencia Artificial y computación.</li>
      <li>Carreras en Biología y Avances Cientificos.</li>
      <li>Carreras sobre exploración de energias renovables u optimizacion de las convencionales.</li>
    </ul>
  </li>
</ol>
     </section><br/>
    </div>
  </div>
  </div>


  <div className="scrollable-div">
  <div className="flex justify-center w-full h-screen sm:relative">
    <div className="max-w-5xl w-full">
    <div className="flex justify-end text-white"><p className="bg-black">Pág 02</p></div><br/>
     <section>
    <Image
  src={billGates}
  alt="espacios marítimos"
  width={1000}
  height='auto'
  className="relative"
/>
     </section><br/>
    </div>
  </div>
  </div>


  <div className="scrollable-div">
  <div className="flex justify-center w-full h-screen sm:relative">
    <div className="max-w-5xl w-full">
    <div className="flex justify-end text-white"><p className="bg-black">Pág 03</p></div><br/>
     <section className="pt-22">
      <p className="text-2xl font-light">REGIONAL (Argentina):</p><br/>

      <ol className='list-decimal list-inside'>
  <li>Deficiencia en recuros marítimos y control territorial:</li>
</ol>
    <Image
  src={marArgentino}
  alt="espacios marítimos"
  width={1000}
  height='auto'
  className="relative"
/>

     </section><br/>
    </div>
  </div>
  </div>


  <div className="scrollable-div">
  <div className="flex justify-center w-full h-screen sm:relative">
    <div className="max-w-5xl w-full">
    <div className="flex justify-end text-white"><p className="bg-black">Pág 04</p></div><br/>
     <section>
      <Video/>
     </section><br/>
    </div>
  </div>
  </div>

  <div className="scrollable-div">
  <div className="flex justify-center w-full h-screen sm:relative">
    <div className="max-w-5xl w-full">
    <div className="flex justify-end text-white"><p className="bg-black">Pág 05</p></div><br/>
     <section>
     <ul className='list-disc list-inside pl-4'>
      <li>Falta de tecnologías y logística para el control del espacio Maritimo.</li>
      <li>Falta de conciencia oceanica.</li>
      <li>Extraccion de recursos marítimos por parte de otros paises de forma ilegal.</li>
      <li>Falta de soberanía nacional sobre nuestros territorios, con consecuencias políticas y económicas a futuro.</li>
    </ul>
     </section><br/>
    </div>
  </div>
  </div>

  <div className="scrollable-div">
  <div className="flex justify-center w-full h-screen sm:relative">
    <div className="max-w-5xl w-full">
    <div className="flex justify-end text-white"><p className="bg-black">Pág 06</p></div><br/>
     <section className="pt-22">
      <p className="text-2xl font-light">LOCAL (Caleta Olivia, Santa Cruz):</p><br/>

      <ol className='list-decimal list-inside'>
  <li>Enfoque en un único motor económico:
    <ul className='list-disc list-inside pl-4'>
      <li>El petróleo en la provincia de Santa Cruz es equivalente al 52% del producto bruto interno, según informe del CIPPEC.</li>
    </ul>
  </li><br/>

  <li>Poco incentívo provincial de promover la Investigación:
<ul className='list-disc list-inside pl-4'>
      <li>Santa Cruz es la única provincia del pais que no cuenta con una unidad ejecutora del CONICET, según el secretario de ciencias y tecnología de la UNPA.</li>
      <li>Fuente: <a href="https://www.unpa.edu.ar/noticia/avanzan-las-gestiones-para-crear-una-unidad-ejecutora-del-conicet-en-santa-cruz">
      www.unpa.edu.ar/noticia/avanzan-las-gestiones-para-crear-una-unidad-ejecutora
</a>.</li>
    </ul>
  </li><br/>

  <li>Instituciones que trabajan por separado:
<ul className='list-disc list-inside pl-4'>
      <li>UNPA (Universidad de la Patagonia Austral).</li>
      <li>Puerto Caleta Paula.</li>
      <li>Planta de Osmosis inversa</li>
      <li>Prefectura Naval Argentina</li>
      <li>EICO (Escuela Industrial Caleta Olivia)</li>
      <li>EBIMAR (Escuela de Biología Marina y laboratorio)</li>
    </ul>
  </li><br/>
</ol>
     </section><br/>
    </div>
  </div>
  </div>


  <div className="scrollable-div">
  <div className="flex justify-center w-full h-screen">
    <div className="max-w-5xl w-full">
    <div className="flex justify-end text-white"><p className="bg-black">Pág 07</p></div><br/>
     <section className="">
      <p className="text-2xl font-semibold">HIPÓTESIS:</p><br/>
      <div className='flex justify-center justify-between'>
      <Image
  src={mapArgentina}
  alt="espacios marítimos"
  width={270}
  height='auto'
  className="relative"
/>
<div>
<Image
  src={golfo}
  alt="espacios marítimos"
  width={500}
  height='auto'
  className="relative"
/>
      </div>
      </div>
     </section><br/>
    </div>
  </div>
  </div>


  <div className="scrollable-div">
  <div className="flex justify-center w-full h-screen">
    <div className="max-w-5xl w-full">
    <div className="flex justify-end text-white"><p className="bg-black">Pág 06</p></div><br/>
     <section className="">
      <p>Luego de realizar un mapeo de la ciudad y de las instituciones que ya estudian este tema a nivel país se sacaron las siguientes conclusiónes:.</p><br/>
      <ul className='list-disc list-inside pl-4'>
      <li>Por un lado, una clara ausencia de instituciones que investiguen sobre el Golfo del lado Santa Cruz.</li>
      <li>Las instituciones que vienen investigando el tema marítimo, enfocan sus estudios a:<br/><br/>
      <div className='pl-4'>
      a) Acuicultura y Agricultura marina: cultivo de organismos marinos para consumo humano.<br/>
          b) Investigación de ecosistemas Marinos: exploración de la biodiversidad marina, dinámica de ecosistemas costeros y marinos, ponen en importancia la conservación y restauración<br/>
          c) Tecnologías Marinas: tecnologías de exploración, observación y monitoreo de los oceanos, recolección de datos oceanográficos<br/>
          d) esalinización y tratamiento de agua marina, investigaciones sobre métodos innovadores de desalinización y purificación de agua marina para consumo humano e industria.
      </div>
      </li>
    </ul>
    <div><br/><br/>
    <p>Teniendo en cuenta esto, el enfoque buscado será diseñar un soporte arquitectónico que impulse y facilite la investigación y desarrollo de actividades Marinas en el Golfo San Jorge.<br/><br/>
    Se centrará en crear un centro de investigación marina innovador y colaborativo, que permita diversas investigaciones, relacionadas con energías oceanicas, acuicultura, bioprospección marina y tecnologías aplicadas.<br/><br/>
    Este centro de investigación marina se integraría en la red existente de instituciones educativas y de investigación, en colaboración con la Universidad de la Patagónia Austral y bajo el asesoramiento y promoción del CONICET, logrando alianzas con instituciones locales. Su enfoque seía interdisciplinario, abordando desde la ingeniería hasta la biología marina y facilitando colaboraciones entre investigadores nacionales e internacionales.</p>
    </div>
     </section><br/>
    </div>
  </div>
  </div>


  <div className="scrollable-div">
  <div className="flex justify-center w-full h-screen sm:relative">
    <div className="max-w-5xl w-full">
    <div className="flex justify-end text-white"><p className="bg-black">Pág 07</p></div><br/>
     <section>
    <Image
  src={caleta}
  alt="espacios marítimos"
  width={1200}
  height='auto'
  className="relative"
/>
     </section><br/>
    </div>
  </div>
  </div>


<div className='flex justify-center sm:relative sm:mt-4'>
{estadoEtapa1 === 'enProceso' && (
        <div>
          {/* Contenido de la etapa en proceso */}
          <p>Trabajando en esta etapa...</p>
          <button onClick={handleCompletado} className="btn-completada">
            Completada
          </button>
        </div>
      )}

{estadoEtapa1 === 'completada' && (
        <div>
          {/* Contenido de la etapa completada */}
          <p>Esta etapa ha sido completada.</p>
        </div>
      )}
</div>

</div>


  );
}
