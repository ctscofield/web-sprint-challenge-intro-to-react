import React from "react";
import styled from "styled-components";


const Border = styled.div`
    margin-left: 40%;
    margin-right: 40%;
`;
const Bio = styled.div`
    font-size: 1.2em;
    font-weight: bold;
    color: black;
    text-shadow: 1px 1px 5px #fff;
    
`;

const Name = styled.h2`
    color: black;
`;

const Character = props => {
    const { characterData } = props;
    console.log(characterData);
    return (
    <Border className="border">
        <Name className="Name">{characterData.name}</Name>
        <Bio className="Bio ">
            <p className="birthYear">Birth year: {characterData.birth_year}</p>
            <p className="gender">Gender: {characterData.gender}</p>
            <p className="height">Height: {characterData.height}</p>
            <p className="mass">Mass: {characterData.mass}</p>
            <p className="eyeColor">Eye color: {characterData.eye_color}</p>
            <p className="hairColor">Hair color: {characterData.hair_color}</p> 
            <p className="skinTone">Skin color: {characterData.skin_color}</p>
        </Bio>
    </Border>
    );
};


export default Character;