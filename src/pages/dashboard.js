import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const router = useRouter();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);

  return (
    <div>
      <h1>First name: {user !== null && user.username}</h1>    
    </div>
  );
};

export default Dashboard;
