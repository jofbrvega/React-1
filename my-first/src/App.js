import logo from './logo.svg';
import './App.css';
import Jsx from './components/1.JSX/Jsx';
import HelloFunctionComponent from './components/2.ComponentsAndProps/HelloFunctionComponent';
import HelloClassComponent from './components/2.ComponentsAndProps/HelloClassComponent';
import Comment from './components/2.ComponentsAndProps/comments/Comment';
import Avatar from './components/2.ComponentsAndProps/comments/Avatar';


function App() {
  const comment = {
    date: new Date(),
    text: 'This is my first comment',
    author: {
      name: 'Johanna',
      avatarUrl: 'http://placekitten.com/g/64/64'
    }
  };

  return (
    <div className="App">
     {/* Components and props  */}
        <Comment 
        date={comment.date}
        text={comment.text}
        author={comment.author}
        />

        <Avatar user={comment.author}/>
    </div>
  );
}

export default App;
