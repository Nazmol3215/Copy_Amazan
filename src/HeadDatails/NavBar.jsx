import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import React from "react";
import fdhcvr from "../imagesAll/_opsz24 (1).png";
import fdhcvr1 from "../imagesAll/lop2.jpg";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const ssss34 = useNavigate();

  return (
    <nav>
      {["md"].map((expand) => (
        <Navbar key={expand} expand={expand} className=" mb-3 NavbarBody">
          <Container fluid>
            <Navbar.Brand href="#">
              <button onClick={() => ssss34("/")}>
                <img className="logoImge" src={fdhcvr1} />
              </button>
            </Navbar.Brand>
            <Form className="Sarceh_bar">
              <Form.Control
                type="search"
                placeholder="Search"
                className="Sar_bar"
                aria-label="Search"
              />
              {/* <Button className="Sachbar_buton">Click</Button> */}
            </Form>
            <button onClick={() => ssss34("/")}>
            <img className="logoImge" src={fdhcvr} />
              </button>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                {" "}
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  {" "}
                  Offcanvas{" "}
                </Offcanvas.Title>{" "}
              </Offcanvas.Header>
              <Offcanvas.Body>
                {" "}
                <Link to="/About"> About</Link> <br />
                <Link to="/AccasorisForcomputer">
                  {" "}
                  AccasorisForcomputer
                </Link>{" "}
                <br />
                <Link to="/AccasorisforMobaile"> AccasorisforMobaile</Link>{" "}
                <br />
                <Link to="/CanteactUs"> CanteactUs</Link> <br />
                <Link to="/Computer"> Computer</Link> <br />
                <Link to="/MobaileDetails"> DetailsButon</Link> <br />
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </nav>
  );
}
