import { createContext, useContext, useEffect, useState } from "react";
import { fetchBooks } from "../api";

const BookContext = createContext();

const BookProvider = ({ children }) => {
  const [books, setBooks] = useState(null);
  const [word, setWord] = useState("react");

  useEffect(() => {
    (async () => {
      const data = await fetchBooks(word);

      setBooks(data);
    })();
  }, [word]);

  const values = {
    books,
    setWord,
  };

  return <BookContext.Provider value={values}>{children}</BookContext.Provider>;
};

const useBooks = () => useContext(BookContext);

export { BookProvider, useBooks };
