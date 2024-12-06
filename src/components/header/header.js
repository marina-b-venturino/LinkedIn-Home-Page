import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import linkedin from '../../assets/linkedin.png';
import InputGroup from 'react-bootstrap/InputGroup';
import { FaLinkedin } from 'react-icons/fa';
import { IoHomeSharp } from "react-icons/io5";
import { FaUserGroup } from "react-icons/fa6";
import { BsSuitcaseLgFill } from "react-icons/bs";
import { BiSolidMessageRoundedDots } from "react-icons/bi";
import { RiLayoutGrid2Fill } from "react-icons/ri";
import { FaSearch } from 'react-icons/fa';
import { FaCircleUser } from "react-icons/fa6";
import '../../assets/style.css';

function Header() {
  return (
<Navbar expand="lg" className="bg-body-tertiary">
  <Container>
    <Navbar.Brand href="">
      <img
        src={linkedin}
        alt="Logo"
        width="30"
        height="30"
        className="d-inline-block align-top"
      />
    </Navbar.Brand>
    <Form className="d-flex">
      <InputGroup>
        <Button className="search">
          <FaSearch />
        </Button>
        <Form.Control
          className="search"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
      </InputGroup>
    </Form>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav className="ms-auto my-2 my-lg-0" navbarScroll>
      <Nav.Link className="btn-nav-link me-3" href="#action1">
          <IoHomeSharp className="icon-nav" /> Home
        </Nav.Link>
        <Nav.Link className="btn-nav-link me-3" href="#action2">
          <FaUserGroup className="icon-nav" /> My Network
        </Nav.Link>
        <Nav.Link className="btn-nav-link me-3" href="#action2">
          <BsSuitcaseLgFill className="icon-nav" /> Jobs
        </Nav.Link>
        <Nav.Link className="btn-nav-link me-3" href="#action2">
          <BiSolidMessageRoundedDots className="icon-nav" /> Message
        </Nav.Link>
        <NavDropdown className="btn-nav-link me-3" title={
            <>
            <FaCircleUser className="btn-nav-link mx-auto" />
            Me
            </>} id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">
           <BsSuitcaseLgFill /> EXAMPLE
          </NavDropdown.Item>
          <NavDropdown.Item href="#action4">
            <FaLinkedin className="me-1" /> ANOTHER EXAMPLE
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            <FaLinkedin className="me-1" /> ANOTHER EXAMPLE
          </NavDropdown.Item>
        </NavDropdown>
        <NavDropdown className="btn-nav-link" title={
            <>
            <RiLayoutGrid2Fill className="btn-nav-link mx-auto" />
            For business
            </>}  id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">
          For business
          </NavDropdown.Item>
          <NavDropdown.Item href="#action4">
            <FaLinkedin className="me-1" /> Another action
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            <FaLinkedin className="me-1" /> Something else here
          </NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

  );
}

export default Header;