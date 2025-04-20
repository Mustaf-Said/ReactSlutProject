//:::::::::::::::::::toggle button
/* import { useContext, useState } from "react";
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle((prevToggle) => !prevToggle);
  };
  return (
    <div>
      <button onClick={handleToggle}>
        {toggle ? "Show DisplayBooks" : "Show Navbar"}
      </button>
      {toggle ? <Navbar /> : <DisplayBooks />}
      {inputValue ? (
        <DisplayBooks />
      ) : (
        <main>
          <Outlet />
        </main>
      )}
      <Footer />
    </div>
  ); */
//::::::::::::::::::::::::::::::::::::::::::::::::::: button to toggle to other page
/* <button onClick={() => window.location.href = "/Browse"}> Click</button> */


//:::::::::::::::::::::::::::::::::::::::::::::Gamal data fetching
/*
import { createContext, Provider } from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BooksType, Books } from "../type/Type"
const Api_Url = `https://openlibrary.org`;
export const MyContext = createContext<BooksType[] | null>(null)
function Home({ children }: { children: React.ReactNode }) {
const [author, setAuthor] = useState<Books[]>([]);
const [inputValue, setInputValue] = useState<string>("");

// Fetch data
const fetchData = async (Books: string) => {
  try {
    const res = await fetch(`https://openlibrary.org/search.json?title=${Books}`);
    const data = await res.json();
    setAuthor(data.docs);
    console.log(data.docs);
  } catch (error) {
    console.log(error, "Something went wrong with fetching the data.");
  }
};

// Handle input change
const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const input = e.target.value;
  setInputValue(input);
};

// Fetch data when inputValue changes
useEffect(() => {
  if (inputValue.trim()) {
    fetchData(inputValue);
  }
}, [inputValue]);

//Delete button
function deleteHandler(key: string) {
  const delTitlle = author.filter(obj => obj.key !== key);
  setAuthor(delTitlle)
}
return (
  <div>
    <h1>Home page</h1>
    <input
      type="text"
      value={inputValue}
      onChange={handleInputChange}
      placeholder="Enter book title"
    />
    <div>
      {
        author.length > 0 && (
          <ul key={author[0].key}>
            {author[0].has_fulltext === true && (
              <div>
                <li>
                  <strong>Title:</strong> {author[0].title}
                </li>
                <li>
                  <strong>Author:</strong> {author[0].author_name?.join(", ")}
                </li>
                <img
                  src={`https://covers.openlibrary.org/b/id/${author[0].cover_i}-M.jpg`}
                  alt={author[0].title}
                />
                <li>
                  Om Boken:{" "}
                  <Link
                    target="_blank"
                    to={`${Api_Url}${author[0].key}/${author[0].title}`}
                  >
                    {author[0].title}
                  </Link>
                </li>
                <button onClick={() => deleteHandler(author[0].key)}>Delete</button>
              </div>
            )}
          </ul>
        )
      }


    </div>
    <MyContext.Provider value={{ author, setAuthor }}>
      {children}
    </MyContext.Provider>


  </div>
);
}

export default Home;
*/



//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::Old data display more Books
/* import "./display.scss"
import { useContext } from "react";
import { MyContext } from "./ContextPrivider";
import { Link } from "react-router-dom";

const Api_Url = `https://openlibrary.org`;
function FetchData() {
  const context = useContext(MyContext);
  if (!context) {
    console.log("somThing went wrong");
    return context
  }

  const { author, deleteHandler } = context;

  return (
    <div className="display">

      <section>
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
                  <button onClick={() => deleteHandler(book.key)}>Delete</button>
                </div>
              )}
            </ul>
          ))
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

export default FetchData; */
