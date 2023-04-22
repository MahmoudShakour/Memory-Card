import React,{useEffect, useState} from "react";
import Container from "./Container";
import Footer from "./Footer";
import Header from "./Header";
import "../Styles/App.css";
import { levelOne,levelTwo,levelThree } from "../Assets/data/data";


function App(){
  
  const [currentScore,setCurrentScore]=useState(0);
  const [bestScore,setBestScore]=useState(0);
  const [cards,setCards]=useState(structuredClone(levelOne));
  const [gameStatus,setGameStatus]=useState("playing");

  function increment(){
    setCurrentScore(currentScore+1);
  }

  function resetScore(){
    setCurrentScore(0);
  }
  
  function shuffle(){
    let newCards=cards.map(x=>({value:x, r:Math.random()})).sort((a,b)=>a.r-b.r).map(x=>x.value);
    setCards(newCards);
  }
  
  function restartGame(){
    setGameStatus("playing");
    setCards(structuredClone(levelOne));
    setCurrentScore(0);
  }

  
  useEffect(()=>{
    setBestScore(Math.max(bestScore,currentScore));

    if(currentScore===4){
      setCards(structuredClone(levelOne.concat(levelTwo)));
    }
    if(currentScore===12){
      setCards(structuredClone(levelOne.concat(levelTwo).concat(levelThree)));
    }
    if(currentScore===24){
      setGameStatus("win");
    }
  },[currentScore,bestScore]);
  

  function checkUserInput(clickedValue){
    
    let clicked=cards.filter((card)=>(card.value===clickedValue));
    clicked=clicked[0];
    
    if(clicked.isVisited){
      resetScore();
      setGameStatus("lose");
    }
    else{
      clicked.isVisited=true;
      increment();
      shuffle();
    }
  }

  return (
    <div className="app">
      <Header currentScore={currentScore} bestScore={bestScore} />
      <Container
        cardsNumber={cards.map((card)=>card.value)} 
        cardsName={cards.map((card)=>card.name)} 
        cardsSource={cards.map((card)=>card.url)} 
        checkUserInput={checkUserInput} 
        gameStatus={gameStatus}
        restartGame={restartGame}
      />
      <Footer/>
    </div>
  );

}

export default App;
