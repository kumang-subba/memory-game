/* eslint-disable no-var */
import React, { useEffect, useState } from "react";
import CardContainer from "./components/cardContainer";
import Header from "./components/header";
import GameLost from "./components/modal";

function App() {
  const [cardArr] = useState([
    { id: 1, src: `images/1.png`, name: "venusaur" },
    { id: 2, src: `images/2.png`, name: "charizard" },
    { id: 3, src: `images/3.png`, name: "blastoise" },
    { id: 4, src: `images/4.png`, name: "pikachu" },
    { id: 5, src: `images/5.png`, name: "machamp" },
    { id: 6, src: `images/6.png`, name: "rapidash" },
    { id: 7, src: `images/7.png`, name: "ghastly" },
    { id: 8, src: `images/8.png`, name: "gyarados" },
    { id: 9, src: `images/9.png`, name: "laprus" },
    { id: 10, src: `images/10.png`, name: "dragonite" },
    { id: 11, src: `images/11.png`, name: "mewtwo" },
    { id: 12, src: `images/12.png`, name: "mew" },
  ]);
  const [gameArr, setGameArr] = useState([]);
  const [gameScore, setGameScore] = useState(0);
  shuffleArray(cardArr);
  const handleClick = (c) => {
    if (gameArr.includes(c)) {
      setGameArr([]);
      setGameScore(0);
      alert("You lose");
    } else {
      setGameScore((prev) => prev + 1);
      setGameArr([...gameArr, c]);
    }
  };
  useEffect(() => {
    if (gameScore === 12) {
      setGameArr([]);
      setGameScore(0);
      alert("YOU WIN");
    }
  }, [gameScore]);
  return (
    <div
      className="app"
      style={{ background: "linear-gradient(#0b571e,#578a63)" }}
    >
      <GameLost />
      <Header gameScore={gameScore} />
      <CardContainer cardArr={cardArr} handleClick={handleClick} />
    </div>
  );
}
function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}
export default App;
