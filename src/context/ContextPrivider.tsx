import "../styles/display.scss";
import { createContext } from "react";
import { useState } from "react";
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
  //set favoritmark.
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
  // Function to render stars based on the rating.
  const renderStars = (bookId: string) => {
    const currentRating = ratings[bookId] || 0;

    return (
      <span>
        {[1, 2, 3, 4, 5].map(star => (
          <button
            key={star}
            onClick={() => setRating(bookId, star)}
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
        toggleReading, renderStars
      }}
    >
      {children}
    </MyContext.Provider>
  );
}

export default ContextPrivider;






