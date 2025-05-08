import "../styles/display.scss";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { FcReading } from "react-icons/fc";
import { FaBookReader } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { MyContext } from "../context/ContextPrivider";
import { Link } from "react-router-dom";





export const Api_Url = `https://openlibrary.org`;

function FetchData() {
  const [description, setDescription] = useState<string | null>(null);
  const [number_of_pages, setNumber_of_pages] = useState<string | null>(null);
  const [publish_date, setPublish_date] = useState<string | null>(null);
  const [languages, setLanguages] = useState<string | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);

  const handleZoomImg = () => {
    setIsZoomed((prev) => !prev);
  };
  const context = useContext(MyContext);
  if (!context) {
    console.log("Something went wrong");
    return context;
  }

  const { author, toggle, toggleHandler, favorites, toggleFavorite,
    reading, toggleReading, renderStars } = context;


  // Only display the first book.
  const book = author[0];

  //Display discription of the book.
  useEffect(() => {
    if (author && author.length > 0) {
      fetch(`${Api_Url}${author[0].key}.json`)
        .then((response) => response.json())
        .then((data) => {
          if (data && data.description) {
            setDescription(
              typeof data.description === "string"
                ? data.description
                : data.description.value
            );
          }
          else {
            setDescription("This work doesn't have a description yet.");
          }
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setDescription("Failed to fetch description.");
        });
    }
  }, [author]);
  //Fetch number of pages and publish date of the book.
  useEffect(() => {
    if (author && author.length > 0) {
      fetch(`${Api_Url}${author[0].key}/editions.json`)
        .then((response) => response.json())
        .then((data) => {
          if (data && data.entries && data.entries[0]?.number_of_pages) {
            setNumber_of_pages(data.entries[0].number_of_pages.toString());
          } else {
            setNumber_of_pages(null);
          } if (data && data.entries && data.entries[0]?.publish_date) {
            setPublish_date(data.entries[0].publish_date.toString());
          } if (data && data.entries && data.entries[0]?.languages) {
            setLanguages(
              Array.isArray(data.entries[0].languages)
                ? data.entries[0].languages.map((lang: { key: string; }) => lang.key.replace("/languages/", "")).join(", ")
                : "English"
            );
          }
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setPublish_date("Failed to fetch number of pages.");
        });
    }
  }, [author]);
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
                  to={`${Api_Url}${book.key}/${book.title}`}
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
                {number_of_pages && (
                  <p>
                    Pages{" "}
                    <br />
                    <span>
                      {number_of_pages || null}
                    </span>
                  </p>)}
                {publish_date && (
                  <p>
                    Publish Date{" "}
                    <br />
                    <span>
                      {publish_date || null}
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
        {author.slice(1, 7).map((book) => (
          <div key={book.key} className="imgsDetails">
            {book.has_fulltext && (
              <div>
                {book.cover_i && (
                  <img
                    src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                    alt={book.title}
                  />
                )}
                <p>

                  <Link
                    target="_blank"
                    to={`${Api_Url}${book.key}/${book.title}`}
                  >
                    <button>Borrow</button>
                  </Link>
                </p>
                <button className="favoriteButton"
                  onClick={() => toggleFavorite(book.key)}>
                  {favorites.includes(book.key) ? <FaHeart style={{ color: "red" }} /> : <CiHeart />}
                </button  >
                {<button onClick={() => toggleReading(book.key)}
                  className="readButton">
                  {reading.includes(book.key) ? <FcReading /> : <FaBookReader style={{ color: "black" }} />}
                </button>}
                {reading.includes(book.key) && <div className="ratingStars">Betyg: {renderStars(book.key)}</div>}
              </div>
            )}
          </div>
        ))}
      </section>

    </div>
  );
}

export default FetchData;


