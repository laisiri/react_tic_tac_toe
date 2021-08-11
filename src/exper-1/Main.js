

import React , {useState} from 'react';
import Bton from './Bton';
/*
let player = null;*/
const gameArr = [ null, null, null, 
                  null, null, null,
                  null, null, null]
                                

const Main = (props) => { 

    //const [valueOfBton, setValueOfBton] = useState(null);
    const [player, setPlayer] = useState(" ");

    const start = ()=>{
        setPlayer(null);
    }
    
    const getXorY = (xOrY,pos) => {


        //gameArr[pos] = xOrY;

        console.log(`${pos}  = ${xOrY}`);

        if(gameArr[pos] === null){

            if(xOrY === 'X'){
               setPlayer('Y');
            }else{
                setPlayer('X');
            }
            console.log(player)
        }
        
        
    } 
    
    return (

        <div className='main'>

           < button onClick={start}>START</button>

            < Bton  position={0} ClickBton={getXorY} btonPlayer={player}/>

            < Bton  position={1} ClickBton={getXorY} btonPlayer={player}/>

            < Bton  position={2} ClickBton={getXorY} btonPlayer={player}/>
        </div>

        

    )
}
export default Main;
