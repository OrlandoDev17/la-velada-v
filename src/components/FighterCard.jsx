import { useState } from 'react';

const FIGHTERS = [
  {
    name: 'TheGrefg',
    flag: 'spain',
  },
  {
    name: 'WestCol',
    flag: 'colombia',
  },
  {
    name: 'Viruzz',
    flag: 'spain',
  },
  {
    name: 'Mazza',
    flag: 'argentina',
  },
  {
    name: 'Alana',
    flag: 'mexico',
  },
  {
    name: 'Arigeli',
    flag: 'spain',
  },
  {
    name: 'Andonii',
    flag: 'spain',
  },
  {
    name: 'Belcast',
    flag: 'mexico',
  },
  {
    name: 'Abby',
    flag: 'spain',
  },
  {
    name: 'RoRo',
    flag: 'spain',
  },
  {
    name: 'Perxita',
    flag: 'spain',
  },
  {
    name: 'Gaspi',
    flag: 'argentina',
  },
  {
    name: 'Pereira',
    flag: 'spain',
  },
  {
    name: 'Rivaldios',
    flag: 'mexico',
  },
];

const FightersCard = () => {
  // Estado para almacenar el peleador seleccionado (nombre y bandera)
  const [hoveredFighter, setHoveredFighter] = useState(FIGHTERS[0]);

  return (
    <div className="relative flex flex-col items-center">
      {/* Imagen Ampliada */}
      <picture className="relative flex flex-col justify-center items-center mb-8">
        <img
          className="absolute top-28"
          src="./images/logo-la-velada-v.webp"
          alt=""
        />
        {/* Imagen grande del peleador */}
        <img
          className="relative max-h-[450px] mask"
          src={`./fighters/${hoveredFighter.name}-big.webp`}
          alt={`Imagen de ${hoveredFighter.name}`}
        />
        {/* Bandera del peleador */}
        <img
          className="absolute bottom-24 right-6 w-16 h-16 rounded-full border-4 border-white shadow-lg"
          src={`./flags/${hoveredFighter.flag}.webp`}
          alt={`Bandera de ${hoveredFighter.flag}`}
        />
        <h2 className="text-7xl uppercase text-primary text-center mt-2 absolute -bottom-8">
          {hoveredFighter.name}
        </h2>
      </picture>

      {/* Contenedor de las Cards */}
      <div className="relative flex flex-wrap justify-center gap-x-5 gap-y-16 max-w-236 mt-24">
        {/* Renderizado de las Cards */}
        {FIGHTERS.map(({ name, flag }) => (
          <article
            key={name}
            className="bg-gradient-to-b from-transparent to-primary h-18 flex items-end relative hover:scale-125 transition cursor-pointer"
            onMouseEnter={() => setHoveredFighter({ name, flag })}
            onMouseLeave={() => setHoveredFighter({ name, flag })}
          >
            <img
              className="w-28 relative"
              src={`./fighters/${name}.webp`}
              alt={`Imagen de ${name}`}
            />
          </article>
        ))}
      </div>
    </div>
  );
};

export default FightersCard;
