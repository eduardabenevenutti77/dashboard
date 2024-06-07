import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Navbar expand={"lg"}>
        <Navbar.Brand as={Link} className="logo">Mary's App</Navbar.Brand>
        <Navbar.Toggle aria-controls="minhanav" />
          <Navbar.Text as={Link} to="/">
            Inicial
          </Navbar.Text>
    </Navbar>
  );
}