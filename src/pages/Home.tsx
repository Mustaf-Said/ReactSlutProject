import "./home.scss";
import { useContext } from "react";
import { MyContext } from "./ContextPrivider";
import { Api_Url } from "./FetchData";
import { Link } from "react-router-dom";

function Home() {

  const context = useContext(MyContext);
  if (!context) {
    console.log("Something went wrong");
    return context;
  }

  const { author } = context;
  console.log(author);


  return (
    <div className="homeContainer">
      <p className="homeHeader">Welcome to My Open Library app!</p>
      <div>
        <p className="homeText1">Classic Books</p>

        {author.length > 0 ? (
          author.map((book) => (
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

                </div>
              )}
            </ul>
          ))
        ) : (
          <p>No results found.</p>
        )}

      </div>

      <div >
        <p className="homeText2">Romance</p>
      </div>

      <div>
        <p className="homeText3">Kids</p>
      </div>
    </div >
  );
}

export default Home;