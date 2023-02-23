// import logo from './logo.svg';
import {useState} from 'react';
import './App.css';
import Header from './components/Header';
import FleetInputArea from './components/FleetInputArea';

function App() {

  const [inputText, setInputText] = useState({nameOfRequester:"",
  position:"",
  plateNumber:"",
  vehicleType:"",
  dateRequested: date
})
  return (
    <div className="App">
      <Header headerTitle="Fleet Management System" />
      <FleetInputArea inputText={inputText} setInputText={setInputText} />
    </div>
  );
}

export default App;
