import React from "react";
import Dice from "./Dice";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";

function App() {
  const [dice, setDice] = React.useState(allNewDice());
  const [tenzies, setTenzies] = React.useState(false);
  const [start, setStart] = React.useState(false);
  const [score, setScore] = React.useState(0);
  const prevScore = JSON.parse(localStorage.getItem("Score"));
  console.log(score);
  React.useEffect(() => {
    const allHeld = dice.every((el) => el.isHeld);
    const firstValue = dice[0].value;
    const sameVal = dice.every((el) => el.value === firstValue);
    if (allHeld && sameVal) {
      setTenzies(true);
      score < prevScore && localStorage.setItem("Score", JSON.stringify(score));
      setScore(0);
    }
  }, [dice]);

  function allNewDice() {
    const newArr = [];
    for (let i = 0; i < 10; i++) {
      newArr.push({
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: nanoid(),
      });
    }
    return newArr;
  }

  function allNew() {
    setTenzies((pre) => !pre);
    setDice(allNewDice());
  }

  function diceRoll() {
    if (!tenzies) {
      setDice((pre) =>
        pre.map((dice) => {
          return !dice.isHeld
            ? { ...dice, value: Math.ceil(Math.random() * 6) }
            : dice;
        })
      );
      setScore((pre) => pre + 1);
    } else {
      allNew();
    }
  }

  function held(id) {
    setDice((pre) =>
      pre.map((dice) => {
        return dice.id === id ? { ...dice, isHeld: !dice.isHeld } : dice;
      })
    );
  }

  const diceEl = dice.map((el) => (
    <Dice
      key={el.id}
      value={el.value}
      isHeld={el.isHeld}
      held={() => held(el.id)}
    />
  ));

  if (start) {
    return (
      <main className="main">
        {tenzies && <Confetti />}
        <h1>Tenzies</h1>
        <p>
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </p>
        <div className="box-container">{diceEl}</div>
        <button onClick={diceRoll} className="btn rollDice">
          {tenzies ? "New Game" : "Roll"}
        </button>
        <h2>Best Score : {prevScore}</h2>
      </main>
    );
  } else {
    return (
      <button onClick={() => setStart(true)} className="btn wlc">
        Welcome to Tenzies!
      </button>
    );
  }
}

export default App;
