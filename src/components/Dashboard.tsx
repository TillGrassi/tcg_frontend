import { connect } from "react-redux";
import NavBar from "./NavBar";
import Collection from "./Collection";
import { useState } from "react";

export type FullProps = {
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

    
    const [showDuplicates, setShowDuplicates] = useState(false);

    const toggleDuplicates = () => {
        setShowDuplicates(!showDuplicates);
      };
    
    return (
        <div>
            <NavBar showDuplicates = {showDuplicates} toggleDuplicates = {toggleDuplicates} />
            <Collection showDuplicates = {showDuplicates}/>  
        </div>

    )
}

const mapStateToProps = (props: FullProps) => {
    return {
        props,
    }
}

export default connect(mapStateToProps)(Dashboard)