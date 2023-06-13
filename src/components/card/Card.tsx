import React from 'react';

interface CardProps {
  imageUrl: string;
  date: string;
  category: string;
  heading: string;
  text: string;
}

const Card: React.FC<CardProps> = ({
  date,
  category,
  heading,
  text,
  imageUrl,
}) => {
  return (
    <div className="h-[13rem] w-[17rem] shadow-md">
      <div
        className="h-[5rem] flex justify-between items-end pb-2 text-sm px-4"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="text-white text-[0.5rem]">{date}</div>
        <div className="text-white text-[0.5rem]">{category}</div>
      </div>
      <div className="flex flex-col gap-3 px-4 py-3 break-words overflow-hidden">
        <div className="text-sb-black-100 font-bold text-2xl text-ellipsis overflow-hidden line-clamp-1">
          {heading}
        </div>
        <div className="text-sb-gray-100 text-sm text-ellipsis overflow-hidden line-clamp-3">
          {text}
        </div>
      </div>
    </div>
  );
};

export default Card;
