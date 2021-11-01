import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { change_password } from "../actions/auth";
import { FormControl, FormLabel, Input, Button, Box } from "@chakra-ui/react";

import { Container } from "@chakra-ui/layout";

const ChangePassword = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const [formData, setFormData] = useState({
    old_password: "",
    new_password1: "",
    new_password2: "",
  });

  const { old_password, new_password1, new_password2 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (dispatch && dispatch !== null && dispatch !== undefined) {
      dispatch(change_password(old_password, new_password1, new_password2));
    }
  };

  if (typeof window !== "undefined" && !isAuthenticated) {
    router.push("/login");
  }

  return (
    <Container height="100vh">
      <Box p={20}>
        <form onSubmit={onSubmit}>
          <FormControl>
            <FormLabel>Old password</FormLabel>
            <Input
              type="password"
              name="old_password"
              placeholder="Password"
              onChange={onChange}
              value={old_password}
              minLength="8"
              required
            />
          </FormControl>

          <FormControl>
            <FormLabel>New password</FormLabel>
            <Input
              type="password"
              name="new_password1"
              placeholder="Password"
              onChange={onChange}
              value={new_password1}
              minLength="8"
              required
            />
          </FormControl>

          <FormControl>
            <FormLabel>Confirm your new password</FormLabel>
            <Input
              type="password"
              name="new_password2"
              placeholder="Password"
              onChange={onChange}
              value={new_password2}
              minLength="8"
              required
            />
          </FormControl>

          <Button width="full" mt={4} type="submit">
            Change password
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default ChangePassword;
