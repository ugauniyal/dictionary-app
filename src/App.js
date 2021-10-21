import axios from 'axios';
import './App.css';
import {useEffect, useState} from 'react';
import { Container } from '@material-ui/core';
import Header from './components/Header/Header';
import Definitions from './components/Definitions/Definitions';

function App() {

  const [meanings, setmeanings] = useState([])
  const [word, setword] = useState("")

  const dictionaryAPI = async() => {
    try {
      const data = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);

      setmeanings(data.data)

    } catch(error) {
      console.log(error);
    }
  }

  console.log(meanings)

  useEffect(() => {
    dictionaryAPI();
  }, [word])

  return (
    <div className="App" style={ {height: '100vh', background: '#1a191a'} }>
      <Container maxWidth="md" style={ {display:'flex', flexDirection: 'column', height: '100vh', color: 'white'} }>

        <Header 
        word={word}
        setword={setword}
        />

        {meanings &&
        
        <Definitions word={word}
         meanings={meanings}
         
         />}

      </Container>
    </div>
  );
}

export default App;
