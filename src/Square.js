import React from 'react';
import { useState } from 'react';

const Square = (props) => {
    
    let [player,setPlayer] = useState('');

    const Trans = (e) => {
        
        console.log(`pos ${props.position} player ${props.player}`)
        props.call(props.position,props.player);
        setPlayer(props.player);

    }
    
    
    return (
        
            < button className='square'

            onClick={ Trans } > {player} </ button >
        

    )
}

export default Square;