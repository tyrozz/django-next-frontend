import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {  reset_password } from "../actions/auth";
import { useRouter } from "next/router";

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
      <form onSubmit={onSubmit}>
          <div>
            <label>First Name</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={onChange}
              value={email}
              required
            />            
          </div>
          <button type="submit">Reset your password</button>
        </form>

  </Container>
  );
};

export default ResetPassword;
