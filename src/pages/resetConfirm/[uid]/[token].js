import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";

import { Container } from "../../../components/Container";
import { reset_password_confirm } from "../../../actions/auth";


const ResetPasswordConfirm = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { uid, token } = router.query;
  // console.log(uid);
  // console.log(token);
//   const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const [formData, setFormData] = useState({
    new_password1: "",
    new_password2: "",
  });

  const { new_password1, new_password2 } = formData;
  // console.log(formData)

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (dispatch && dispatch !== null && dispatch !== undefined) {
      dispatch(reset_password_confirm(uid, token, new_password1, new_password2));
      console.log("if icinde")
    }
  };

  return (
    <Container height="100vh">
      <form onSubmit={onSubmit}>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="new_password1"
            placeholder="Password"
            onChange={onChange}
            value={new_password1}
            minLength="8"
            required
          />
        </div>

        <div>
          <label>Re-Password</label>
          <input
            type="password"
            name="new_password2"
            placeholder="Password"
            onChange={onChange}
            value={new_password2}
            minLength="8"
            required
          />
        </div>

        <button type="submit">Reset your password</button>
      </form>
    </Container>
  );
};

export default ResetPasswordConfirm;
