import { createContext } from "react";
import { useState } from "react";
import { Books, BooksType } from "../type/Type";
import "./display.scss";
// Create a context for the book data
export const MyContext = createContext<BooksType | null>(null);

function ContextPrivider({ children }: { children: React.ReactNode }) {
  // State to hold the book data and input value
  const [author, setAuthor] = useState<Books[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [toggle, setToggle] = useState(false);
  const [favorites, setFavorites] = useState<string[]>([]);
  // Fetch data (called manually)
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
        favorites
      }}
    >
      {children}
    </MyContext.Provider>
  );
}

export default ContextPrivider;






