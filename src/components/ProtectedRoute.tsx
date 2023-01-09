import {
    Navigate
} from 'react-router-dom';
import useAuth from '../hooks';

  
interface ProtectedRouteProps {
redirectPath?: string
children: JSX.Element
}
  
const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  redirectPath = '/login',
  children
}) => {

  const auth = useAuth();

  return (
    auth && auth.loggedIn ? children : <Navigate to={redirectPath} replace />
  );

};
  
export default ProtectedRoute;
  