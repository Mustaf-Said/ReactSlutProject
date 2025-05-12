import "../styles/home.scss";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { FcReading } from "react-icons/fc";
import { FaBookReader } from "react-icons/fa";
import { useContext, useState } from "react";
import { MyContext } from "../context/ContextPrivider";
import { API_URL } from "../hooks/useBookDetails";
import { Link } from "react-router-dom";

function Home() {
  const context = useContext(MyContext);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  if (!context) {
    console.log("Something went wrong");
    return null;
  }

  const { author, toggleFavorite, favorites, toggleReading, reading, renderStars } = context;

  // Filtrera och paginera böcker
  const filteredBooks = author.filter((book) => book.has_fulltext && book.cover_i && book.title);
  const totalPages = Math.ceil(filteredBooks.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentBooks = filteredBooks.slice(startIndex, startIndex + itemsPerPage);

  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(prev => prev + 1);
  };

  const goToPrevPage = () => {
    if (currentPage > 1) setCurrentPage(prev => prev - 1);
  };

  return (
    <div className="homeContainer">
      <p className="homeHeader">Welcome to My Open Library app!</p>
      <div className="BooksContainer">
        {currentBooks.map((book) => (
          <ul key={book.key}>
            <li>
              <Link
                target="_blank"
                to={`${API_URL}${book.key}/${book.title}`}
              >
                <img
                  src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                  alt={book.title}
                />
              </Link>
            </li>
            <button onClick={() => toggleFavorite(book.key)} className="favoriteButton">
              {favorites.includes(book.key) ? <FaHeart style={{ color: "red" }} /> : <CiHeart />}
            </button>
            <button onClick={() => toggleReading(book.key)} className="readButton">
              {reading.includes(book.key) ? <FcReading /> : <FaBookReader style={{ color: "black" }} />}
            </button>
            {reading.includes(book.key) && (
              <div className="ratingStars">
                Betyg: {renderStars(book.key)}
              </div>
            )}

          </ul>
        ))}
      </div>


      <div className="paginationControls">
        <button onClick={goToPrevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>Sida {currentPage} av {totalPages}</span>
        <button onClick={goToNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Home;

