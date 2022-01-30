import './App.css';
import Mensaje from './Mensaje.js';
function App() {
  return (
    <div className="App">
     <Mensaje color="red" msg="Estamos trabajando" />
     <Mensaje color="yellow" msg="en un curso" />
     <Mensaje color="green" msg="de React"/>
    </div>
  );
}

export default App;
