import React from 'react';

const FighterDetails = ({ hoveredFighter }) => {
  if (!hoveredFighter) {
    return null;
  }

  return (
    <article className="relative flex text-center w-full h-full justify-center items-center">
      {/* Bandera del peleador */}
      <img
        className="absolute bottom-24 right-92  size-16 rounded-full border-4 border-white shadow-lg"
        src={`./flags/${hoveredFighter.flag}.webp`}
        alt={`Bandera de ${hoveredFighter.flag}`}
      />
      <h2 className="text-7xl uppercase text-primary text-center mt-2 absolute bottom-6">
        {hoveredFighter.name}
      </h2>
      <p className="absolute bottom-42 left-42 text-5xl uppercase font-bold text-primary">
        {hoveredFighter.age} Años
      </p>
      <div className="absolute right-40 bottom-36">
        <p className="text-5xl uppercase font-bold text-primary mb-4">
          {hoveredFighter.weight} KG
        </p>
        <p className="text-5xl uppercase font-bold text-primary">
          {hoveredFighter.height} M
        </p>
      </div>
    </article>
  );
};

export default FighterDetails;
