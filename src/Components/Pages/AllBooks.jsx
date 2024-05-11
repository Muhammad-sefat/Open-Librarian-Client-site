import axios from "axios";
import { useEffect, useState } from "react";
import SingleBook from "./SingleBook";

const AllBooks = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios("http://localhost:5000/books");
      setBooks(data);
    };
    getData();
  }, []);
  return (
    <div>
      <h1 className="text-3xl font-semibold text-center my-5 bg-lime-500 p-2 rounded-md">
        Our All Book Here
      </h1>
      <div className="grid lg:grid-cols-2 gap-5 py-5">
        {books.map((book) => (
          <SingleBook key={book._id} book={book}></SingleBook>
        ))}
      </div>
    </div>
  );
};

export default AllBooks;
