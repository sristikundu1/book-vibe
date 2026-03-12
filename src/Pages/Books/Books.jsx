import React from "react";
import Book from "../../components/Book/Book";
import { Suspense } from "react";

const Books = ({ allBooks }) => {
  return (
    <div className="max-w-10/12 mx-auto">
      <h2 className="text-[40px] font-bold text-center mb-6">Books</h2>

      <Suspense
        fallback={<span className="loading loading-dots loading-xl"></span>}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {allBooks.map((singleBook) => (
            <Book key={singleBook.bookId} singleBook={singleBook}></Book>
          ))}
        </div>
      </Suspense>
    </div>
  );
};

export default Books;
