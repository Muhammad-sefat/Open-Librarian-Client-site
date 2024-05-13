import toast from "react-hot-toast";

const SingleBorrowBook = ({ book, borrowedBooks, setBorrowedBooks }) => {
  const {
    name,
    image,
    date,
    today,
    categories,
    author,
    description,
    rating,
    _id,
  } = book;

  const handleBorrowedBook = async (id) => {
    const newBook = {
      name,
      image,
      author,
      categories,
      description,
      rating,
    };
    console.log(newBook);
    fetch(`http://localhost:5000/sub_Books`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newBook),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        fetch(`http://localhost:5000/borrowedd/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            const remaining = borrowedBooks.filter((book) => book._id !== id);
            console.log(remaining);
            setBorrowedBooks(remaining);
            toast("Book Return Successfully");
          });
      });
  };
  //   try {
  //     const { data1 } = await axios.post(
  //       `http://localhost:5000/sub_Books`,
  //       newBook
  //     );
  //     console.log(data1);
  //     const { data2 } = await axios.delete(
  //       `http://localhost:5000/borrowedd/${id}`
  //     );
  //     const remaining = borrowedBooks.filter((book) => book._id !== id);
  //     setBorrowedBooks(remaining);
  //     console.log(data2);
  //     toast("Book Return Successfully");
  //   } catch (error) {
  //     toast(error.message);
  //   }
  // };
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
