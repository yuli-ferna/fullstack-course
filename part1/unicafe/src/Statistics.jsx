import Title from "./Title";

const StatisticLine = ({ text, value }) => {
  return <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>;
}

const Statistics = ({ good, neutral, bad }) => {
  if (!good && !neutral && !bad) {
    return <div>
      <Title text="statistics" />
      No feedback given
    </div>
  }
  const calculateAll = () => (good + neutral + bad);
  const calculateAverage = () => {
    return (bad > good ? -1 : 1) * ((good - bad) / calculateAll()).toFixed(1);
  };
  const calculatePositivePer = () => (`${(good * 100 / calculateAll()).toFixed(1)}%`);

  return <div>
    <Title text="statistics" />
    <table>
      <tbody>
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="all" value={calculateAll()} />
      <StatisticLine text="average" value={calculateAverage()} />
      <StatisticLine text="positive" value={calculatePositivePer()} />
      </tbody>
    </table>
  </div>
};

export default Statistics;