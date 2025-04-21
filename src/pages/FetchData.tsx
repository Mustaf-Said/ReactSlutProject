import "./display.scss";
import { useContext } from "react";
import { MyContext } from "./ContextPrivider";
import { Link } from "react-router-dom";


export const Api_Url = `https://openlibrary.org`;

function FetchData() {
  const context = useContext(MyContext);
  if (!context) {
    console.log("Something went wrong");
    return context;
  }

  const { author, /* deleteHandler */ } = context;

  // Only display the first book.
  const book = author[0];
  console.log(`${Api_Url}${book.key}.json`);
  return (
    <div className="display">
      <section >
        {book ? (
          <div key={book.key} className="displaySingleBook">
            <div>
              {book.cover_i && (
                <img
                  src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                  alt={book.title}
                />
              )}
              <p>
                {/*  Om Boken:{" "} */}
                <Link
                  target="_blank"
                  to={`${Api_Url}${book.key}/${book.title}`}
                >
                  {/*    {book.title} */}
                  <button>Borrow</button>
                </Link>
              </p>
            </div>
            <div>  {book.has_fulltext && (
              <div>

                <h1> {book.title}</h1>
                <p> {Array.isArray(book.author_name) ? book.author_name.join(", ") : book.author_name}</p>

                {/* <button type="button" onClick={() => deleteHandler(book.key)}>Delete</button> */}
              </div>
            )}</div>
          </div>
        ) : (
          <p>No results found.</p>
        )}
      </section>

      <p className="titleH3">More by this author</p>
      <section className="sameAuthor">
        {author.slice(1, 7).map((book) => (
          <div key={book.key}>
            {book.has_fulltext && (
              <div>
                {book.cover_i && (
                  <img
                    src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                    alt={book.title}
                  />
                )}
                <p>
                  {/*   Om Boken:{" "} */}
                  <Link
                    target="_blank"
                    to={`${Api_Url}${book.key}/${book.title}`}
                  >
                    {/*  {book.title} */}
                    <button>Borrow</button>
                  </Link>
                </p>
              </div>
            )}
          </div>
        ))}
      </section>
      {/* 


      <section className="displayMore">
        <p className="titleH3">You might also like</p>

      </section> */}

    </div>
  );
}

export default FetchData;


