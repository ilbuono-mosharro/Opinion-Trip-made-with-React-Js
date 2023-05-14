import {useNavigate} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

export default function LogOut() {
    const navigate = useNavigate()
    const { handleLogout } = useContext(AuthContext);
    

    function handleLogOut() {
        localStorage.removeItem("token")
        handleLogout()
        navigate("cities")
    }

    return (
        <>
        <button onClick={handleLogOut} className="bg-white border px-4 py-1 font-sans text-base font-semibold text-black border-black rounded-lg hover:bg-black hover:border-transparent hover:text-white">Logout</button>
        </>
    )
}