import { useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";
import { Button } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";

function Banner() {
  const [searchText, setSearchText] = useState("");
  const searchInput = useRef();

  useEffect(() => {
    searchInput?.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(searchText);
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
          <Button type="submit" className="btn btn-dark">
            <BsSearch size={20} /> Search
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Banner;
