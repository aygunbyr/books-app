import { Button, Card, Col } from "react-bootstrap";
import styles from "./styles.module.css";

function Book({ item }) {
  const title = item.volumeInfo.title;
  const subtitle = item.volumeInfo.subtitle;
  const image = item.volumeInfo.imageLinks.thumbnail;

  return (
    <>
      <Col sm={6} md={4}>
        <Card className={styles.card}>
          <Card.Img variant="top" src={image} alt="book" />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{subtitle}</Card.Text>
            <Button variant="dark">Details</Button>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}

export default Book;
