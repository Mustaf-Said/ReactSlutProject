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

  const { author, deleteHandler } = context;

  // Only display the first book if there's any
  const book = author[0];

  return (
    <div className="display">
      <section>
        {book ? (
          <ul key={book.key}>
            {book.has_fulltext && (
              <div>
                <li><strong>Title:</strong> {book.title}</li>
                <li><strong>Author:</strong> {Array.isArray(book.author_name) ? book.author_name.join(", ") : book.author_name}</li>
                {book.cover_i && (
                  <img
                    src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                    alt={book.title}
                  />
                )}
                <li>
                  Om Boken:{" "}
                  <Link
                    target="_blank"
                    to={`${Api_Url}${book.key}/${book.title}`}
                  >
                    {book.title}
                  </Link>
                </li>
                <button onClick={() => deleteHandler(book.key)}>Delete</button>
              </div>
            )}
          </ul>
        ) : (
          <p>No results found.</p>
        )}
      </section>
      <section className="sameAuthor">
        <hr />
        <h3>More by this author</h3>
      </section>

      <section className="displayMore">
        <h3>You might also like</h3>
        <hr />
      </section>
    </div>
  );
}

export default FetchData;


