import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import SingleBorrowBook from "./SingleBorrowBook";

const BorrowedBooks = () => {
  const [borrowedBooks, setBorrowedBooks] = useState([]);
  console.log(borrowedBooks);
  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios("http://localhost:5000/borrowedBook");
        console.log(data);
        setBorrowedBooks(data);
      } catch (error) {
        toast(error.message);
      }
    };
    getData();
  }, []);
  return (
    <div>
      <h2 className="text-center my-3 text-xl md:text-3xl font-semibold text-lime-500">
        My Borrowed Books
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 my-8">
        {borrowedBooks.map((book) => (
          <SingleBorrowBook
            key={book._id}
            book={book}
            borrowedBooks={borrowedBooks}
            setBorrowedBooks={setBorrowedBooks}
          ></SingleBorrowBook>
        ))}
      </div>
    </div>
  );
};

export default BorrowedBooks;
