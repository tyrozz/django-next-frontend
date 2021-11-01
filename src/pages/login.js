import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { login, reset_register_success } from "../actions/auth";

import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Button,
  Box,
  Spinner,
} from "@chakra-ui/react";

import { Container } from "../components/Container";
import { Main } from "../components/Main";

const LoginPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const loading = useSelector((state) => state.auth.loading);

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const { username, password } = formData;

  useEffect(() => {
    if (dispatch && dispatch !== null && dispatch !== undefined) {
      dispatch(reset_register_success);
    }
  }, [dispatch]);

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (dispatch && dispatch !== null && dispatch !== undefined) {
      dispatch(login(username, password));
    }
  };

  if (typeof window !== "undefined" && isAuthenticated) {
    router.push("/dashboard");
  }

  return (
    <Container height="100vh">
      <Box p={20}>
        <form onSubmit={onSubmit}>
          <FormControl>
            <FormLabel>User name</FormLabel>
            <Input
              type="text"
              name="username"
              placeholder="User Name"
              onChange={onChange}
              value={username}
              required
            />
            <FormHelperText>Please enter your user name.</FormHelperText>
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
            <FormHelperText>Please enter your password.</FormHelperText>
          </FormControl>

          {loading ? (
            <Spinner />
          ) : (
            <Button width="full" mt={4} type="submit">
              Login
            </Button>
          )}
        </form>
      </Box>
    </Container>
  );
};

export default LoginPage;
