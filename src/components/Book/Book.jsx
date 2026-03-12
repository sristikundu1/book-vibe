import React, { use } from "react";
import { Star } from "lucide-react";
import { Link } from "react-router";

const Book = ({ singleBook }) => {
  const { bookId, image, bookName, author, category, rating, tags } =
    singleBook;

  return (
    <Link to={`/bookdetails/${bookId}`}>
      <div className="card bg-base-100 shadow-[0_0_5px_rgba(0,0,0,0.2)]  hover:shadow-[0_0_25px_rgba(0,0,0,0.2)]">
        <figure className="px-10 py-10 rounded-lg bg-[rgba(243,243,243,1)]">
          <img
            src={image}
            alt="book"
            className="w-[124.81px] h-[166px]  shadow-[0_5px_20px_rgba(0,0,0,0.3)] rounded-md rotate-[3deg] hover:rotate-0 transition-transform duration-300"
          />
        </figure>
        <div className="card-body items-start text-left w-full">
          <div className="flex gap-4   ">
            {tags.map((tag, index) => (
              <p
                className="text-[rgba(35,190,10,1)] text-lg font-medium text-center bg-[rgba(35,190,10,0.05)] px-2.5 py-2 rounded-xl"
                key={index}
              >
                {tag}
              </p>
            ))}
          </div>
          <h2 className="card-title text-[rgba(19,19,19,1)] text-xl font-bold truncate">
            {bookName}
          </h2>
          <p className="text-[rgba(19,19,19,0.8)] text-lg font-medium">
            By: {author}
          </p>

          <hr className="border-t-1 border-dashed border-[rgba(19,19,19,0.15)] w-full my-1" />

          <div className="flex justify-between w-full items-center text-[rgba(19,19,19,0.8)] text-lg font-medium ">
            <p className="text-left">{category}</p>
            <p className="text-right flex gap-2 items-center justify-end">
              {rating} <Star className="w-4 h-4 text-yellow-500" />
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
