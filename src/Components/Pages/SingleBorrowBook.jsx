const SingleBorrowBook = ({ book }) => {
  const { name, image, date, today, categroies } = book;
  return (
    <div>
      <div className="card bg-base-100 shadow-xl h-2/3">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{categroies}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Return</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBorrowBook;
