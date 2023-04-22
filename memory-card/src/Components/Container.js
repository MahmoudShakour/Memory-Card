import Card from "./Card";
import "../Styles/Container.css";

export default function Container({cardsNumber,cardsName,cardsSource,checkUserInput,gameStatus,restartGame}){
    
    if(gameStatus==="lose"){
        return(
            <div className="game-over" >
                <div>
                    Game Over
                </div>
                <button onClick={restartGame} >
                    try Again
                </button>
            </div>
        );
    }

    if(gameStatus==="win"){
        return(
            <div className="game-over" >
                <div>
                    congratulations. you aced it.   
                </div>
                <button onClick={restartGame} >
                    try Again
                </button>
            </div>
        );
    }

    let cardMapping=cardsNumber.map((card,index)=>{
        return (
            <Card 
                key={index} 
                cardNumber={card} 
                cardName={cardsName[index]} 
                cardSource={cardsSource[index]}
                checkUserInput={checkUserInput} 
            />
        );
    });

    return (
        <div className="container">
            {cardMapping}
        </div>
    );
}