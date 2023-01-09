import { Button } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { AuthContextType } from "../contexts";
import useAuth from "../hooks";

const AuthButton = () => {
    const auth: AuthContextType | null = useAuth();
    const location = useLocation();
  
    return (
      <div className="ms-auto me-3">
        {
          auth && auth.loggedIn
          ? <Button variant="secondary" onClick={() => auth.logOut()}>Log out</Button>
          : <Link  className="btn btn-primary" to="/login" state={{ from: location }}>Log in</Link>
        }
      </div>
    );
};

export default AuthButton;