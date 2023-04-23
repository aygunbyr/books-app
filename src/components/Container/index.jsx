import { Row } from "react-bootstrap";
import { useBooks } from "../../context/BookContext";
import Book from "../Book";
import styles from "./styles.module.css";

function Container() {
  const books = useBooks();
  const items = books?.books?.items;

  return (
    <main className={styles.results}>
      <Row>
        {items?.map((item) => (
          <Book key={item.id} item={item} />
        ))}
      </Row>
    </main>
  );
}

export default Container;
