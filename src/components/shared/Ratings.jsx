import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';

export const Ratings = ({ stars }) => {
  const tempStars = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5;

    return (
      <span key={index}>
        {stars >= index + 1 ? <BsStarFill /> : stars >= number ? <BsStarHalf /> : <BsStar />}
      </span>
    );
  });

  return <div className="flex gap-0.5 text-accent">{tempStars}</div>;
};
