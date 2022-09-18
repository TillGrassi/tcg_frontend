import { connect, useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { removeAuthedUser } from "../actions/user";

export type NavProps = {
    userReducer: {
        authedUser: string | null,
        booster: number,
        coins: number
    }
}


function NavBar({ userReducer } : NavProps) {
  const {authedUser, booster, coins} = userReducer;

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
      <li id="NavCollection" className="NavLink">
        <Link to="/" className="Link">
          Collection
        </Link>
      </li>
      <li id="NavBoosterLink" className="NavLink">
        <Link to="/booster" className="Link">
          Booster
        </Link>
      </li>
      <li id="NavLogout" className="NavLink" onClick={handleLogout}>
          Logout
      </li>
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
