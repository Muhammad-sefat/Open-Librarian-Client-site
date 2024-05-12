import { useContext, useEffect } from "react";
import { AuthContext } from "../AuthProvider";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";

const MyModel = ({ handleSubmit, uniqueBookDetails }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);

  console.log(uniqueBookDetails);

  const { image, name, categories, _id, author, description, rating } =
    uniqueBookDetails;
  let newDate = new Date();
  let today = newDate.toLocaleDateString();

  const handleForm = async (e) => {
    e.preventDefault();
    const form = e.target;
    const userName = form.userName.value;
    const email = form.email.value;
    const date = form.date.value;
    const newBorroedBook = {
      userName,
      email,
      date,
      name,
      image,
      categories,
      today,
      author,
      description,
      rating,
    };
    try {
      const { data1 } = await axios.post(
        `http://localhost:5000/borrowed`,
        newBorroedBook
      );
      console.log(data1);
      toast("Book Borrowed Successfully");
      e.target.reset();
      const { data2 } = await axios.delete(
        `http://localhost:5000/SubBooks/${_id}`
      );
      console.log(data2);
      navigate("/borrowed-book");
    } catch (err) {
      toast(err?.message);
    }
  };
  return (
    <div className="relative z-50">
      <div className="modal-wrapper" onClick={handleSubmit}></div>
      <div className="modal-container flex items-center justify-center text-center dark:bg-gray-50 dark:text-gray-800">
        <form
          onSubmit={handleForm}
          noValidate=""
          action=""
          className="flex flex-col w-full max-w-4xl  p-12 rounded-3xl  shadow-lg dark:text-gray-800"
        >
          <label
            htmlFor="username"
            className="self-start text-xs font-semibold"
          >
            User Name
          </label>
          <input
            id="username"
            type="text"
            name="userName"
            defaultValue={user?.displayName}
            className="flex items-center border h-12 px-4 mt-2 rounded dark:text-gray-50 focus:outline-none focus:ring-2 focus:dark:border-violet-600 focus:dark:ring-violet-600"
          />
          <label
            htmlFor="email"
            className="self-start mt-3 text-xs font-semibold"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            defaultValue={user?.email}
            className="flex items-center border h-12 px-4 mt-2 rounded dark:text-gray-50 focus:outline-none focus:ring-2 focus:dark:border-violet-600 focus:dark:ring-violet-600"
          />
          <label
            htmlFor="date"
            className="self-start mt-3 text-xs font-semibold"
          >
            Return Date
          </label>
          <input
            id="date"
            type="date"
            name="date"
            className="flex items-center border h-12 px-4 mt-2 rounded dark:text-gray-50 focus:outline-none focus:ring-2 focus:dark:border-violet-600 focus:dark:ring-violet-600"
          />
          <button
            // onClick={handleSubmit}
            type="submit"
            className="flex items-center justify-center border h-12 px-6 mt-8 text-sm font-semibold rounded dark:bg-violet-600 dark:text-gray-50"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default MyModel;
