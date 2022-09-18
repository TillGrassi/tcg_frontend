import Image from "../images/rare_1.png";
export type CardProps = {
    info: {
        id: number,
        name: string,
        image: string,
        description: string | null,
        rarity: string
    }
}

const Card = ({info}: CardProps) => {

    const data = () => {
        return (
            <div>
                <p className="CardName">{info.name}</p>
                <img className="CardArtwork" src={Image} alt={`${info.name} Illustration`} />
                <p className="CardDescription">{info.description}</p>
                <p className="CardRarity">{info.rarity}</p>
                <p className="CardId">{`${info.id}/50`}</p> 
            </div>
        )
    }

    return (
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
        </div>
    )
}

export default Card;