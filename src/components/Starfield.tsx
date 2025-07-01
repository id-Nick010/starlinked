import React from 'react';

type StarProps = {
    id: number;
    x: number;
    y: number;
    delay: number;
}

const Star: React.FC<StarProps> = ({x, y, delay}) => (
    <div 
        className='absolute w-2 h-2 bg-yellow-star/60 rounded-full animate-blink'
        style={{
            top: `${y}%`,
            left: `${x}%`,
            animationDelay: `${delay}s`,
        }}
    />
);

const Starfield: React.FC = () => {
  const stars = Array.from({ length: 150 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 3,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
      {stars.map((star) => (
        <Star key={star.id} {...star} />
      ))}
    </div>
  );
};

export default Starfield;