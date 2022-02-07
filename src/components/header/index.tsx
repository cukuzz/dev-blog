import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import SideMenu from './components/SideMenu'

interface IProps {
  siteTitle: string
}

const Header = (props: IProps) => {
  const { siteTitle } = props
  return (
    <Navbar bg="light" expand={false}>
      <Container fluid>
        <Navbar.Brand href="#">{siteTitle}</Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <SideMenu siteTitle={siteTitle} />
      </Container>
    </Navbar>
  )
}

export default Header
