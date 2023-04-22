import "../Styles/Header.css"

export default function Header({currentScore,bestScore}){
    
    return(
        <div className="header">
            <div className="title-description" >
                <div className="title" >AOT Memory Game</div>
                <div className="description" >Get points by clicking on an image but don't click on any more than once!</div>
            </div>
            <div className="scoring" >
                <div>{"score: "+currentScore}</div>
                <div>{"best score: "+bestScore}</div>
            </div>
        </div>
    );
}