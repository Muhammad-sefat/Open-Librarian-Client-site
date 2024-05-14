import axios from "axios";
import { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../AuthProvider";

const AddBook = () => {
  const { user } = useContext(AuthContext);
  const email = user?.email;
  const handleAddBook = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.bookname.value;
    const photo = form.photo.value;
    const category = form.category.value;
    const description = form.description.value;
    const author = form.author.value;
    const quantity = parseFloat(form.quantity.value);
    const rating = parseFloat(form.rating.value);
    const aboutBook = form.aboutbook.value;

    const newBook = {
      name,
      photo,
      category,
      description,
      author,
      quantity,
      rating,
      aboutBook,
      email,
    };
    try {
      const { data } = await axios.post(`http://localhost:5000/book`, newBook, {
        withCredentials: true,
      });
      console.log(data);
      toast("Add Book Successfully");
      e.target.reset();
    } catch (err) {
      toast(err?.message);
    }
  };
  return (
    <div>
      <section className="p-3 dark:bg-gray-100 dark:text-gray-900">
        <form
          onSubmit={handleAddBook}
          noValidate=""
          action=""
          className="container flex flex-col mx-auto space-y-12"
        >
          <fieldset className="grid grid-cols-5 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
            <div className="space-y-2 col-span-full lg:col-span-2">
              <p className="text-2xl font-semibold">Benefit of Reading Book</p>
              <p>
                <span className="text-lg font-semibold">
                  Knowledge and Learning:
                </span>{" "}
                Books are a treasure trove of information, providing insights
                into different subjects, cultures, and perspectives. They expand
                our understanding of the world and enhance our knowledge base.
              </p>
              <p>
                <span className="text-lg font-semibold">
                  Improves Cognitive Abilities:
                </span>{" "}
                Reading exercises the brain, improving concentration, critical
                thinking, and problem-solving skills. It enhances vocabulary and
                language skills, fostering effective communication.
              </p>
              <p>
                <span className="text-lg font-semibold">
                  Stress Reduction and Relaxation:
                </span>{" "}
                Immersing oneself in a good book can be a form of escapism,
                reducing stress and anxiety. It provides a mental break from the
                pressures of daily life, promoting relaxation and mental
                well-being.
              </p>
              <p>
                <span className="text-lg font-semibold">
                  Empathy and Emotional Intelligence:
                </span>{" "}
                Fictional stories allow readers to step into the shoes of
                diverse characters, fostering empathy and emotional
                intelligence. They promote understanding of different
                perspectives and experiences, enhancing interpersonal
                relationships.
              </p>
              <p>
                <span className="text-lg font-semibold">
                  Personal Growth and Development:
                </span>{" "}
                Reading self-help and personal development books can facilitate
                self-reflection, growth, and transformation. They offer valuable
                insights, guidance, and inspiration for achieving personal and
                professional goals.
              </p>
            </div>
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full mb-8">
                <h2 className="text-center text-lg md:text-3xl text-lime-600 font-semibold">
                  Add Your Book
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
              <div className="col-span-full">
                <label htmlFor="description" className="text-lg font-semibold">
                  Short Description
                </label>
                <input
                  id="description"
                  type="text"
                  name="description"
                  placeholder="description"
                  className="w-full border border-lime-500 p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label htmlFor="author" className="text-lg font-semibold">
                  Author Name
                </label>
                <input
                  id="author"
                  type="text"
                  name="author"
                  placeholder="Author"
                  className="w-full border border-lime-500 p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label htmlFor="quantity" className="text-lg font-semibold">
                  Book Quantity
                </label>
                <input
                  id="quantity"
                  type="text"
                  name="quantity"
                  placeholder="Quantity"
                  className="w-full border border-lime-500 p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label htmlFor="rating" className="text-lg font-semibold">
                  Rating(1-5)
                </label>
                <input
                  id="rating"
                  type="text"
                  name="rating"
                  placeholder="Rating"
                  className="w-full border border-lime-500 p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full">
                <label htmlFor="about-book" className="text-lg font-semibold">
                  About Book
                </label>
                <textarea
                  id="about-book"
                  name="aboutbook"
                  defaultValue=" Books are a treasure trove of information, providing insights into different subjects, cultures, and perspectives. They expand our understanding of the world and enhance our knowledge base.the benefits of reading books are multifaceted, contributing to intellectual stimulation, emotional well-being, personal growth, and enjoyment of life."
                  className="w-full border border-lime-500 p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                ></textarea>
              </div>
              <div className="col-span-full bg-lime-600  p-1 rounded-md text-center">
                <button className="text-lg font-semibold text-white">
                  Add Book
                </button>
              </div>
            </div>
          </fieldset>
        </form>
      </section>
    </div>
  );
};

export default AddBook;
