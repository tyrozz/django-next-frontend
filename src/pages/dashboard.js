import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

import { Container } from "../components/Container";

const Dashboard = () => {
  const router = useRouter();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);

  return (
    <Container height="100vh">
      <h1>First name: {user !== null && user.username}</h1>
    </Container>
  );
};

export default Dashboard;
