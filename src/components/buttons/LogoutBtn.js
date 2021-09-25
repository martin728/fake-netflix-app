import { logout } from "../../firebase.js";

const LogoutBtn = () => {

    return <div>
        <button className="form-btn" onClick={logout}>Log Out</button>
    </div>
}

export default LogoutBtn