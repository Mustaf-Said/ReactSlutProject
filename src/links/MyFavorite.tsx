import "./favoritesBook.scss";
import { MyContext } from "../pages/ContextPrivider";
import { useContext } from "react";
import { FaHeart } from "react-icons/fa";
import { FcReading } from "react-icons/fc";
import { FaBookReader } from "react-icons/fa";



function MyFavorite() {

  const context = useContext(MyContext);
  if (!context) {
    console.log("Something went wrong");
    return null;
  }
  const { favorites, author, reading, toggleReading, renderStars } = context;




  return (
    <div className="favoriteBooks">
      <div className="favoriteSection">
        <section className="header">
          <h2>My Favorite Book List</h2> <FaHeart style={{ color: "red", fontSize: "2em" }} />
        </section>
        <ol>
          {author
            .filter(book => favorites.includes(book.key))
            .map(book => (
              <li key={book.key} className="favoriteBook">
                <span>{book.title}</span>
                {book.cover_i && (
                  <img
                    src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                    alt={book.title}
                  />
                )}
                <button
                  onClick={() => toggleReading(book.key)}
                  className="readButton"
                >
                  {reading.includes(book.key) ? <FcReading /> : <FaBookReader style={{ color: "black" }} />}
                </button>
              </li>
            ))}
        </ol>
      </div>

      <div className="readingSection">
        <hr />
        <section className="header">
          <h2>My Reading Book List</h2> <FcReading style={{ fontSize: "2em" }} />
        </section>
        <ol>
          {author
            .filter(book => reading.includes(book.key))
            .map(book => (
              <li key={book.key} className="favoriteBook">
                <span>{book.title}</span>
                {book.cover_i && (
                  <img
                    src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                    alt={book.title}
                  />
                )}
                <div>Betyg: {renderStars(book.key)}</div>
              </li>
            ))}
        </ol>
      </div>
    </div>
  );
}

export default MyFavorite;
