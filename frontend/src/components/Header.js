import React from 'react'
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { logout } from '../actions/userActions'

const Header = ({ history }) => {

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    const dispatch = useDispatch()

    const logoutHandler = () => {
        dispatch(logout())
    }

    return (
        <div>
            <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect className='py-2'>
                <Container>
                    <LinkContainer to='/'>
                        <Navbar.Brand to="/">Membership System</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <LinkContainer to='/' exact={true}>
                                <Nav.Link><i className='fas fa-home'></i>Home</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to='/about'>
                                <Nav.Link><i className='fas fa-info-circle'></i>About</Nav.Link>
                            </LinkContainer>
                            {userInfo &&
                                <>
                                    <LinkContainer to='/activities' exact={true}>
                                        <Nav.Link ><i className='fas fa-tasks'></i>Activities</Nav.Link>
                                    </LinkContainer>
                                    <Nav.Link onClick={logoutHandler}><i className='fas fa-sign-out-alt'></i>Logout</Nav.Link>
                                </>

                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header
