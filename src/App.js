import React,{useState} from 'react';
import './App.css';
import SideBar from './Components/SideBar/SideBar';
import ContentSpace from './Components/ContentSpace/ContentSpace';



function App() {

  const [gotId, setGotId] = useState("1");

  const titleChangeHandler = (titleId) => {
    setGotId(titleId);
  }

  return (
    <div className="App">
      <SideBar onTitleChangeId={titleChangeHandler}></SideBar>
      <ContentSpace idForContent={gotId}></ContentSpace>
    </div>
  );
}

export default App;
