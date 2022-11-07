import logo from './logo.svg';
import './App.css';
import axios from "axios";
import React, {useState, useEffect} from "react";

function App() {

  const [hello,sethello] = useState();

  useEffect = (() => {
    axios.get('/api/hello')
        .then(res => sethello(res.data)).catch(err => console.log(err))
  })

  return (
    <div>
        백앤드 데이터 {hello}
    </div>
  );
}

export default App;
