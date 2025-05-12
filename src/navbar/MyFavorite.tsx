import "../styles/favoritesBook.scss";
import { MyContext } from "../context/ContextPrivider";
import { useContext } from "react";
import { FaHeart } from "react-icons/fa";
import { FcReading } from "react-icons/fc";
import { FaBookReader } from "react-icons/fa";
import { TiDeleteOutline } from "react-icons/ti";


function MyFavorite() {

  const context = useContext(MyContext);
  if (!context) {
    console.log("Something went wrong");
    return null;
  }
  const { favorites, author, reading, toggleReading, renderStars, deleteHandler } = context;




  return (
    <div className="favoriteBooksContianer">
      <section className="header">
        <h2>My Favorite Book List</h2> <FaHeart style={{ color: "red", fontSize: "2em" }} />
      </section>
      <ol>
        {author
          .filter(book => favorites.includes(book.key))
          .map(book => (
            <li key={book.key} className="favoriteBooks">
              <span>{book.title}</span>
              {book.cover_i && (
                <div className="deleteButton">
                  <button onClick={() => deleteHandler(book.key)}><TiDeleteOutline /></button>
                  <img
                    src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                    alt={book.title}
                  />
                </div>
              )}
              <button
                onClick={() => toggleReading(book.key)}
                className="readButton"
              >
                {reading.includes(book.key) ? <FcReading /> : <FaBookReader style={{ color: "black" }} />}
              </button>
              {reading.includes(book.key) && <div>Betyg: {renderStars(book.key)}</div>}
            </li>
          ))}
      </ol>

      <hr />

      <section className="header">
        <h2>My Read Book List</h2> <FcReading style={{ fontSize: "2em" }} />
      </section>
      <ol>
        {author
          .filter(book => reading.includes(book.key))
          .map(book => (
            <li key={book.key} className="favoriteBooks">
              <span>{book.title}</span>
              {book.cover_i && (
                <div className="deleteButton">
                  <button onClick={() => deleteHandler(book.key)}><TiDeleteOutline /></button>
                  <img
                    src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                    alt={book.title}
                  />
                </div>
              )}
              <div>Betyg: {renderStars(book.key)}</div>
            </li>
          ))}
      </ol>

    </div>
  );
}

export default MyFavorite;
