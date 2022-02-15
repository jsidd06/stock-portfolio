import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardBody, CardHeader, Container, Form, Input, Label } from 'reactstrap'

function LoginScreen() {
  return (
      <Container className="mt-5">
          <Card>
              <CardHeader>
                    <h1>Login</h1>
              </CardHeader>
              <CardBody>
                  <Form>
                      <Label>Username</Label> 
                      <Input type="text" name="username" placeholder="enter your username" /> 
                        <Label>Password</Label>
                        <Input type="password" name="password" placeholder="enter your password" />
                        <Link to="/" className="btn btn-primary mt-3" style={{cursor: 'pointer'}}>Login</Link>
                  </Form>
                  </CardBody>
          </Card>
      </Container>
  )
}

export default LoginScreen