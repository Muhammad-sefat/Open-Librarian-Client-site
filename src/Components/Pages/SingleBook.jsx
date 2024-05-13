import { Link } from "react-router-dom";
import Star from "./Star";

const SingleBook = ({ book }) => {
  const { name, photo, description, author, rating, _id } = book;
  return (
    <div>
      <div className="card card-side  bg-base-100 shadow-xl">
        <figure>
          <img className="w-1/2" src={photo} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <h3>Author : {author}</h3>
          <p>{description}</p>
          <div className="flex items-center">
            <Star stars={rating}></Star>
          </div>

          <div className="card-actions justify-end">
            <Link to={`/updateBook/${_id}`}>
              <button className="btn bg-lime-500">Update</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBook;
