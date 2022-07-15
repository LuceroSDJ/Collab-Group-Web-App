import { NavLink } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import DashboardIcon from "../assets/dashboard_icon.svg";
import Avatar from "./Avatar";
import AddIcon from "../assets/add_icon.svg";
//styles
import "./Sidebar.css";

export default function Sidebar() {
    const { user } = useAuthContext();
    return (
        <div className="sidebar">
            <div className="sidebar-content">
                <div className="user">
                    {/* avatar and user welcome message  */}
                    <Avatar src={user.photoURL} />
                    <p>Welcome, {user.displayName}</p>
                </div>
                <nav className="links">
                    <ul>
                        <li>
                            <NavLink to="/">
                                <img src={DashboardIcon} alt="dashboard icon" />
                                <span>Dashboard</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/create">
                                <img src={AddIcon} alt="add project icon" />
                                <span>New Project</span>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>

    )
}