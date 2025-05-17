//import './App.css';
import React, {useState} from 'react';
import { useNewsArticles } from './api';

function LikeCounter() {
  const [count, setcount] = useState(0);
  const increment = () => {
    setcount((oldCount) => oldCount + 1);
  };
  const decrement = () => {
    setcount((oldCount) => oldCount - 1);
  }

  return (
    <div>
      <p>Like count: {count}</p>
      <button onClick={increment}>Like</button>
      <button onClick={decrement}>Dislike</button>
    </div>
  )
}

function Headline(props){
  return (
    <div>
      <h1>{props.title}</h1>
      <LikeCounter />
    </div>
  )
}

function App() {
  const {loading, headlines, error} = useNewsArticles();

  if (loading) {
    return <p>Loading....</p>
  }

  if (error) {
    return <p>Something went wrong: {error.meaasage}</p>;
  }

  return (
    <div className="App">
      { headlines.map((headline) => (
          <Headline key={headline.url} title={headline.title} /> 
      )) }
    </div>
  );
}

export default App;
