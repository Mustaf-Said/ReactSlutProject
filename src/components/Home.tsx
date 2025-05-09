import "../styles/home.scss";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { FcReading } from "react-icons/fc";
import { FaBookReader } from "react-icons/fa";
import { useContext } from "react";
import { MyContext } from "../context/ContextPrivider";
import { API_URL } from "../hooks/useBookDetails";
import { Link } from "react-router-dom";

function Home() {

  const context = useContext(MyContext);
  if (!context) {
    console.log("Something went wrong");
    return context;
  }

  const { author, toggleFavorite, favorites
    , toggleReading, reading, renderStars } = context;



  return (
    <div className="homeContainer">
      <p className="homeHeader">Welcome to My Open Library app!</p>
      <div className="BooksContainer">
        {author.length > 0 ? (
          author
            .filter((book) => book.has_fulltext && book.cover_i && book.title)
            .map((book) => (
              <ul key={book.key}>
                <div key={book.key}>
                  {<li><Link
                    target="_blank"
                    to={`${API_URL}${book.key}/${book.title}`}
                  >
                    <img
                      src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                      alt={book.title}
                    />
                  </Link></li>}
                  <button onClick={() => toggleFavorite(book.key)}
                    className="favoriteButton">
                    {favorites.includes(book.key) ? <FaHeart style={{ color: "red" }} /> : <CiHeart />}
                  </button>
                  {<button onClick={() => toggleReading(book.key)}
                    className="readButton">
                    {reading.includes(book.key) ? <FcReading /> : <FaBookReader style={{ color: "black" }} />}
                  </button>}
                  {reading.includes(book.key) && <div className="ratingStars" >Betyg: {renderStars(book.key)}</div>}
                </div>

              </ul>
            ))
        ) : (

          null
        )}

      </div>

    </div >
  );
}

export default Home;