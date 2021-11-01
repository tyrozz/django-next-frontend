import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import Link from "next/link";
import Router from "next/router";
import { logout } from "../actions/auth";

import { Button, Stack } from "@chakra-ui/react";

export const Navbar = (props) => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const logoutHandler = () => {
    if (dispatch && dispatch !== null && dispatch !== undefined) {
      dispatch(logout());
    }
    Router.push("/");
  };

  return (
    <div>
      {isAuthenticated ? (
        <Stack direction="row" spacing={4} align="center">
          <Button>
            <a onClick={logoutHandler}>Logout</a>
          </Button>
          <Link href="/changePassword">
            <a>Change Password</a>
          </Link>
          <Link href="/resetPassword">
            <a>Reset Password</a>
          </Link>
        </Stack>
      ) : (
        <Stack direction="row" spacing={4} align="center">
          <Button>
            <Link href="/register">
              <a>Register</a>
            </Link>
          </Button>
          <Button>
            <Link href="/login">
              <a>Login</a>
            </Link>
          </Button>
        </Stack>
      )}
    </div>
  );
};
