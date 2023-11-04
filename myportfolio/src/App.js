import './App.css';
import Border from './Border/Border.js'
import Table from './Table/Table.js'

function App() {
  return (
    <div className ="customBackground">
    <Border size={"big  "} content={<Table />}/>
    </div>
  );
}

export default App;
