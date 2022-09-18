import { connect } from "react-redux";
import BoosterCard from "./BoosterCard";
import NavBar, { NavProps } from "./NavBar";
import Boosterpack from "../images/Boosterpack.png";
import Coin from "../images/coin.png";

const Booster = ({ userReducer } : NavProps) => {
    const {booster, coins} = userReducer;

    const pack = [
        {id: 45, name: "Herbert", description: "Test", rarity: "rare"},
        {id: 2, name: "Franz", description: "Test", rarity: "uncommon"},
        {id: 3, name: "Klaus", description: "Test", rarity: "common"},
        {id: 6, name: "Peter", description: "Test", rarity: "uncommon"},
        {id: 8, name: "Brigitte", description: "Test", rarity: "common"}
    ];
    // buy booster
    // get booster
    // add to collection

    return (
        <div>
            {/* @ts-ignore */}
            <NavBar />
            <div className="Booster">
                <div className="BoosterSideBar">
                    <img className="Boosterpack" src={Boosterpack} alt="Booster:" />
                    <div id="Boostercount">{booster}</div>
                    <img className="Coin" src={Coin} alt="Coins:" />
                    <div id="Coincount">{coins}</div>
                    <h2>Buy Booster:</h2>
                    {coins > 10 ? 
                    <button className="NavLink">10 Coins</button> :
                    <div>
                        <button className="NavLink" disabled>10 Coins</button>
                        <p>You don't have enough Coins.</p>
                    </div>}
                </div>
                <div className="CollectionContainer BoosterContainer">
                  {/* @ts-ignore */}
                   {pack.map((card, index) => <BoosterCard key={index} info={card}/>)}
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = ({ userReducer }: NavProps) => {
    return {
      userReducer
    };
  };
  
export default connect(mapStateToProps)(Booster);