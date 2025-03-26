const FighterCard = ({ fighter, isOpponent, onHover }) => {
  return (
    <article
      className={
        isOpponent
          ? 'bg-gradient-to-b from-transparent to-gray-600 h-18 flex items-end relative hover:scale-125 hover:-translate-y-6 transition cursor-pointer grayscale'
          : 'bg-gradient-to-b from-transparent to-primary h-18 flex items-end relative hover:scale-125 hover:-translate-y-6 transition cursor-pointer'
      }
      onMouseEnter={() => onHover(fighter)}
      onMouseLeave={() => onHover(fighter)}
    >
      <img
        className="w-28 relative"
        src={`./fighters/${fighter.name}.webp`}
        alt={`Imagen de ${fighter.name}`}
      />
      {isOpponent && (
        <div className="absolute top-0 right-6 -rotate-45 bg-opacity-50 flex items-center justify-center text-white text-md uppercase font-bold">
          Oponente
        </div>
      )}
    </article>
  );
};

export default FighterCard;
