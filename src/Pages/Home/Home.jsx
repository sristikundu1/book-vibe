import React from "react";
import Banner from "../../components/Banner/Banner";
import Books from "../Books/Books";
import { useLoaderData } from "react-router";

const Home = () => {
  const allBooks = useLoaderData();

  return (
    <div>
      <Banner></Banner>
      <Books allBooks={allBooks}></Books>
    </div>
  );
};

export default Home;
