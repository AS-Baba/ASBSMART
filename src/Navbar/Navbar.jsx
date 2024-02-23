import "./navbar.css";
import { IoLocation } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Categories } from "./Categories";
import { Account } from "./Account";
import { HelpDesk } from "./HelpDesk";
import { Delivery } from "./Delivery";
import { useSelector } from "react-redux";
import { ShoppingCart } from "../assets/icons";

export function NavBar() {
  const { amount } = useSelector((state) => state.cart);
  const count = useSelector((state) => state.counter.count);

  return (
    <Navbar expand="lg" className="navbar text-primary sticky-top">
      <Container fluid>
        <Navbar.Brand className="brand">ASB'Smart</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" className="navBarToggle" />
        <Navbar.Collapse id="navbarScroll" className="dropDown">
          <Nav className="nav " style={{ maxHeight: "auto" }} navbarScroll>
            <NavDropdown
              title="All Categories"
              id="navbarScrollingDropdown"
              autoClose="outside"
            >
              <NavDropdown.Item>Categories</NavDropdown.Item>
              <NavDropdown.Divider />
              <div className="categories">
                <Categories className="" />
              </div>
            </NavDropdown>
            <Form className="d-flex ">
              <Form.Control
                type="search"
                placeholder="Search for products"
                className="formInput"
                aria-label="Search"
              />
              <Button className="searchButton">Search</Button>
            </Form>
            <NavDropdown
              title={"Hi, Abubakar"}
              id="navbarScrollingDropdown"
              autoClose="outside"
            >
              <NavDropdown.Item>
                <div className="d-flex">
                  <h3 className="card-title">
                    <FaUser /> Account
                  </h3>

                  {/* <button className="btn btn-danger ">LogOut</button> */}
                </div>
              </NavDropdown.Item>

              <NavDropdown.Divider />
              <div className="container account">
                <Account />
              </div>
            </NavDropdown>
            <NavDropdown
              title="Deliver to"
              id="navbarScrollingDropdown"
              autoClose="outside"
            >
              <NavDropdown.Item>
                <ShoppingCart /> Biu
              </NavDropdown.Item>

              <NavDropdown.Divider />
              <div className="account container ">
                <Delivery />
              </div>
            </NavDropdown>
            <NavDropdown
              title="Help Desk"
              id="navbarScrollingDropdown"
              autoClose="outside"
            >
              <NavDropdown.Item> How may we help you?</NavDropdown.Item>

              <NavDropdown.Divider />
              <div className="helpDesk ">
                <HelpDesk />
              </div>
            </NavDropdown>
            <Nav.Link className="cart">
              <div className="nav-container">
                <ShoppingCart />
                <div className="amount-container">
                  <p className="total-amount">{amount}</p>
                </div>
              </div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

// export default NavBar
