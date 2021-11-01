import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import Link from "next/link";

import { logout, request_refresh } from "../actions/auth";

import { Flex, useColorMode, Button, Stack } from "@chakra-ui/react";
import { Navbar } from "./Navbar";

export const Container = (props) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const logoutHandler = () => {
    if (dispatch && dispatch !== null && dispatch !== undefined) {
      dispatch(logout());      
    }
  };

  useEffect(() => {
    if (dispatch && dispatch !== null && dispatch !== undefined) {
      dispatch(request_refresh());
    }
  }, [dispatch]);

  const { colorMode } = useColorMode();

  const bgColor = { light: "gray.50", dark: "gray.900" };

  const color = { light: "black", dark: "white" };
  return (
    <div>
      <Navbar />
       
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="flex-start"
        bg={bgColor[colorMode]}
        color={color[colorMode]}
        {...props}
      />
    </div>
  );
};
