import { Row } from "react-bootstrap";
import Book from "../Book";
import { useBooks } from "../../context/BookContext";
import styles from "./styles.module.css";

function Container() {
  const books = useBooks();

  return (
    <main className={styles.results}>
      <Row>
        {books?.books?.items?.map((item) => (
          <Book key={item.id} item={item} />
        ))}
      </Row>
    </main>
  );
}

export default Container;
