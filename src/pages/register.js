import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { register } from "../actions/auth";

import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Button,
  Box,
} from "@chakra-ui/react";

import { Container } from "../components/Container";

const RegisterPage = () => {
  const dispatch = useDispatch();

  const register_success = useSelector((state) => state.auth.loading);

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    username: "",
    password: "",
    re_password: "",
    email: "",
  });

  const { first_name, last_name, username, password, re_password, email } =
    formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (dispatch && dispatch !== null && dispatch !== undefined) {
      dispatch(
        register(first_name, last_name, username, password, re_password, email)
      );
    }
  };
  return (
    <Container height="100vh">
      <Box p={20}>
        <form onSubmit={onSubmit}>
          <FormControl>
            <FormLabel>First Name</FormLabel>
            <Input
              type="text"
              name="first_name"
              placeholder="First Name"
              onChange={onChange}
              value={first_name}
              required
            />
          </FormControl>

          <FormControl>
            <FormLabel>Last Name</FormLabel>
            <Input
              type="text"
              name="last_name"
              placeholder="Last Name"
              onChange={onChange}
              value={last_name}
              required
            />
          </FormControl>

          <FormControl>
            <FormLabel>User Name</FormLabel>
            <Input
              type="text"
              name="username"
              placeholder="User Name"
              onChange={onChange}
              value={username}
              required
            />
          </FormControl>

          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              name="email"
              placeholder="Email"
              onChange={onChange}
              value={email}
              required
            />
          </FormControl>

          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              name="password"
              placeholder="Password"
              onChange={onChange}
              value={password}
              minLength="8"
              required
            />
          </FormControl>

          <FormControl>
            <FormLabel>Re-Password</FormLabel>
            <Input
              type="password"
              name="re_password"
              placeholder="Confirm Password"
              onChange={onChange}
              value={re_password}
              minLength="8"
              required
            />
          </FormControl>

          <Button width="full" mt={4} type="submit">
            Create Account
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default RegisterPage;
