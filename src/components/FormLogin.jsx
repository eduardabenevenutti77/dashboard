import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";

export default function FormLogin() {
    const [email, setEmail] = useState(""); // descontrói uma váriavel
    const [senha, setSenha] = useState(""); // useState prioriza a performance do sistema
  return (
    <Container>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Digite seu e-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Sua senha" value={senha} onChange={(e) => setSenha(e.target.value)} />
        </Form.Group>
        <Container className="d-flex justify-content-end">
          <Button variant="primary" type="submit">
            Entrar
          </Button>
        </Container>
      </Form>
    </Container>
  );
}
