import { useState } from 'react';

const FIGHTERS = [
  {
    name: 'TheGrefg',
    flag: 'spain',
    age: '27',
    weight: '70.9',
    height: '1.78',
  },
  {
    name: 'WestCol',
    flag: 'colombia',
    age: '24',
    weight: '66',
    height: '1.65',
  },
  {
    name: 'Viruzz',
    flag: 'spain',
    age: '32',
    weight: '78.5',
    height: '1.82',
  },
  {
    name: 'Mazza',
    flag: 'argentina',
    age: '24',
    weight: '84',
    height: '1.76',
  },
  {
    name: 'Alana',
    flag: 'mexico',
    age: '24',
    weight: '56',
    height: '1.56',
  },
  {
    name: 'Arigeli',
    flag: 'spain',
    age: '22',
    weight: '56',
    height: '1.60',
  },
  {
    name: 'Andonii',
    flag: 'spain',
    age: '22',
    weight: '115',
    height: '1.87',
  },
  {
    name: 'Belcast',
    flag: 'mexico',
    age: '26',
    weight: '90',
    height: '1.78',
  },
  {
    name: 'Abby',
    flag: 'spain',
    age: '24',
    weight: '57',
    height: '1.72',
  },
  {
    name: 'RoRo',
    flag: 'spain',
    age: '23',
    weight: '57',
    height: '1.49',
  },
  {
    name: 'Perxita',
    flag: 'spain',
    age: '33',
    weight: '80',
    height: '1.86',
  },
  {
    name: 'Gaspi',
    flag: 'argentina',
    age: '22',
    weight: '85',
    height: '1.75',
  },
  {
    name: 'Pereira',
    flag: 'spain',
    age: '26',
    weight: '63',
    height: '1.67',
  },
  {
    name: 'Rivaldios',
    flag: 'mexico',
    age: '24',
    weight: '67',
    height: '1.70',
  },
];

const FightersCard = () => {
  // Estado para almacenar el peleador seleccionado (nombre y bandera)
  const [hoveredFighter, setHoveredFighter] = useState(FIGHTERS[0]);

  return (
    <div className="relative flex flex-col items-center">
      {/* Imagen Ampliada */}
      <article className="relative flex flex-col justify-center items-center mb-8">
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
        <p className="absolute -left-48 text-5xl uppercase font-bold text-primary">
          {hoveredFighter.age} Años
        </p>
        <div className="absolute -right-46">
          <p className="text-5xl uppercase font-bold text-primary mb-4">
            {hoveredFighter.weight} KG
          </p>
          <p className="text-5xl uppercase font-bold text-primary">
            {hoveredFighter.height} M
          </p>
        </div>
      </article>

      {/* Contenedor de las Cards */}
      <div className="relative flex flex-wrap justify-center gap-x-5 gap-y-16 max-w-236 mt-24">
        {/* Renderizado de las Cards */}
        {FIGHTERS.map(({ name, flag, age, weight, height }) => (
          <article
            key={name}
            className="bg-gradient-to-b from-transparent to-primary h-18 flex items-end relative hover:scale-125 transition cursor-pointer"
            onMouseEnter={() =>
              setHoveredFighter({ name, flag, age, weight, height })
            }
            onMouseLeave={() =>
              setHoveredFighter({ name, flag, age, weight, height })
            }
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
