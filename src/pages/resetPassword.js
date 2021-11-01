import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { reset_password } from "../actions/auth";
import { useRouter } from "next/router";

import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Button,
  Box,
} from "@chakra-ui/react";

import { Container } from "../components/Container";

const ResetPassword = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const [formData, setFormData] = useState({
    email: "",
  });

  const { email } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (dispatch && dispatch !== null && dispatch !== undefined) {
      dispatch(reset_password(email));
    }
  };

  return (
    <Container height="100vh">
      <Box p={20}>
        <form onSubmit={onSubmit}>
          <FormControl>
            <FormLabel>Please enter your email</FormLabel>
            <Input
              type="email"
              name="email"
              placeholder="Email"
              onChange={onChange}
              value={email}
              required
            />
          </FormControl>
          <Button width="full" mt={4} type="submit">
            Reset your password
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default ResetPassword;
