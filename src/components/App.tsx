import React from "react";
import { Container, Row } from "react-bootstrap";
import CurrencyController from "./CurrencyPriceWidget";

function App() {
  return (
    <Container>
      <Row className="p-4 justify-content-center">
        <CurrencyController />
      </Row>
    </Container>
  );
}

export default App;
