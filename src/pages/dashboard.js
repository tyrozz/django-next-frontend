import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Button,
  Box,
} from "@chakra-ui/react";

import { Container } from "../components/Container";

const Dashboard = () => {
  const router = useRouter();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);

  return (
    <Container height="100vh">
       <Box p={20}>
      {isAuthenticated && <h1>Username: {user !== null && user.username}</h1>}
      {isAuthenticated && <h1>First Name: {user !== null && user.first_name}</h1>}
      {isAuthenticated && <h1>Last Name: {user !== null && user.last_name}</h1>}
      </Box>
    </Container>
  );
};

export default Dashboard;
