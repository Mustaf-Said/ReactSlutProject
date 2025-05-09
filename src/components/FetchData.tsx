import "../styles/display.scss";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { FcReading } from "react-icons/fc";
import { FaBookReader } from "react-icons/fa";
import { useContext } from "react";
import { MyContext } from "../context/ContextPrivider";
import { Link } from "react-router-dom";
import BookCard from "./BookCard";
import { API_URL } from "../hooks/useBookDetails";
import useBookDetails from "../hooks/useBookDetails";


function FetchData() {

  const context = useContext(MyContext);
  if (!context) {
    console.log("Something went wrong");
    return context;
  }

  const { author, toggle, toggleHandler, favorites, toggleFavorite,
    reading, toggleReading, renderStars, isZoomed, handleZoomImg } = context;


  // Första arrayen i data.
  const book = author[0];
  //Olika data av bookDetials
  const { description, numberOfPages, publishDate, languages } = useBookDetails(book.key);

  return (
    <div className="display">
      <section >
        {book ? (
          <div key={book.key} className="displaySingleBook">
            <div className="imgDetails">
              {book.cover_i && (
                <img
                  src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                  alt={book.title}
                  className={`page ${isZoomed ? 'zoomed' : ''}`}
                  onClick={handleZoomImg}
                />
              )}
              <p>
                <Link
                  target="_blank"
                  to={`${API_URL}${book.key}/${book.title}`}
                >
                  <button>Borrow</button>
                </Link>
              </p>
              {<button onClick={() => toggleFavorite(book.key)}
                className="favoriteButton">
                {favorites.includes(book.key) ? <FaHeart style={{ color: "red" }} /> : <CiHeart />}
              </button>}
              {<button onClick={() => toggleReading(book.key)}
                className="readButton">
                {reading.includes(book.key) ? <FcReading /> : <FaBookReader style={{ color: "black" }} />}
              </button>}
              {reading.includes(book.key) && <div className="ratingStars" >Betyg: {renderStars(book.key)}</div>}
            </div>
            <div className="displayBookDetails">
              <div className="authorDetails">  {book.has_fulltext && (
                <div >

                  <h1> {book.title}</h1>
                  <p className="authorName" >by <span>{Array.isArray(book.author_name) ? book.author_name.join(", ") : book.author_name}</span></p>
                  <div className={toggle ? "expanded" : "clamped"}>
                    {description || "Loading description..."}
                  </div>
                  <button onClick={toggleHandler}
                    className="readMoreButton">
                    {toggle ? "Read less ▲" : "Read more ▾"}
                  </button>
                </div>
              )}
              </div>
              <div className="aboutBookDetails">
                {numberOfPages && (
                  <p>
                    Pages{" "}
                    <br />
                    <span>
                      {numberOfPages || null}
                    </span>
                  </p>)}
                {publishDate && (
                  <p>
                    Publish Date{" "}
                    <br />
                    <span>
                      {publishDate || null}
                    </span>
                  </p>
                )}
                {languages && (
                  <p>
                    Languages{" "}
                    <br />
                    <span>
                      {languages || null}
                    </span>
                  </p>
                )}

              </div>
            </div>
          </div>
        ) : (
          <p>No results found.</p>
        )}
      </section>

      <p className="titleH3">Other books with the same title</p>
      <section className="sameAuthor">
        {author.filter(book => book && book.key && book.title).slice(1, 6).map((book) => (
          <BookCard
            key={book.key}
            book={book}
            isFavorite={favorites.includes(book.key)}
            isReading={reading.includes(book.key)}
            onToggleFavorite={toggleFavorite}
            onToggleReading={toggleReading}
            renderStars={renderStars}
          />
        ))}
      </section>

    </div>
  );
}

export default FetchData;


