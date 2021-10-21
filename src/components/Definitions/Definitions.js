import React from 'react'
import "./Definitions.css"


const Definitions = ({word, meanings}) => {
    return (
        <div className="meanings">
            {meanings[0] && word && (
            <audio style={{width: '100%', paddingBottom: "5%", paddingTop: "5%"}} src= {meanings[0].phonetics[0] && meanings[0].phonetics[0].audio} controls></audio>
            )}


            {word === "" ? (
                <span className='subtitle'>Start by typing a word in Search</span>
            ) : (

                meanings.map((mean) => 
                mean.meanings.map((item) => 
                item.definitions.map((def) => (
                    
                    <div className="singlemean" style ={{color: "white"}}>
                        <b className='meaning'> {def.definition} </b>
                        <br/>
                        {def.example && (
                        <span>
                            <b>Example: </b>
                            <em style={{textTransform: "capitalize"}}>{def.example}</em>
                        </span>
                        )}
                        <hr />
                    </div>
                ))))
            )}
            
        </div>
    )
}

export default Definitions
