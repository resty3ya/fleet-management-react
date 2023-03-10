// import logo from './logo.svg';
import {useState} from 'react';
import './App.css';
import Header from './components/Header';
import FleetInputArea from './components/FleetInputArea';
import FleetTableArea from './components/FleetTableArea';

function App() {

  const [inputText, setInputText] = useState();//should be walang naka initialize sa loob pra mag run yung new Date()

  const [vehicleList, setVehicleList] = useState([]);

  return (
    <div className="App">
      <Header headerTitle="Fleet Management System" />
      <FleetInputArea inputText={inputText} setInputText={setInputText} />
      <FleetTableArea vehicleList={vehicleList} />
    </div>
  );
}

export default App;
