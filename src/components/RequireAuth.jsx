import { useAuth } from "../contexts/auth.context"
import { Navigate, useLocation } from "react-router-dom";

const RequireAuth = ({children}) => {
    const location = useLocation();
    const { token } = useAuth();
    
    return token ? children : <Navigate to={'/login'} state={{path: location.pathname}} replace />
}

export default RequireAuth;