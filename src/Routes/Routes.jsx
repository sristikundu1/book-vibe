import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import About from "../components/About/About";
import BookDetails from "../components/BookDetails/BookDetails";
import BookList from "../components/BookList/BookList";
import BookPage from "../components/BookPage/BookPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        loader: () => fetch("booksData.json"),
        path: "/",
        Component: Home,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/listed-books",
        loader: () => fetch("booksData.json"),
        Component: BookList,
      },
      {
        path: "/pages-to-read",
        loader: () => fetch("booksData.json"),
        Component: BookPage,
      },
      {
        path: "/bookdetails/:id",
        loader: () => fetch("booksData.json"),
        Component: BookDetails,
      },
    ],
  },
]);
