import { useState } from "react";
export type CardProps = {
    info: {
        id: number,
        name: string,
        image: string,
        description: string | null,
        rarity: string
    }
}

const BoosterCard = ({info}: CardProps) => {

    const [revealed, setRevealed] = useState(false);

    const reveal = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        setRevealed(true);
    }

    const data = () => {
        return (
            <div>
                <p className="CardName">{info.name}</p>
                <img className="CardArtwork" src={`http://localhost:8080/images/${info.image}.png`} alt={`${info.name} Illustration`} />
                <p className="CardDescription">{info.description}</p>
                <p className="CardRarity">{info.rarity}</p>
                <p className="CardId">{`${info.id}/50`}</p> 
            </div>
        )
    }

    return (
        <div>
            {revealed ? 
            <div>
            {info.rarity === "common" && 
            <div className="CardTemplate Common">
                {data()}
            </div>}
            {info.rarity === "uncommon" && 
            <div className="CardTemplate Uncommon">
                {data()}
            </div>}
            {info.rarity === "rare" && 
            <div className="CardTemplate Rare">
                {data()}
            </div>} 
            </div> :
            <div>
            {info.rarity === "common" && 
            <div onClick={reveal} className="CardTemplate BackCommon"></div>}
            {info.rarity === "uncommon" && 
            <div onClick={reveal} className="CardTemplate BackUncommon"></div>}
            {info.rarity === "rare" && 
            <div onClick={reveal} className="CardTemplate BackRare"></div>}
            </div>}
        </div>
    )
}

export default BoosterCard;