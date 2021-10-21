import { createTheme, TextField, ThemeProvider } from '@material-ui/core'
import React from 'react'
import "./Header.css"

const Header = ({word, setword}) => {
    const darkTheme = createTheme({
        palette: {
            primary: {
                main: '#fff',
            },
          type: 'dark',
        },
      });

    return (
        <div className='header'>
            <span className='title'>{word ? word : 'Dictionary'}</span>
            <br/>
            <br/>
            <br/>
            <br/>
            <div className='inputs'>
                <ThemeProvider theme={darkTheme}>
                    <TextField 
                    label='Search a word' 
                    className='search'
                    value={word}
                    onChange={(e) => setword(e.target.value)}
                    />
                </ThemeProvider>
            </div>
        </div>
    )
}

export default Header
