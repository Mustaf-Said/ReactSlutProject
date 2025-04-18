import { createContext } from "react";
import { useState } from "react";
import { Books, BooksType } from "../type/Type";

export const MyContext = createContext<BooksType | null>(null);

function ContextPrivider({ children }: { children: React.ReactNode }) {
  const [author, setAuthor] = useState<Books[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

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
    }
  };


  // Delete button
  const deleteHandler = (key: string) => {
    const delTitlle = author.filter(obj => obj.key !== key);
    setAuthor(delTitlle);
  };

  return (
    <MyContext.Provider
      value={{
        author,
        deleteHandler,
        handleInputChange,
        handleSearchSubmit,
        inputValue
      }}
    >
      {children}
    </MyContext.Provider>
  );
}

export default ContextPrivider;










/* import { createContext } from "react";
import { useEffect, useState } from "react";
import { Books, BooksType } from "../type/Type"

export const MyContext = createContext<BooksType | null>(null);

function ContextPrivider({ children }: { children: React.ReactNode }) {
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
    e.preventDefault();
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
    <MyContext.Provider value={{ author, deleteHandler, handleInputChange, inputValue }}>
      {children}
    </MyContext.Provider>


  );
}

export default ContextPrivider;
 */