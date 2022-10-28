import { Redirect, withRouter } from "react-router-dom";
import { useAuthState } from "../../../contexts/auth-context";

const Home = () => {
  const { auth } = useAuthState();
  return auth.isAuthenticated ? (
    <Redirect to="/list" />
  ) : (
    <Redirect to="/login" />
  );
};

export default withRouter(Home);
