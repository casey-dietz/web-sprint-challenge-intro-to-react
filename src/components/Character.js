// Write your Character component here
import React from 'react'
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

const CharacterStyle = styled.div`
    h3 {
        font-size: 30px;
        color: #FFE81F;
        background-color: black;
        display: flex;
        justify-content: center;
        text-align: center;
        width: 20%;
        margin: 15px auto;
        padding: 5px;
        border-radius: 10px;
    }
    p {
        font-weight: bold;
        font-size: 20px;
        background-color: black;
        color: #FFE81F;
        margin: 15px auto;
        width: 10%;
        border-radius: 10px;
    }
`

const Character = props => {
    // console.log(CharacterStyle)
    return (
        <CharacterStyle>
    <div className='character-container'>
        <div className='info'>
       <h3>Name: {props.detail.name}</h3> 
       <p>BirthDay: {props.detail.birth_year}</p>
       <p>Height: {props.detail.height}</p>
       <p>Mass: {props.detail.mass}</p>
       <p>Gender: {props.detail.gender}</p>
       </div>
    </div>
    </CharacterStyle>
    )
}




export default Character
