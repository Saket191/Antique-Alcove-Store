import { Navigate } from "react-router-dom";
function Logout()
{
localStorage.removeItem("token");
localStorage.removeItem("email");
localStorage.removeItem("mobile");
localStorage.removeItem("city");
localStorage.removeItem("address");
localStorage.removeItem("gender");
localStorage.removeItem("role");
localStorage.removeItem("info");
localStorage.removeItem("name");
localStorage.removeItem("status");
localStorage.removeItem("_id");
return(
    <><Navigate  to='/login'/></>
)
}

export default Logout;