import { connect } from "react-redux";
import NavBar from "./NavBar";
import Collection from "./Collection";

type FullProps = {
    userReducer: {
        authedUser: string,
        booster: number,
        coins: number
    },
    collectionReducer: {
        collection: Array<object>,
    }
}

const Dashboard = () => {
    return (
        <div>
            <NavBar />
            <Collection />
        </div>
    )
}

const mapStateToProps = (props: FullProps) => {
    return {
        props,
    }
}

export default connect(mapStateToProps)(Dashboard)