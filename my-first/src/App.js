import logo from './logo.svg';
import './App.css';
import Jsx from './components/1.JSX/Jsx';
import HelloFunctionComponent from './components/2.ComponentsAndProps/HelloFunctionComponent';
import HelloClassComponent from './components/2.ComponentsAndProps/HelloClassComponent';

function App() { // Detta är en förälder komponent
  return (
    <div className="App">
     <HelloClassComponent name="Jane Doe">
       <div>This is a text sent through props.children</div>
       </HelloClassComponent> 

      {/* Detta är en underkomponent */}
      <HelloFunctionComponent name="Johanna"/>

     {/*  <Jsx /> */}
    </div>
  );
}

export default App;
