import { MouseEventHandler, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { removeAuthedUser } from "../actions/user";
import { FaBars } from "react-icons/fa";

export type NavProps = {
    userReducer: {
        authedUser: string | null,
        booster: number,
        coins: number
    }
    toggleDuplicates: MouseEventHandler<HTMLLIElement>,
    showDuplicates: boolean;      
}



function NavBar({ userReducer,showDuplicates, toggleDuplicates } : NavProps) {
  const {authedUser, booster, coins} = userReducer;

  const [menuopen, setMenuOpen] = useState(false);

  const menu = () => setMenuOpen(!menuopen);
  
  const location = useLocation();
  const notBoosterView = () => {
    if(location.pathname === "/booster") {
      return false
    }
    return true
  }

  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(removeAuthedUser());
  };
  return (
    <ul className="Navbar">
      <ul className="Menu">
      <li id="NavMenu" className="NavLink" onClick={menu}>
        <FaBars className="Burger"/>
      </li>
      {menuopen &&
      <div>
      {notBoosterView() && <li className="NavLink" onClick={toggleDuplicates}>
        {showDuplicates ? "Hide duplicates" : "Show duplicates"}
      </li>}
      <li id="NavCollection" className="NavLink">
        <Link to="/" className="Link">
          Collection
        </Link>
      </li>
      <li id="NavBoosterLink" className="NavLink">
        <Link to="/booster" className="Link">
          Open Booster
        </Link>
      </li>
      <li id="NavLogout" className="NavLink" onClick={handleLogout}>
          Logout
      </li>
      </div>}
      </ul>
      <li id="NavUser" className="NavBarText">{authedUser}</li>
      {notBoosterView() &&
        <li id="NavCoins" className="NavBarText">Coins: {coins}</li>}
      {notBoosterView() &&
        <li id="NavBooster" className="NavBarText">Booster: {booster}</li>}
    </ul>
  );
}

const mapStateToProps = ({ userReducer }: NavProps) => {
  return {
    userReducer
  };
};

export default connect(mapStateToProps)(NavBar);
