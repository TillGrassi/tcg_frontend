import { connect } from "react-redux";
import Card from "./Card";
import { useState } from "react";
import CardPopup from "./CardPopup";

type CollectionType = {
  collectionReducer: {
    collection: Array<object>;
  };
  showDuplicates: boolean;
};

const Collection = ({ collectionReducer, showDuplicates }: CollectionType) => {
  const { collection } = collectionReducer;
  const [selectedCard, setSelectedCard] = useState(null);

  const uniqueCollection = showDuplicates
    ? collection
    : Array.from(new Set(collection.map((card: any) => card.id))).map(
        (id: any) => collection.find((card: any) => card.id === id)
      );

  const openPopup = (card: any) => {
    setSelectedCard(card);
  };

  const closePopup = () => {
    setSelectedCard(null);
  };

  return (
    <div>
    <div className="CollectionContainer">
      {/* @ts-ignore */}
      {uniqueCollection.sort((a, b) => a.id - b.id).map((card, index) => (
          <div key={index} onClick={() => openPopup(card)}>
            {/* @ts-ignore */}
            <Card info={card} />
          </div>
        ))}
      {uniqueCollection.length === 0 && (
        <div>
          <h1>Oops, you don't have cards yet. Open a booster!</h1>
        </div>
      )}
      {selectedCard && (
        <div className="PopupBackdrop" onClick={closePopup}>
          <CardPopup info={selectedCard} onClose={function (): void {} }  />
        </div>
      )}
    </div>
    </div>
  );
};

const mapStateToProps = ({ collectionReducer }: CollectionType) => {
  return {
    collectionReducer,
  };
};

export default connect(mapStateToProps)(Collection);
