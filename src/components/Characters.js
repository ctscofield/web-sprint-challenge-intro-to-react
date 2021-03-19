import React from "react";
import Character from "./Character";

const Characters = (props) => {
    const { characterData } = props;
    
    return (
        <div className="characters-container">
            {characterData.map((character) => {
                
                return <Character 
                characterData={character}

                />
            })}
        </div>
    );
};

export default Characters;