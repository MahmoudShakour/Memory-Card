import "../Styles/Card.css";

export default function Card({cardNumber,cardName,cardSource,checkUserInput}){

    return (
        <div className="card" onClick={()=>checkUserInput(cardNumber)} >
            <img src={cardSource} alt="me" className="image" />
            <div className="name" >
                {cardName}
            </div>
        </div>
    );
}