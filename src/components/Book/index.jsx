import { Card, Col } from "react-bootstrap";
import styles from "./styles.module.css";

function index() {
  return (
    <>
      <Col sm={4}>
        <Card className={styles.card}>
          <img
            src="/img/mikolaj-LV6wQnJfNRo-unsplash.jpg"
            class="card-img-top"
            alt="kate"
          />
          <div class="card-body">
            <h5 class="card-title">Special title treatment</h5>
            <p class="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
          </div>
        </Card>
      </Col>
    </>
  );
}

export default index;
