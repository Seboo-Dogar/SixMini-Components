import { useState } from "react";
import { FaStar } from "react-icons/fa";

function StarRating({ noOfStars = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (index) => setRating(index);
  const handleMouseEnter = (index) => setHover(index);
  const handleMouseLeave = () => setHover(rating);

  return (
    <div className="w-full h-96 flex justify-center items-center flex-col bg-blue-950">
      <h1 className="text-4xl text-white p-4 uppercase font-bold">Star Rating</h1>
      <div className="flex gap-3 cursor-pointer p-5">
        {[...Array(noOfStars)].map((_, index) => {
          const starNumber = index + 1;

          return (
            <div
              key={starNumber}
              onClick={() => handleClick(starNumber)}
              onMouseEnter={() => handleMouseEnter(starNumber)}
              onMouseLeave={handleMouseLeave}
              className="transition-transform duration-200 hover:scale-125"
              aria-label={`Rate ${starNumber} out of ${noOfStars}`}
              title={`${starNumber} Star${starNumber > 1 ? "s" : ""}`}
            >
              <FaStar
                className={`transition-colors duration-300 ${
                  starNumber <= (hover || rating)
                    ? "text-yellow-400 drop-shadow-md"
                    : "text-gray-400"
                }`}
                size={42}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default StarRating;
