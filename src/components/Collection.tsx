import { connect } from "react-redux"
import Card from "./Card";

type CollectionType = {
    collectionReducer: {
        collection: Array<object>
    }
}

const Collection = ({ collectionReducer }: CollectionType) => {
    const {collection} = collectionReducer;
    console.log(collection)
    return (
        <div className="CollectionContainer">
            {/* @ts-ignore */}
            {collection.sort((a, b) => a.id - b.id).map((card, index) => <Card key={index} info={card}/>)}
        </div>
    )
}

const mapStateToProps = ({ collectionReducer }: CollectionType) => {
    return {
        collectionReducer,
    }
}

export default connect(mapStateToProps)(Collection)