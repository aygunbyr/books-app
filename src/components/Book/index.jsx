import { useState } from "react";
import { Card, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Table from "react-bootstrap/Table";
import styles from "./styles.module.css";

function Book({ item }) {
  const title = item.volumeInfo.title;
  const subtitle = item.volumeInfo.subtitle;
  const imageLinks = item.volumeInfo.imageLinks;
  const info = item.volumeInfo;

  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  return (
    <>
      <Col sm={6} md={4}>
        <Card className={styles.card}>
          {imageLinks?.thumbnail && (
            <Card.Img variant="top" src={imageLinks?.thumbnail} alt="book" />
          )}
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{subtitle}</Card.Text>
            <Button variant="dark" onClick={handleOpen}>
              Details
            </Button>
          </Card.Body>
        </Card>
      </Col>

      <Modal show={open} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            {imageLinks?.thumbnail && (
              <img src={imageLinks?.thumbnail} alt="book cover" />
            )}
          </div>
          <div>
            <strong>Title: </strong> {title} <br />
            <strong>Subtitle: </strong> {subtitle} <br />
            <strong>Authors: </strong>{" "}
            {info.authors?.map((item) => (
              <span>{item}, </span>
            ))}
            <br />
            <strong>Published date: </strong> {info.publishedDate} <br />
            <strong>Description: </strong> {info.description} <br />
            <code>{JSON.stringify(item)}</code>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Book;
