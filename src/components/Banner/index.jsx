import { useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";
import { Button } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import { useBooks } from "../../context/BookContext";

function Banner() {
  const [searchText, setSearchText] = useState("");
  const searchInput = useRef();
  const books = useBooks();

  useEffect(() => {
    searchInput?.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchText !== "") {
      books.setWord(searchText);
    }
  };

  return (
    <div className={styles.banner}>
      <div className={styles.bannerTitle}>
        <h1>Book Search App</h1>
      </div>
      <div className={styles.searchForm}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name..."
            ref={searchInput}
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <Button type="submit" variant="dark">
            <BsSearch />
            &nbsp;Search
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Banner;
