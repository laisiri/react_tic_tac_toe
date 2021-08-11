import React , { useState } from 'react';
import Board from './Board';
import './main.css'

const Main = () => {

   //square array of state for store value of board
   const [square, setSquare] = useState(Array(9).fill(null));

   //player is a value of square 'x' or 'y'
   const [player, setPlayer] = useState('X');

   //winner set winner of game
   const [winner, setWinner] = useState(null);

   //function for set square
   const play = (arr) => setSquare(arr);

   //----> console.log(`start ${square} ${typeof(square)}`);
   //----> console.log(`player: ${player}`)

    const click = (val,position)=>{

        //----> console.log(`val ${val}`)
        //----> console.log(`in click ${square}`);

        if(val === 'X'){
            setPlayer('O');
        }else{
            setPlayer('X');
        }
        //---> console.log(`player: ${player}`)

        let temp = square.map((e) => e);
       
        //---> console.log(`before temp : ${temp}`);

        temp[position] = player;

        //---> console.log(`after temp: ${temp}`);

        play(temp);

        //----> console.log(`last square: ${square}`);
        
        checkWinner(temp);
    }

    const reset = () => {
        let arr = Array(9).fill(null);
        setSquare(arr);
        setWinner(null);
    }
    const win = (w) => setWinner(w);

    const checkWinner = (arr) => {
        let me = " ";

        if(arr[0] === 'X' && arr[1] === 'X' && arr[2] === 'X'){

            console.log('X WIN!');
            me = 'X';

        }else if(arr[3] === 'X' && arr[4] === 'X' && arr[5] === 'X'){

            console.log('X WIN!');
            me = 'X';

        }else if(arr[6] === 'X' && arr[7] === 'X'&& arr[8] === 'X'){

            console.log('X WIN!');
            me = 'X';

        }else if(arr[0] === 'X' && arr[3] === 'X' && arr[6] === 'X'){

            console.log('X WIN!');
            me = 'X';

        }else if(arr[1] === 'X' && arr[4] === 'X' && arr[7] === 'X'){

            console.log('X WIN!');
            me = 'X';

        }else if(arr[2] === 'X' && arr[5] === 'X' && arr[8] === 'X'){

            console.log('X WIN!');
            me = 'X';

        }else if(arr[0] === 'X' && arr[4] === 'X' && arr[8] === 'X'){

            console.log('X WIN!');
            me = 'X';

        }else if(arr[2] === 'X' && arr[4] === 'X'&& arr[6] === 'X'){

            console.log('X WIN!');
            me = 'X';

        }else if(arr[0] === 'O'&& arr[1] === 'O'&& arr[2] === 'O'){

            console.log('O WIN!');
            me = 'O';

        }else if(arr[3] === 'O'&& arr[4] === 'O'&& arr[5] === 'O'){

            console.log('O WIN!');
            me = 'O';

        }else if(arr[6]&&arr[7]&&arr[8] === 'O'){

            console.log('O WIN!');
            me = 'O';

        }else if(arr[0] === 'O' && arr[3] === 'O'&& arr[6] === 'O'){

            console.log('O WIN!');
            me = 'O';

        }else if(arr[1] === 'O' && arr[4] === 'O' && arr[7] === 'O'){

            console.log('O WIN!');
            me = 'O';

        }else if(arr[2] === 'O'&& arr[5] === 'O' && arr[8] === 'O'){

            console.log('O WIN!');
            me = 'O';

        }else if(arr[0] === 'O' && arr[4] === 'O' && arr[8] === 'O'){

            console.log('O WIN!')
            me = 'O';

        }else if(arr[2] === 'O' && arr[4] === 'O' && arr[6] === 'O'){

            console.log('O WIN!')
            me = 'O';
            
        }else{
            win(null);
        }
        win(me);

    }


    
  

    return (

        <div className='main'>

            <div className='btnMain'>

                < button onClick={reset} >reset</button>
                < h3 >Player: {player}</h3>
                < h3 >Winner: {winner}</h3>

            </div>

            

            < Board position={0} xOrY={player} won={winner} boardClick={click} mainData={square[0]}/>

            < Board position={1} xOrY={player} won={winner} boardClick={click} mainData={square[1]}/>

            < Board position={2} xOrY={player} won={winner} boardClick={click} mainData={square[2]}/>

            < Board position={3} xOrY={player} won={winner} boardClick={click} mainData={square[3]}/>

            < Board position={4} xOrY={player} won={winner} boardClick={click} mainData={square[4]}/>

            < Board position={5} xOrY={player} won={winner} boardClick={click} mainData={square[5]}/>

            < Board position={6} xOrY={player} won={winner} boardClick={click} mainData={square[6]}/>

            < Board position={7} xOrY={player} won={winner} boardClick={click} mainData={square[7]}/>

            < Board position={8} xOrY={player} won={winner} boardClick={click} mainData={square[8]}/>           
        </div>
    )


}
export default Main;