import { useState } from 'react'
import './App.css'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap'
import { Link, Routes, Route } from 'react-router-dom'
import Contenido from './Pages/Contenido'
import NuevoContenido from './Pages/NuevoContenido'

function App () {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedRoute, setSelectedRoute] = useState('')
  const toggle = () => setIsOpen(!isOpen)

  return (
    <div className='App'>
      <Navbar expand='md' color='dark' container='xl' dark>
        <NavbarBrand href='/'>Home</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className='me-auto' navbar>
            <NavItem>
              <Link to='/contenido' className='nav-link'>
                Contenido
              </Link>
            </NavItem>
            <NavItem>
              <Link to='/nuevo-contenido' className='nav-link'>
                Nuevo Contenido
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-12'>
            <Routes>
              <Route path='/' element={<h1>Prueba de ruteo</h1>} />
              <Route path='contenido' element={<Contenido />} />
              <Route path='nuevo-contenido' element={<NuevoContenido />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
