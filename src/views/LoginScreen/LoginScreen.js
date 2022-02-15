import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Container,
  Form,
  Input,
  Label,
} from "reactstrap";

function LoginScreen() {
  const [email, setEmail] = useState("john@gmail.com");
  const [password, setPassword] = useState("123456");

  const submitHandler = () => {
    if (email === "john@gmail.com" && password === "123456") {
      localStorage.setItem(
        "user",
        JSON.stringify({
          email: email,
          password: password,
        })
      );
      localStorage.setItem("token", "fake-jwt-token");
      window.location = "/";
    } else {
      alert("Invalid email or password");
    }
  };
  return (
    <Container className="mt-5">
      <Card>
        <CardHeader>
          <h1>Login</h1>
        </CardHeader>
        <CardBody>
          <Form>
            <Label>Username</Label>
            <Input
              type="text"
              value={email}
              name="username"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="enter your username"
            />
            <Label>Password</Label>
            <Input
              type="password"
              value={password}
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="enter your password"
            />
            <Button onClick={submitHandler} color="primary">
              Login
            </Button>
          </Form>
        </CardBody>
      </Card>
    </Container>
  );
}

export default LoginScreen;
