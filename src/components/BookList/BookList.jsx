import { ChevronDown } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoreBook } from "../../utils/localstorage";
import ListBookCard from "../ListBookCard/ListBookCard";

const BookList = () => {
  const [readBooks, setReadBooks] = useState([]);
  const allBooks = useLoaderData();

  useEffect(() => {
    const storeBooksData = getStoreBook();
    const convertedStoreBooks = storeBooksData.map((id) => parseInt(id));
    const myReadBooks = allBooks.filter((book) =>
      convertedStoreBooks.includes(book.bookId),
    );
    setReadBooks(myReadBooks);
  }, []);

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
              <a>Rating</a>
            </li>
            <li>
              <a>Number of pages</a>
            </li>
            <li>
              <a>Publisher year</a>
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
              <ListBookCard key={book.bookId} book={book}></ListBookCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default BookList;
