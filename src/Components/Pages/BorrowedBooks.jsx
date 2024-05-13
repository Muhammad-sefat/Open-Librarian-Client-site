import { useContext, useEffect, useState } from "react";
import SingleBorrowBook from "./SingleBorrowBook";
import { AuthContext } from "../AuthProvider";

const BorrowedBooks = () => {
  const [borrowedBooks, setBorrowedBooks] = useState([]);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    fetch(`http://localhost:5000/borrowedBook/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setBorrowedBooks(data);
      });
  }, [user]);
  return (
    <div>
      <h2 className="text-center my-3 text-xl md:text-3xl font-semibold text-lime-500">
        My Borrowed Books
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
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
