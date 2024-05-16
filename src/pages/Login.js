import React from 'react';
import { TextInput, PasswordInput, Button, Container, Title } from '@mantine/core';

const Login = () => {
  return (
    <Container>
      <Title>Login</Title>
      <TextInput label="Email" placeholder="Enter your email" />
      <PasswordInput label="Password" placeholder="Enter your password" />
      <Button>Login</Button>
    </Container>
  );
};

export default Login;
