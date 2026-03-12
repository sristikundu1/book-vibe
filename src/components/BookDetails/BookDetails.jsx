import React from "react";
import { useLoaderData } from "react-router";
import { useParams } from "react-router";

const BookDetails = () => {
  const { id } = useParams();

  //   convert the id from string to number
  const bookId = parseInt(id);
  const allBooks = useLoaderData();

  //   find the book
  const singleBook = allBooks.find((book) => book.bookId === bookId);
  const {
    image,
    bookName,
    author,
    category,
    totalPages,
    publisher,
    yearOfPublishing,
    rating,
    tags,
    review,
  } = singleBook;

  return (
    <div className="max-w-10/12 mx-auto my-5">
      <div className="hero  ">
        <div className="hero-content flex-col lg:flex-row gap-8 lg:items-stretch">
          <figure className="px-10 py-10 rounded-lg bg-[rgba(243,243,243,1)] w-1/2 flex justify-center">
            <img
              src={image}
              alt="book"
              className="w-[425px]  h-auto object-contain rounded-md"
            />
          </figure>

          <div className="w-1/2">
            <h1 className="text-[40px] font-bold text-left">{bookName}</h1>
            <p className="text-[rgba(19,19,19,0.8)] text-lg font-medium text-left">
              By: {author}
            </p>
            <div className="divider"></div>
            <p className="text-[rgba(19,19,19,0.8)] text-lg font-medium text-left">
              {category}
            </p>
            <div className="divider"></div>
            <p className="text-sm mb-5 font-medium leading-8 text-[rgba(19,19,19,0.7)] text-left">
              <span className="font-bold text-black">Review:</span> {review}
            </p>

            <div className="flex gap-4 justify-baseline items-center font-bold text-black mb-5 ">
              Tag
              {tags.map((tag, index) => (
                <p
                  className="text-[rgba(35,190,10,1)] text-lg font-medium text-center bg-[rgba(35,190,10,0.05)] px-2.5 py-2 rounded-xl"
                  key={index}
                >
                  #{tag}
                </p>
              ))}
            </div>

            <div className="divider"></div>

            <p className="text-lg font-medium leading-6 text-[rgba(19,19,19,0.7)] text-left mb-5">
              Number of Pages:
              <span className="font-bold text-black">{totalPages}</span>
            </p>

            <p className="text-lg font-medium leading-6 text-[rgba(19,19,19,0.7)] text-left mb-5">
              Publisher:
              <span className="font-bold text-black">{publisher}</span>
            </p>

            <p className="text-lg font-medium leading-6 text-[rgba(19,19,19,0.7)] text-left mb-5">
              Year of Publishing:
              <span className="font-bold text-black">{yearOfPublishing}</span>
            </p>

            <p className="text-lg font-medium leading-6 text-[rgba(19,19,19,0.7)] text-left mb-5">
              Rating:
              <span className="font-bold text-black">{rating}</span>
            </p>

            <div className="flex gap-4">
              <button className="btn btn-neutral btn-outline border-[rgba(19,19,19,0.3)]  ">
                Read
              </button>
              <button className="btn py-4 px-5 rounded-sm bg-[rgba(89,198,210,1)] text-white">
                WishList
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
