import axios from "axios";
import toast from "react-hot-toast";

const SingleBorrowBook = ({ book, borrowedBooks, setBorrowedBooks }) => {
  const { name, image, date, today, categories, _id } = book;

  const handleBorrowedBook = async (id) => {
    try {
      const { data1 } = await axios.post(
        `http://localhost:5000/subBooks`,
        book
      );
      console.log(data1);
      const { data2 } = await axios.delete(
        `http://localhost:5000/borrowedd/${_id}`
      );
      const remaining = borrowedBooks.filter((book) => book._id !== id);
      setBorrowedBooks(remaining);
      console.log(data2);
      toast("Book Return Successfully");
    } catch (error) {
      toast(error.message);
    }
  };
  return (
    <div>
      <div className="card bg-base-100 shadow-xl h-2/3">
        <figure>
          <img src={image} alt="book" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p className="text-xl font-semibold my-2">{categories}</p>
          <div>
            <p className="font-semibold my-2">Borrowed Date : {today}</p>
            <p className="font-semibold">Return Date : {date}</p>
          </div>
          <div className="card-actions justify-end">
            <button
              onClick={() => handleBorrowedBook(_id)}
              className="btn bg-lime-500 text-lg"
            >
              Return
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBorrowBook;
