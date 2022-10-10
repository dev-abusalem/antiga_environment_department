import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import classes from './css/HeaderFooter.module.css';
import {Link } from 'react-router-dom';
import image1 from '../assets/images/DOE Department of Environment Logo Redraw.png'


function Header() {
  return (
    <>
    <section className={classes.nav_bar_sec}>
      <div>
        <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/"><img src={image1} alt="logo"></img></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
                <NavDropdown title="About" id="basic-nav-dropdown">

                  <NavDropdown.Item  as={Link} to="/about" >About us</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/about/objective" >Our Objectives</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/about/scope" >Scope</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/about/principles" >Guiding Principles</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/about/stakeholders" >Stakeholders</NavDropdown.Item>

                </NavDropdown>

                <NavDropdown title="Invasive Species" id="basic-nav-dropdown">

                  <NavDropdown.Item  as={Link} to="/invasive" >Invasive Species In A & B</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/invasive/iplants" >Invasive Plants</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/invasive/invanimals" >Invasive Animals</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/invasive/ipathogens" >Invasive Pathogens</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/invasive/pthreat" >Pathways of Threat</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/invasive/eimpacts" >Environmental Impacts</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/invasive/ecoimpacts" >Economic Impacts</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/invasive/socimpacts" >Social impacts</NavDropdown.Item>

                </NavDropdown>



                <NavDropdown title="The Action Plan" id="basic-nav-dropdown">

                  <NavDropdown.Item  as={Link} to="/actionplan" >The Action Plan</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/actionplan/fundpriorities" >Funding priorities</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/actionplan/monitorroport" >Monitoring and Reporting</NavDropdown.Item>
                 
              

                </NavDropdown>



                <NavDropdown title="Additional" id="basic-nav-dropdown">
                  <NavDropdown.Item as={Link} to="/acronyms" >Acronyms</NavDropdown.Item>
                  <NavDropdown.Item href="https://www.google.com" >Back to DOE</NavDropdown.Item>   
                  <NavDropdown.Item href="https://www.google.com" >Download PDF</NavDropdown.Item>                    
                </NavDropdown>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </div>
    </section>

    </>
  );
}

export default Header;