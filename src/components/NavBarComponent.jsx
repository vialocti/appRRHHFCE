
import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import {Link, Outlet} from 'react-router-dom'
import '../css/estilospage.css'


const NavBarComponent = () => {
  return (
<>    
    <Navbar className='menubar' bg="dark" variant='dark' expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">FCE-RRHH</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

          <NavDropdown title="Agentes" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/cargarpersona">Alta Persona</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/">Cargar Datos Personales</NavDropdown.Item>
              
              
            </NavDropdown>

            
            <NavDropdown title="Cargos" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/cargospersona">Ver Cargos</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/">Cargos Interinos</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/">Nuevo Cargo</NavDropdown.Item>
              
            </NavDropdown>

            <NavDropdown title="Inasistencias" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/inasistencias">Registrar Inasistencia</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/">Registrar Licencia</NavDropdown.Item>
            
              
            </NavDropdown>
            
            
            <NavDropdown title="Reportes Asistencia" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/asistenciaarea">Reporte por Area</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/asistenciaclaustro">Reporte Doc/No Doc</NavDropdown.Item>
             <NavDropdown.Item as={Link} to="/asistenciapersona">Reporte por Agente</NavDropdown.Item>
             <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/promediosclaustro">Reporte Promedios</NavDropdown.Item>

            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <section>
      <Outlet></Outlet>
    </section>
   
    </>
  )
}

export default NavBarComponent