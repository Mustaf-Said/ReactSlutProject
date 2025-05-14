import "../styles/display.scss";
import { createContext, useEffect, useState } from "react";
import { Books, BooksType } from "../type/Type";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";

// Create a context for the book data
export const MyContext = createContext<BooksType | null>(null);

function ContextPrivider({ children }: { children: React.ReactNode }) {
  // State to hold the book data and input value
  const [author, setAuthor] = useState<Books[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [toggle, setToggle] = useState(false);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [reading, setReading] = useState<string[]>([]);
  const [ratings, setRatings] = useState<{ [key: string]: number }>({});
  const [isZoomed, setIsZoomed] = useState(false);


  // Fetch data (called manually)
  const fetchData = async (Books: string) => {
    try {
      const res = await fetch(`https://openlibrary.org/search.json?title=${Books}`);
      const data = await res.json();
      setAuthor(data.docs);
      /* console.log(data.docs); */
    } catch (error) {
      console.log(error, "Something went wrong with fetching the data.");
    }
  };
  // Set a default value for author before searching
  useEffect(() => {
    fetchData("The Hobbit");
  }, []);
  // Input handler
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setInputValue(e.target.value);
  };

  // Submit handler (triggered by form)
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      fetchData(inputValue);
      setInputValue(""); // Clear the input after submission
    }
  };


  // Delete button
  const deleteHandler = (key: string) => {
    const delTitlle = author.filter(obj => obj.key !== key);
    setAuthor(delTitlle);
  };

  // Toggle handler (for description)
  const toggleHandler = () => {
    setToggle((prev) => !prev);
  };

  //set favoritmark.
  const toggleFavorite = (bookId: string) => {
    setFavorites(prev =>
      prev.includes(bookId) ? prev.filter(id => id !== bookId) : [...prev, bookId]
    );
  };

  //set reading mark.
  const toggleReading = (bookId: string) => {
    setReading(prev =>
      prev.includes(bookId) ? prev.filter(id => id !== bookId) : [...prev, bookId]
    );
  };

  //set rating mark.
  const setRating = (bookId: string, rating: number) => {
    setRatings(prev => ({
      ...prev,
      [bookId]: rating
    }));
  };
  //set imgZooming
  const handleZoomImg = () => {
    setIsZoomed((prev) => !prev);
  };
  // Function to render stars based on the rating.
  const renderStars = (bookId: string) => {
    const currentRating = ratings[bookId] || 0;

    return (
      <span>
        {[1, 2, 3, 4, 5].map(star => (
          <button
            key={star}
            onClick={() => setRating(bookId, currentRating === star ? 0 : star)}
            style={{ background: 'none', border: 'none', cursor: 'pointer' }}
          >
            {star <= currentRating ? <FaStar color="gold" /> : <FaRegStar />}
          </button>
        ))}
      </span>
    );
  };
  return (
    <MyContext.Provider
      value={{
        author,
        deleteHandler,
        handleInputChange,
        handleSearchSubmit,
        inputValue,
        toggle, setToggle,
        toggleHandler, toggleFavorite,
        favorites, reading,
        toggleReading, renderStars,
        handleZoomImg, isZoomed,
      }}
    >
      {children}
    </MyContext.Provider>
  );
}

export default ContextPrivider;






