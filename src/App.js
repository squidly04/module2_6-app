import logo from './QUT-logo.png'; //'./logo.svg';
import './App.css';

const animals = [
  {
    name: "Lion",
    number: 3,
    eats: ["zebra", "antelope", "buffalo", "hippopotamus"]
  }, 
  {
    name: "Tiger",
    number: 5,
    eats: ["moose", "deer", "buffalo"]
  }, 
  {
    name: "Giraffe",
    number: 6,
    eats: ["leaves", "twigs"]
  }, 
  {
    name: "Elephant",
    number: 4,
    eats: ["grass", "leaves", "flowers", "fruit"]
  }, 
  {
    name: "Monkey",
    number: 10,
    eats: ["fruit", "leaves", "vegetables", "insects"]
  }, 
  {
    name: "Lemur",
    number: 15,
    eats: ["fruit", "leaves", "insects"]
  }, 
  {
    name: "Rhinoceros",
    number: 2,
    eats: ["grass", "shoots", "leaves", "berries"]
  }
];

function AnimalComponent (props) {
  let {name, number, eats} = props;
  return (
    <div>
      <h1>{name}</h1>
      <p>{number}</p>
    </div>
  )
}

function sumAll(...args){
  // args is the name for the array
  let sum = 0;
  for(let arg of args) {
    sum+=arg;
  }

  return sum;
}

/* 
{alert(sumAll(1))}
{alert(sumAll(1, 2))}
{alert(sumAll(1, 2, 3))} 
*/

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1> Queensland University of Technology </h1>

        {
          animals.map(animal => (
            <AnimalComponent {...animal} />
        ))
        }
        <a
          className="App-link"
          href="https://www.qut.edu.au"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Us
        </a>
      </header>
    </div>
  );
}

export default App;
