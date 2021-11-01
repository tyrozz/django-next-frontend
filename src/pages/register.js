import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { register } from "../actions/auth";

import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Box,
  Spinner,
} from "@chakra-ui/react";

import { Container } from "../components/Container";

const RegisterPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const register_success = useSelector((state) => state.auth.loading);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const loading = useSelector((state) => state.auth.loading);

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    username: "",
    password1: "",
    password2: "",
    email: "",
  });

  const { first_name, last_name, username, password1, password2, email } =
    formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (dispatch && dispatch !== null && dispatch !== undefined) {
      dispatch(
        register(first_name, last_name, username, password1, password2, email)
      );
    }
  };

  if (typeof window !== "undefined" && isAuthenticated) {
    router.push("/dashboard");
  }

  if (register_success) {
    router.push("/login");
  }

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
              name="password1"
              placeholder="Password"
              onChange={onChange}
              value={password1}
              minLength="8"
              required
            />
          </FormControl>

          <FormControl>
            <FormLabel>Re-Password</FormLabel>
            <Input
              type="password"
              name="password2"
              placeholder="Confirm Password"
              onChange={onChange}
              value={password2}
              minLength="8"
              required
            />
          </FormControl>

          {loading ? (
            <Spinner />
          ) : (
            <Button width="full" mt={4} type="submit">
              Create Account
            </Button>
          )}
        </form>
      </Box>
    </Container>
  );
};

export default RegisterPage;
