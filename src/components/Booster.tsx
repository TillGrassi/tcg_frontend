import { connect, useDispatch } from "react-redux";
import { addBooster, removeBooster, removeCoin } from "../actions/user";
import { addCards, Pack } from "../actions/collection";
import BoosterCard from "./BoosterCard";
import NavBar, { NavProps } from "./NavBar";
import Boosterpack from "../images/Boosterpack.png";
import Coin from "../images/coin.png";
import { useState } from "react";
import { addBoosterServer, addCardsToCollection, getBooster, removeBoosterServer, removeCoinServer } from "../utils/apiCalls";

type BoosterContent = {id: number, name: string, description: string, rarity: string};

type BoosterProps = {
    userReducer: {
        authedUser: string | null,
        booster: number,
        coins: number
    }
}

const Booster = ({ userReducer } : BoosterProps) => {

    const user = userReducer.authedUser;
    const {booster, coins} = userReducer;
    const dispatch = useDispatch();

    const [opening, setOpening] = useState(false);
    const [pack, setPack] = useState<BoosterContent[]>([]);
    const [opened, setOpened] = useState(true);

    // buy booster
    const buyBooster = async () => {
        const result = await addBoosterServer(user as string)
        if(result) {dispatch(addBooster())}
        const done = await removeCoinServer(user as string)
        if(done) {dispatch(removeCoin())}
    };
    // get booster
    const open = async () => {
        setOpening(true);
        //api call
        const boostercards = await getBooster();
        setPack(boostercards);
        //@ts-ignore
        setTimeout(() => {setOpened(false)},2000);
        const done = await removeBoosterServer(user as string)
        if(done) {dispatch(removeBooster())};
        const cards: Pack = await addCardsToCollection(user, boostercards);
        if(cards)dispatch(addCards(boostercards));        
    }
    const another = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        setPack([]);
        setOpened(true);
        setOpening(false);
        open()
    }

    return (
        <div id="Boosterview">
            {/* @ts-ignore */}
            <NavBar />
            <div className="Booster">
                <div className="BoosterSideBar">
                    <img className="Boosterpack" src={Boosterpack} alt="Booster:" />
                    <div id="Boostercount">{booster}</div>
                    <img className="Coin" src={Coin} alt="Coins:" />
                    <div id="Coincount">{coins}</div>
                    <h2>Buy Booster:</h2>
                    {coins >= 10 ? 
                    <button onClick={buyBooster} className="NavLink">10 Coins</button> :
                    <div>
                        <button className="NavLink" disabled>10 Coins</button> 
                        <p>You dont have enough coins.</p>   
                    </div>}
                    {pack.length > 0 && booster > 0 && <button onClick={another} className="NavLink">Open another Booster</button>}
                </div>
                <div className="CollectionContainer BoosterContainer">
                    {opened ?
                    <>
                        {booster > 0 && 
                        <div className="OpenBooster">
                            {opening ? 
                            <img className="BigBoosterpack BoosterMoving" src={Boosterpack} alt="Booster" /> :
                            <>
                                <img className="BigBoosterpack" src={Boosterpack} alt="Booster" />                         
                                <button onClick={open} className="NavLink">Open Booster</button> 
                            </>}
                        </div>}
                    </> : 
                    <>
                        {/* @ts-ignore */}
                        {pack.map((card, index) => <BoosterCard key={index} info={card}/>)}
                    </>}
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