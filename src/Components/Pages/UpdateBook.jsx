import axios from "axios";
import toast from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateBook = () => {
  const singleBook = useLoaderData();
  const navigate = useNavigate();
  const { name, photo, category, author, rating, _id } = singleBook;
  console.log(singleBook);
  const handleUpdateBook = async (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.bookname.value;
    const photo = form.photo.value;
    const category = form.category.value;
    const author = form.author.value;
    const rating = parseFloat(form.rating.value);
    const updateBook = {
      name,
      category,
      photo,
      author,
      rating,
    };
    console.log(updateBook);

    try {
      const { data } = await axios.put(
        `http://localhost:5000/books/${_id}`,
        updateBook
      );
      console.log(data);
      if (data.modifiedCount > 0) {
        Swal.fire({
          title: "Success!",
          text: "Update Book Successfully",
          icon: "success",
          confirmButtonText: "Cool",
        });
        form.reset();
        navigate("/all-books");
      }
    } catch (error) {
      toast(error?.message);
    }
  };
  return (
    <div>
      <section className="p-3 dark:bg-gray-100 dark:text-gray-900 my-6">
        <form
          onSubmit={handleUpdateBook}
          noValidate=""
          action=""
          className="container flex flex-col mx-auto space-y-12"
        >
          <fieldset className="grid grid-cols-3 md:w-[70%] mx-auto gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3 mx-auto">
              <div className="col-span-full mb-8">
                <h2 className="text-center text-lg md:text-3xl text-lime-600 font-semibold">
                  Update Your Book
                </h2>
                <p className="md:w-[80%] mx-auto text-center mt-3">
                  {" "}
                  Books ignite the imagination, transporting readers to
                  fantastical worlds and sparking creativity. They inspire new
                  ideas, encourage innovative thinking, and fuel artistic
                  endeavors.
                </p>
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="bookname" className="text-lg font-semibold">
                  Book Name
                </label>
                <input
                  id="bookname"
                  type="text"
                  name="bookname"
                  placeholder="Book name"
                  defaultValue={name}
                  className="w-full border border-lime-500 p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="photo" className="text-lg font-semibold">
                  Book Image
                </label>
                <input
                  id="photo"
                  type="text"
                  name="photo"
                  placeholder="Image URL"
                  defaultValue={photo}
                  className="w-full border border-lime-500 p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="category" className="text-lg font-semibold">
                  Category
                </label>
                <select
                  id="category"
                  type="text"
                  name="category"
                  placeholder="Category"
                  defaultValue={category}
                  className="w-full border border-lime-500 p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                >
                  <option>Novel</option>
                  <option>Self-Help</option>
                  <option>Thriller</option>
                  <option>History</option>
                  <option>Drama</option>
                  <option>Sci-Fi</option>
                </select>
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="author" className="text-lg font-semibold">
                  Author Name
                </label>
                <input
                  id="author"
                  type="text"
                  name="author"
                  placeholder="Author"
                  defaultValue={author}
                  className="w-full border border-lime-500 p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full">
                <label htmlFor="rating" className="text-lg font-semibold">
                  Rating
                </label>
                <input
                  id="rating"
                  type="text"
                  name="rating"
                  placeholder="Rating"
                  defaultValue={rating}
                  className="w-full border border-lime-500 p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>

              <div className="col-span-full bg-lime-600  p-1 rounded-md text-center">
                <button className="text-lg font-semibold text-white">
                  Update Book
                </button>
              </div>
            </div>
          </fieldset>
        </form>
      </section>
    </div>
  );
};

export default UpdateBook;
