import axios from "axios";

export const fetchBooks = async (word) => {
  const { data } = await axios.get(
    `https://www.googleapis.com/books/v1/volumes?q=${word}&maxResults=15&key=${process.env.REACT_APP_GOOGLE_BOOKS_API_KEY}`
  );

  return data;
};
