import { useAuth } from "../contexts/auth.context"
import { Navigate, useLocation } from "react-router-dom";

const RequireAuth = ({children}) => {
    const location = useLocation();
    const auth = useAuth();

    return auth.token ? children : <Navigate to={'/'} state={{path: location.pathname}} replace />
}

export default RequireAuth;