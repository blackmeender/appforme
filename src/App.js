import logo from './logo.svg';
import './App.css';
import Message from './Message';
import './Message.css';

const sayHello = 'Hello World!'
function App(props) {
  return (
    <div className="App">
      <header className="App-header">

        <Message newMessage='My message' />
      </header>
    </div>
  );
}

export default App;
