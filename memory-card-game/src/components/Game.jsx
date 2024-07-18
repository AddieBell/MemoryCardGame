import { useState, useEffect } from "react";
import Card from "./Card";
import Scoreboard from "./Scoreboard";

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function Game() {
    const [cards, setCards] = useState(shuffle(items));
    const [clickedItems, setClickedItems] = useState([]);
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);

    function shuffle(array) {
        return array.sort(() => Math.random() - 0.5);
    }

    const handleCardClick = (item) => {
        if (clickedItems.includes(item)) {
            setBestScore(Math.max(score, bestScore));
            setScore(0);
            setClickedItems([]);
        } else {
            setClickedItems([...clickedItems, item]);
            setScore(score + 1)
        }
        setCards(shuffle(items));
    };

useEffect(() => {
    setCards(shuffle(items));
}, []);
    

    return(
        <div className="game">
            <Scoreboard score={score} bestScore={bestScore}/>
            <div className="cards-container">
                {cards.map((item) => (
                    <Card key={item} item={item} handleClick={() => handleCardClick(item)}/>
                ))}
            </div>
        </div>
    );
}

export default Game;