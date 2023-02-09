import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { useAuthStatus } from "../hook/useAuthStatus";


function PrivateRoute() {
    const { loggedIn, checkingStatus } = useAuthStatus()

    if (checkingStatus) {
        return <h1>Loading...</h1>
    }

    return  loggedIn ? <Outlet /> : <Navigate to='/login' />       
}

export default PrivateRoute
