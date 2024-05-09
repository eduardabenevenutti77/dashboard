import { Col, Container, Row } from "react-bootstrap";
import { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

export default function Login() {
  const [key, setKey] = useState("home");
  return (
    <Container
      fluid
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <Container className="d-flex align-items-center   shadow-lg p-3 mb-5 bg-white rounded">
        <Row>
          <Col>
            <h1>Sistema Dashboard</h1>
            <Tabs
              id="tabs-login"
              activeKey={key}
              onSelect={(k) => setKey(k)}
              className="mb-3"
            >
              <Tab eventKey="login" title="Login">
                <h3>Entre com sua conta</h3>
              </Tab>
              <Tab eventKey="register" title="Registro">
                <h3>Vamos fazer seu registro?</h3>
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
