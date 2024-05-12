const SingleCategories = ({ subBook }) => {
  const { categories, image } = subBook;
  return (
    <div>
      <div className="max-w-md p-8 sm:flex sm:space-x-6 dark:bg-gray-50 dark:text-gray-800 border border-lime-600 rounded">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCategories;
