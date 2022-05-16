import Snippet from './components/Snippet';
import Filter from './components/Filter';
import Form from './components/Form';

function App(props) {

  return (
    <div className="App">
      <header className="App-header">
        <h2>Snippet</h2>

        <Form />
        
        <Snippet name="Eat" id="eatId" />
        <Snippet name="Sleep" id="sleepId" />
        
        <Filter />
      </header>
    </div>
  );
}

export default App;
