import { useState } from 'react'
import Button from './Button'
import Statistics from './Statistics';
import Title from './Title';

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClick = (type) => {
    switch (type) {
      case "good":
        setGood(good + 1);
        break;
      case "neutral":
        setNeutral(neutral + 1);
        break;
      case "bad":
        setBad(bad + 1);
        break;
      default:
        break;
    }
  };


  return (
    <div>
      <div>
        <Title text="give feedback" />
        <Button text="good" onClick={() => handleClick("good")} />
        <Button text="neutral" onClick={() => handleClick("neutral")} />
        <Button text="bad" onClick={() => handleClick("bad")} />
      </div>
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  )
}

export default App;