import { ChevronDown } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoreBook, removeBookId } from "../../utils/localstorage";
import ListBookCard from "../ListBookCard/ListBookCard";
import Swal from "sweetalert2";

const BookList = () => {
  const [readBooks, setReadBooks] = useState([]);
  const [wishlistBooks, setWishlistBooks] = useState([]);
  const [sort, setSort] = useState("");
  const allBooks = useLoaderData();

  useEffect(() => {
    // Read Book
    const storeBooksData = getStoreBook("ReadBook").map(Number);
    const convertedStoreBooks = storeBooksData.map((id) => parseInt(id));
    const myReadBooks = allBooks.filter((book) =>
      convertedStoreBooks.includes(book.bookId),
    );
    setReadBooks(myReadBooks);

    // Wishlist Books
    const wishlistBookIds = getStoreBook("WishListBook").map(Number);
    const wishlistBooksList = allBooks.filter((book) =>
      wishlistBookIds.includes(book.bookId),
    );
    setWishlistBooks(wishlistBooksList);
  }, [allBooks]);

  //   sort book by different condition
  const handleSort = (type) => {
    setSort(type);

    if (type === "ratings") {
      const SortByRating = [...readBooks].sort((a, b) => a.rating - b.rating);
      setReadBooks(SortByRating);
    }

    if (type === "pages") {
      const SortByRating = [...readBooks].sort(
        (a, b) => a.totalPages - b.totalPages,
      );
      setReadBooks(SortByRating);
    }

    if (type === "pyear") {
      const SortByRating = [...readBooks].sort(
        (a, b) => a.yearOfPublishing - b.yearOfPublishing,
      );
      setReadBooks(SortByRating);
    }
  };

  //   remove book from ui and localstorage
  const handleRemoveBooks = (id, key) => {
    removeBookId(id, key);

    // Update the correct state
    if (key === "ReadBook") {
      setReadBooks((prev) => prev.filter((book) => book.bookId !== id));
    } else if (key === "WishListBook") {
      setWishlistBooks((prev) => prev.filter((book) => book.bookId !== id));
    }
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      },
    });
    Toast.fire({
      icon: "success",
      title: "Book has Been Removed",
    });
  };

  return (
    <div className="max-w-10/12 mx-auto">
      <div className="rounded-xl bg-[rgba(19,19,19,0.05)] p-4 mt-5">
        <h2 className="text-[40px] font-bold text-center mb-6">Books</h2>
      </div>

      {/* sort dropdown buttton  */}
      <div className="flex justify-center my-5">
        <div className=" dropdown dropdown-start">
          <div
            tabIndex={0}
            role="button"
            className="btn py-4 px-5 m-1 rounded-lg bg-[rgba(35,190,10,1)] text-white "
          >
            Sort By <ChevronDown></ChevronDown>
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li>
              <a onClick={() => handleSort("ratings")}>Rating</a>
            </li>
            <li>
              <a onClick={() => handleSort("pages")}>Number of pages</a>
            </li>
            <li>
              <a onClick={() => handleSort("pyear")}>Publisher year</a>
            </li>
          </ul>
        </div>
      </div>

      <Tabs>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>WishList Books</Tab>
        </TabList>

        <TabPanel>
          <div className="flex flex-col gap-7 my-7">
            {readBooks.map((book) => (
              <ListBookCard
                key={book.bookId}
                book={book}
                onRemove={(id) => handleRemoveBooks(id, "ReadBook")}
              ></ListBookCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="flex flex-col gap-7 my-7">
            {wishlistBooks.map((book) => (
              <ListBookCard
                key={book.bookId}
                book={book}
                onRemove={(id) => handleRemoveBooks(id, "WishListBook")}
              ></ListBookCard>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default BookList;
