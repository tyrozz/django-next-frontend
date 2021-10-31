import { useState, useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import router, { useRouter } from "next/router";
import { change_password } from "../actions/auth";

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

  useEffect(() => {
    if (dispatch && dispatch !== null && dispatch !== undefined) {
      dispatch(change_password);
    }
  }, [dispatch]);

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (dispatch && dispatch !== null && dispatch !== undefined) {
      dispatch(change_password(old_password, new_password1, new_password2));
    }
  };

  if (typeof window !== "undefined" && isAuthenticated) {
    router.push("/login");
  }

  return (
    <Container>
      <form onSubmit={onSubmit}>
        <div>
          <label>Old password</label>
          <input
            type="password"
            name="old_password"
            placeholder="Password"
            onChange={onChange}
            value={old_password}
            minLength="8"
            required
          />

          <label>New password</label>
          <input
            type="password"
            name="new_password1"
            placeholder="Password"
            onChange={onChange}
            value={new_password1}
            minLength="8"
            required
          />

          <label>New password again</label>
          <input
            type="password"
            name="new_password2"
            placeholder="Password"
            onChange={onChange}
            value={new_password2}
            minLength="8"
            required
          />
          <button type="submit">Change password</button>
        </div>
      </form>
    </Container>
  );
};

export default ChangePassword;
