import axios from "axios";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { auth } from "../config/firebase";
// import Inicial from "../pages/Inicial";

export default function FormLogin() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  async function handleLogin() {
    const payload = {
      email: email,
      senha: senha,
    };
    try {
      const resposta = await axios.post("http://localhost:3000/login", payload);
      console.log(resposta);
      if (resposta.status === 200) {
        window.location.href = "/Inicial";
        console.log('Login efetuado')
      }
    } catch (error) {
      console.error(error);
      console.log('Não dá para acessar o Inicial')
    }
  }

  async function handleLoginWithFirebase(e) {
    e.preventDefault();
    try {
      const user = await signInWithEmailAndPassword(auth, email, senha);
      console.log(user);
      window.location.href = '/Inicial';
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <Container>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="email"
            placeholder="Informe o seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ fontFamily: "monospace", fontSize:"12px", fontWeight:"600"}}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            type="password"
            placeholder="Informe a sua senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            style={{ fontFamily: "monospace", fontSize:"12px", fontWeight:"600"}}
          />
        </Form.Group>
        <Container className="d-flex justify-content-center">
          <Button style={{ background: "#90a955", border: 'none', width:"150px", fontWeight: "600"}} type="submit">
            <a href="../pages/Inicial.jsx">
            Entrar
            </a>
          </Button>
        </Container>
      </Form>
    </Container>
  );
}
