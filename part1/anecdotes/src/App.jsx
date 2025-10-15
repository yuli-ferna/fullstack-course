import { useState } from 'react'
import Button from './Button'
const AnecdoteMostVoted = ({ anecdote, votes }) => {
  console.log(anecdote)
  if (!votes) {
    return <>There is no votes in any anecdote.</>
  }
  return <>
    <p>{anecdote}</p>
    <p>{votes}</p>
  </>
};

const Votes = ({votes}) => {
  if (!votes) {
    return <></>
  }
  return <p>has {votes} votes</p>
}
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const [votes, setVotes] = useState({});
  const [selected, setSelected] = useState(0);
  const handleSelect = () => {
    setSelected(Math.floor((Math.random() * anecdotes.length)))
  }
  const [mostVoted, setMostVoted] = useState(null);

  const handleVotes = (idSelected) => {
    const copy = {...votes};
    if(!copy[idSelected]) {
      copy[idSelected] = 0;
    }
    copy[idSelected] += 1;
    if (!mostVoted) {
      setMostVoted(idSelected);
    } else if (copy[idSelected] > copy[mostVoted]) {
      setMostVoted(idSelected);
    }
    setVotes(copy);
  };
console.log(mostVoted)
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <Votes votes={votes[selected]} />
      <Button text="vote" onClick={() => handleVotes(selected)} />
      <Button text="next anecdote" onClick={handleSelect} />
      <h1>Anecdote with most votes</h1>
      <AnecdoteMostVoted anecdote={anecdotes[mostVoted]} votes={votes[mostVoted]} />
    </div>
  )
}

export default App;