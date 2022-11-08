import { NavLink } from "react-router-dom";


const NavItem = ({url, label}) => {
    return (
        <NavLink style={{textDecoration: "none", marginRight: "20%"}} to={url} className="text-white">{label}</NavLink>
    )
}

export default NavItem;