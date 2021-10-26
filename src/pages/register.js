import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { register } from "../actions/auth";

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
  });

  const { first_name, last_name, username, password, re_password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (dispatch && dispatch !== null && dispatch !== undefined) {
      dispatch(
        register(first_name, last_name, username, password, re_password)
      );
    }
  };
  return (
    <Container height="100vh">
        <form onSubmit={onSubmit}>
          <div>
            <label>First Name</label>
            <input
              type="text"
              name="first_name"
              placeholder="First Name"
              onChange={onChange}
              value={first_name}
              required
            />

            <label>Last Name</label>
            <input
              type="text"
              name="last_name"
              placeholder="Last Name"
              onChange={onChange}
              value={last_name}
              required
            />

            <label>User Name</label>
            <input
              type="text"
              name="username"
              placeholder="User Name"
              onChange={onChange}
              value={username}
              required
            />

            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={onChange}
              value={password}
              minLength="8"
              required
            />

            <label>Re-Password</label>
            <input
              type="password"
              name="re_password"
              placeholder="Confirm Password"
              onChange={onChange}
              value={re_password}
              minLength="8"
              required
            />
          </div>
          <button type="submit">Create Account</button>
        </form>
    </Container>
  );
};

export default RegisterPage;
