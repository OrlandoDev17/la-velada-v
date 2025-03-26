import { useState } from 'react';
import FighterGrid from './FighterGrid';
import FighterDetails from './FighterDetails';

const FIGHTERS = [
  {
    name: 'TheGrefg',
    flag: 'spain',
    age: '27',
    weight: '70.9',
    height: '1.78',
    opponent: 'WestCol',
  },
  {
    name: 'Viruzz',
    flag: 'spain',
    age: '32',
    weight: '78.5',
    height: '1.82',
    opponent: 'Mazza',
  },
  {
    name: 'Alana',
    flag: 'mexico',
    age: '24',
    weight: '56',
    height: '1.56',
    opponent: 'Arigeli',
  },
  {
    name: 'Andonii',
    flag: 'spain',
    age: '22',
    weight: '115',
    height: '1.87',
    opponent: 'Belcast',
  },
  {
    name: 'Abby',
    flag: 'spain',
    age: '24',
    weight: '57',
    height: '1.72',
    opponent: 'RoRo',
  },
  {
    name: 'Perxita',
    flag: 'spain',
    age: '33',
    weight: '80',
    height: '1.86',
    opponent: 'Gaspi',
  },
  {
    name: 'Pereira',
    flag: 'spain',
    age: '26',
    weight: '63',
    height: '1.67',
    opponent: 'Rivaldios',
  },
  {
    name: 'WestCol',
    flag: 'colombia',
    age: '24',
    weight: '66',
    height: '1.65',
    opponent: 'TheGrefg',
  },
  {
    name: 'Mazza',
    flag: 'argentina',
    age: '24',
    weight: '84',
    height: '1.76',
    opponent: 'Viruzz',
  },
  {
    name: 'Arigeli',
    flag: 'spain',
    age: '22',
    weight: '56',
    height: '1.60',
    opponent: 'Alana',
  },
  {
    name: 'Belcast',
    flag: 'mexico',
    age: '26',
    weight: '90',
    height: '1.78',
    opponent: 'Andonii',
  },
  {
    name: 'RoRo',
    flag: 'spain',
    age: '23',
    weight: '57',
    height: '1.49',
    opponent: 'Abby',
  },
  {
    name: 'Gaspi',
    flag: 'argentina',
    age: '22',
    weight: '85',
    height: '1.75',
    opponent: 'Perxita',
  },
  {
    name: 'Rivaldios',
    flag: 'mexico',
    age: '24',
    weight: '67',
    height: '1.70',
    opponent: 'Pereira',
  },
];

const FightersCard = () => {
  // Estado para almacenar el peleador seleccionado (nombre y bandera)
  const [hoveredFighter, setHoveredFighter] = useState(null);

  return (
    <div className="relative flex flex-col items-center">
      {/* Espacio reservado para la imagen grande o el logo */}
      <div className="relative w-[800px] h-[550px] flex items-center justify-center overflow-hidden">
        <img
          className="w-100 absolute"
          src="./images/logo-la-velada-v.webp"
          alt="Logo de la Velada del Año V"
        />
        {/* Imagen grande del peleador */}
        {hoveredFighter && (
          <img
            className="w-96 relative flex mask transition duration-300 ease-in-out"
            src={`./fighters/${hoveredFighter.name}-big.webp`}
            alt={`Imagen de ${hoveredFighter.name}`}
            style={{
              opacity: hoveredFighter ? 1 : 0,
              translateY: hoveredFighter ? 0 : 20,
            }}
          />
        )}
      </div>

      {/* Sección de Detalles del Peleador */}
      <FighterDetails hoveredFighter={hoveredFighter} />

      {/* Contenedor de las Cards */}
      <FighterGrid
        fighters={FIGHTERS}
        hoveredFighter={hoveredFighter}
        onHover={(fighter) => setHoveredFighter(fighter)}
      />
    </div>
  );
};

export default FightersCard;
