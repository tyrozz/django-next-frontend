import { useState, useEffect } from "react"; 
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import  { login, reset_register_success } from '../actions/auth'
import { route } from "next/dist/server/router";

const LoginPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const [formData, setFormData] = useState({    
    username: "",
    password: "",
  });

  const { username, password } = formData;

  useEffect(() => {
    if (dispatch && dispatch !== null && dispatch !== undefined) {
        dispatch(reset_register_success);
    }
  }, [])

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if(dispatch && dispatch !== null && dispatch !== undefined) {
      dispatch(login(username, password))
    }    
  };

  if (typeof window !== ' undefined' &&  isAuthenticated) {
      router.push('/dashboard')
  }

  return (
    <div>
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
        <button type='submit'>Login</button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
