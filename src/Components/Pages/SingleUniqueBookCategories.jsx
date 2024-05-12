import { Link } from "react-router-dom";

const SingleUniqueBookCategories = ({ book }) => {
  const { name, categories, description, rating, author, image, _id } = book;
  return (
    <div data-aos="zoom-in" data-aos-duration="1000">
      <div className="card  bg-base-100 shadow-xl my-5">
        <figure>
          <img src={image} alt="Image" />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold text-left">{name}</h2>
          <p className="font-semibold text-lg py-2 text-left">{categories}</p>
          <p className="font-medium pb-2 text-left">{description}</p>
          <div className="flex justify-center items-center gap-3 mb-5">
            <p className="border border-orange-500 p-1 rounded-md font-medium">
              Author : {author}
            </p>
            <p className="border border-orange-500 p-1 rounded-md font-medium">
              Rating : {rating}
            </p>
          </div>
          <div className="text-left">
            <Link to={`/uniqueCraftDetails/${_id}`}>
              <button className="btn bg-orange-500 text-white">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleUniqueBookCategories;
