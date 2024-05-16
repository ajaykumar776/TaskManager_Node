import React from 'react';
import { TextInput, PasswordInput, Button, Container, Title } from '@mantine/core';

const Register = () => {
  return (
    <Container>
      <Title>Register</Title>
      <TextInput label="Email" placeholder="Enter your email" />
      <PasswordInput label="Password" placeholder="Enter your password" />
      <Button>Register</Button>
    </Container>
  );
};

export default Register;
