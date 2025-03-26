import React from 'react';
import BoxerCard from './FighterCard'; // Importamos el componente BoxerCard

const BoxerGrid = ({ fighters, hoveredFighter, onHover }) => {
  // Dividir los peleadores en dos grupos
  const firstRowTop = fighters.slice(0, 3); // TheGrefg, Viruzz, Alana
  const secondRowTop = fighters.slice(7, 10); // WestCol, Mazza, Arigeli
  const firstRowBottom = fighters.slice(3, 7); // Andonii, Abby, Perxita, Pereira
  const secondRowBottom = fighters.slice(10); // Belcast, RoRo, Gaspi, Rivaldios

  return (
    <div className="grid gap-y-16 mt-12">
      {/* Primera fila */}
      <div className="col-span-2 flex gap-4 justify-center">
        {/* Parte izquierda de la primera fila */}
        <div className="grid grid-cols-3 gap-4">
          {firstRowTop.map((fighter) => (
            <BoxerCard
              key={fighter.name}
              fighter={fighter}
              isOpponent={fighter.name === hoveredFighter?.opponent}
              onHover={onHover}
            />
          ))}
        </div>
        {/* Espacio en el centro de la primera fila */}
        <div className="w-14"></div>
        {/* Parte derecha de la primera fila */}
        <div className="grid grid-cols-3 gap-4">
          {secondRowTop.map((fighter) => (
            <BoxerCard
              key={fighter.name}
              fighter={fighter}
              isOpponent={fighter.name === hoveredFighter?.opponent}
              onHover={onHover}
            />
          ))}
        </div>
      </div>

      {/* Segunda fila */}
      <div className="col-span-2 flex gap-4 justify-center">
        {firstRowBottom.concat(secondRowBottom).map((fighter) => (
          <BoxerCard
            key={fighter.name}
            fighter={fighter}
            isOpponent={fighter.name === hoveredFighter?.opponent}
            onHover={onHover}
          />
        ))}
      </div>
    </div>
  );
};

export default BoxerGrid;
