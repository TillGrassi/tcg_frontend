import React from "react";
import { connect, useDispatch } from "react-redux";
import { deleteCard } from "../actions/collection";
import { addCoin } from "../actions/user";
import { addCoinServer, deleteCardServer } from "../utils/apiCalls";
import Card from "./Card";
import { NavProps } from "./NavBar";
type CardPopupProps = {
  info: {
    id: number;
    name: string;
    image: string;
    description: string | null;
    rarity: string;
  };
  className?: string;
  onClose: () => void;
  userReducer: {
    authedUser: string | null,
  }
};

const CardPopup = ({userReducer, info, onClose }: CardPopupProps ) => {
    const username = userReducer.authedUser;
    const dispatch = useDispatch();
    //remove Cards
    const sell = async () => {
        if (info.rarity === "common") {
            const done = await addCoinServer(1,username as string)
            if(done) {
              dispatch(addCoin(1))
              const result = await deleteCardServer(username as string, info.id);
              if(result) {dispatch(deleteCard(info))}
            }
        }
        if (info.rarity === "uncommon") {
            const done = await addCoinServer(2,username as string)
            if(done) {
              dispatch(addCoin(2))
              const result = await deleteCardServer(username as string, info.id);
              if(result) {dispatch(deleteCard(info))}
            }
        }
        if (info.rarity === "rare") {
            const done = await addCoinServer(5,username as string)
            if(done) {
              dispatch(addCoin(5))
              const result = await deleteCardServer(username as string, info.id);
              if(result) {dispatch(deleteCard(info))}
            }
        }  
    }
  return (
    <div className="CardPopupBackdrop" onClick={onClose}>
      <div className="CardPopup">
        <Card info={info} className="CardPopup"/>         
        <div className="CardPopupButtons">
          <h4>Sell Cards for Coins</h4>
          <p>Common: 1 Coin <br/>Uncommon: 2 Coins <br/>Rare: 5 Coins</p>
          <button onClick={sell} className="NavLink">Sell (
            {info.rarity === "common" && 1}
            {info.rarity === "uncommon" && 2}
            {info.rarity === "rare" && 5}
            )</button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ userReducer }: NavProps) => {
    return {
      userReducer
    };
  };
  

export default connect(mapStateToProps)(CardPopup);
