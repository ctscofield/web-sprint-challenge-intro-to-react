import React from "react";
import styled from "styled-components";

const Character = props => {
    const { characterData } = props;
    console.log(characterData);
    return (
        <div className="border">
            <h2 className="Name">{characterData.name}</h2>
            <button></button>
            <div className="Bio">
                <p className="birthYear">{characterData.birth_year}</p>
                <p className="gender">{characterData.gender}</p>
                <p className="height">{characterData.height}</p>
                <p className="mass">{characterData.mass}</p>
                <p className="eyeColor">{characterData.eye_color}</p>
                <p className="hairColor">{characterData.hair_color}</p> 
                <p className="skinTone">{characterData.skin_color}</p>
            </div>
        </div>
    );
};

export default Character;