import { Link } from "react-router-dom";

const SingleCategories = ({ subBook }) => {
  const { categories, image, _id } = subBook;
  return (
    <div className=" border border-lime-600 rounded p-5">
      <Link
        to={`/UniqueBookCategories/${_id}`}
        className="max-w-md sm:flex sm:space-x-6 dark:bg-gray-50 dark:text-gray-800"
      >
        <div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
          <img
            src={image}
            alt=""
            className="object-cover object-center w-full h-full rounded dark:bg-gray-500"
          />
        </div>
        <div className="flex flex-col space-y-4">
          <div>
            <h2 className="text-2xl font-semibold pb-4">{categories}</h2>
            <p>Read All {categories} book for level up yourself.</p>
            <button className="my-3 border-2 py-2 px-3 font-semibold text-lime-600 rounded">
              Read
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default SingleCategories;
