import logo from './logo.svg';
import './App.css';
import Jsx from './components/1.JSX/Jsx';
import HelloFunctionComponent from './components/2.ComponentsAndProps/HelloFunctionComponent';

function App() { // Detta är en förälder komponent
  return (
    <div className="App">
      {/* Detta är en underkomponent */}
      <HelloFunctionComponent name="Johanna"/>

     {/*  <Jsx /> */}
    </div>
  );
}

export default App;
