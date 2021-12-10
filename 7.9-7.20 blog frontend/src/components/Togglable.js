import React, { useState, useImperativeHandle } from 'react'
import PropTypes from 'prop-types'
import { Container, Row, Form, Col, Navbar, Nav, NavDropdown, Table, Button } from 'react-bootstrap'

const Togglable = React.forwardRef((props, ref) => {
  const [visible, setVisible] = useState(false)
  
  const hideWhenVisible = { display: visible ? 'none' : '' }
  const showWhenVisible = { display: visible ? '' : 'none' }

  const toggleVisibility = () => {
    setVisible(!visible)
  }

  useImperativeHandle(ref, () => {
    return {
      toggleVisibility
    }
  })

  return (
    <Container>
       
      <div style={hideWhenVisible}>
        <Button variant="primary" onClick={toggleVisibility}>{props.buttonLabel}</Button>
      </div>
      <div style={showWhenVisible}>
        {props.children}
        
        <Button variant="outline-dark" onClick={toggleVisibility}>cancel</Button>
      </div>
        
    </Container>
  )
})

Togglable.propTypes = {
  buttonLabel: PropTypes.string.isRequired
}

export default Togglable