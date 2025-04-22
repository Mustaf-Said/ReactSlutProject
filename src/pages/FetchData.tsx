import "./display.scss";
import { useContext, useEffect, useState } from "react";
import { MyContext } from "./ContextPrivider";
import { Link } from "react-router-dom";



export const Api_Url = `https://openlibrary.org`;

function FetchData() {
  const [toggle, setToggle] = useState(false);
  const [description, setDescription] = useState<string | null>(null);
  const context = useContext(MyContext);
  if (!context) {
    console.log("Something went wrong");
    return context;
  }

  const { author, /* deleteHandler */ } = context;
  const toggleHandler = () => {
    setToggle((prev) => !prev);
  };
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
          } else {
            setDescription("No description available.");
          }
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setDescription("Failed to fetch description.");
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
            <div className="authorDetails">  {book.has_fulltext && (
              <div >

                <h1> {book.title}</h1>
                <p className="authorName" >by <span>{Array.isArray(book.author_name) ? book.author_name.join(", ") : book.author_name}</span></p>
                <div className={toggle ? "expanded" : "clamped"}>
                  {description || "Loading description..."}
                  {/*    <button>Read more ▾</button> */}
                </div>
                <button onClick={toggleHandler}>
                  {toggle ? "Read less ▲" : "Read more ▾"}
                </button>
              </div>
            )}
            </div>
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


