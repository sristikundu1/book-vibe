import { MapPin, StickyNote, Users } from "lucide-react";
import React from "react";
import { Link } from "react-router";

const ListBookCard = ({ book, onRemove }) => {
  const {
    bookId,
    image,
    bookName,
    author,
    category,
    totalPages,
    publisher,
    yearOfPublishing,
    rating,
    tags,
  } = book;
  return (
    <div>
      <div className="card card-side border border-[rgba(19,19,19,0.15)] rounded-xl pl-5 pt-5">
        <figure className="px-10 py-10 rounded-xl bg-[rgba(243,243,243,1)] w-56 h-56">
          <img src={image} alt="book" className="w-[129.32px] h-44" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{bookName}</h2>
          <p className="text-[rgba(19,19,19,0.8)] text-sm font-medium">
            By: {author}
          </p>
          <div className="flex justify-baseline items-center gap-5">
            <div className="flex gap-4 justify-baseline items-center font-bold text-black text-sm ">
              Tag
              {tags.map((tag, index) => (
                <p
                  className="text-[rgba(35,190,10,1)] text-sm font-medium text-center bg-[rgba(35,190,10,0.05)] px-2.5 py-2 rounded-xl"
                  key={index}
                >
                  #{tag}
                </p>
              ))}
            </div>
            <p className="text-sm font-medium leading-6 text-[rgba(19,19,19,0.7)] text-left  flex justify-baseline items-center">
              <MapPin className="w-5 mr-2"></MapPin> Year of Publishing:{" "}
              {yearOfPublishing}
            </p>
          </div>

          <div className="flex justify-baseline items-center gap-3 my-0">
            <div>
              <p className="text-sm font-medium leading-6 text-[rgba(19,19,19,0.6)] text-left  flex justify-baseline items-center my-0">
                <Users className="w-5 mr-2 text-[rgba(19,19,19,0.6)] "></Users>{" "}
                Publisher:{publisher}
              </p>
            </div>

            <div>
              <p className="text-sm font-medium leading-6 text-[rgba(19,19,19,0.6)] text-left my-0 flex justify-baseline items-center">
                <StickyNote className="w-5 mr-2 text-[rgba(19,19,19,0.6)] "></StickyNote>{" "}
                Page :{totalPages}
              </p>
            </div>
          </div>

          <div className="divider my-0"></div>

          <div className="card-actions justify-baseline flex gap-4">
            <p className="text-[rgba(50,142,255,1)] text-sm font-medium text-center bg-[rgba(50,142,255,0.15)]  py-2 rounded-2xl">
              category: {category}
            </p>
            <p className="text-[rgba(255,172,51,1)] text-sm font-medium text-center bg-[rgba(255,172,51,0.15)] py-2 rounded-2xl">
              Rating: {rating}
            </p>
            <Link to={`/bookdetails/${bookId}`}>
              <button className="btn py-4 px-5 rounded-2xl bg-[rgba(35,190,10,1)] text-white ">
                View Details
              </button>
            </Link>

            <button
              onClick={() => onRemove(bookId)}
              className="btn py-4 px-5 rounded-2xl bg-[rgba(89,198,210,1)] text-white "
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListBookCard;
