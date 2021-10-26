import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { login, reset_register_success } from "../actions/auth";

import { Container } from "../components/Container";

const LoginPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
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

  if (typeof window !== " undefined" && isAuthenticated) {
    router.push("/dashboard");
  }

  return (
    <Container height="100vh">
        <form onSubmit={onSubmit}>
          <div>
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
            <button type="submit">Login</button>
          </div>
        </form>
    </Container>
  );
};

export default LoginPage;
