// Write your Character component here
import React from 'react'
import styled from 'styled-components';

const characterStyle = styled.div`
    h3 {
        font-size: 30px;
        font-color: red;
    }
    p {
        font-weight: bold;
        font-size: 50px;
    }
`

const Character = props => {
    return (
        <characterStyle>
    <div className='character-container'>
        <div className='info'>
       <h3>Name: {props.detail.name}</h3> 
       <p>BirthDay: {props.detail.birth_year}</p>
       <p>Height: {props.detail.height}</p>
       <p>Mass: {props.detail.mass}</p>
       <p>Gender: {props.detail.gender}</p>
       </div>
    </div>
    </characterStyle>
    )
}




export default Character
