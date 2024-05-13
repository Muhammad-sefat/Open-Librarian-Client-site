import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import SingleCategories from "./SingleCategories";

const BookCategories = () => {
  const [subBooks, setSubBooks] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios(`http://localhost:5000/subBooks`);
        setSubBooks(data);
      } catch (error) {
        toast(error.message);
      }
    };
    getData();
  }, []);
  return (
    <div className="my-6">
      <h2 className="text-xl md:text-3xl text-lime-600 font-semibold text-center">
        Our Book Collections
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 my-8">
        {subBooks.slice(0, 6).map((subBook) => (
          <SingleCategories
            key={subBook._id}
            subBook={subBook}
          ></SingleCategories>
        ))}
      </div>
    </div>
  );
};

export default BookCategories;
