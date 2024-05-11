import axios from "axios";
import { useEffect, useState } from "react";
import SingleBook from "./SingleBook";

const AllBooks = () => {
  const [books, setBooks] = useState([]);
  console.log(books);
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios("http://localhost:5000/books");
      console.log(data);
      setBooks(data);
    };
    getData();
  }, []);
  return (
    <div>
      <h1>Our All Book Here</h1>
      <div className="grid lg:grid-cols-2 gap-5">
        {books.map((book) => (
          <SingleBook key={book._id} book={book}></SingleBook>
        ))}
      </div>
    </div>
  );
};

export default AllBooks;
