import { Card, Col, Button } from "react-bootstrap";
import { useState } from "react";
export const SingleBook = (props) => {
  const [btnState, setBtnState] = useState(false);

  function handleClick() {
    setBtnState((btnState) => !btnState);
  }
  let toggleClassCheck = btnState ? "active" : "";

  return (
    <>
      <Col>
        <Card onClick={handleClick}>
          <Card.Img variant="top" src={props.bookProp.img} />
          <Card.Body>
            <Card.Title>{props.bookProp.title}</Card.Title>
            <Card.Text>{props.bookProp.price}</Card.Text>
            <Card.Text className={`btn${toggleClassCheck}`}>ciao</Card.Text>
            <Button variant="primary">{props.bookProp.price}</Button>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};
