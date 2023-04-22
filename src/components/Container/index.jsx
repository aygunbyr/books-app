import { Card, Col, Row } from "react-bootstrap";
import styles from "./styles.module.css";
import Book from "../Book";

function Container() {
  return (
    <main className={styles.results}>
      <Row>
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
      </Row>
    </main>
  );
}

export default Container;
