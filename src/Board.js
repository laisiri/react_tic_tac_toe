import React from 'react';
import { useState } from 'react';
import Square from './Square';
import './board.css';

const arrBoard = [
    '0','0','0',
    '0','0','0',
    '0','0','0'
  ];
  
const Board = (props) =>  {

    const [player,setPlayer] = useState('X')
    //const Winer = props.win;
    
    const ReciveData = (pos,player,Winer=props.win) => {

        arrBoard[pos] = player;

        if(player === 'X'){
            setPlayer('O');
        }else{
            setPlayer('X')
        }
        //setVal(data);
        
        
        console.log(`arrBoard[${pos}] = ${arrBoard[pos]}`)

        if( arrBoard[0] === 'X' && 
            arrBoard[1] === 'X' &&
            arrBoard[2] === 'X' ){

                Winer('X WIN!')
                return
               
            }else if( arrBoard[3] === 'X' && 
                      arrBoard[4] === 'X' &&
                      arrBoard[5] === 'X' ){

                         Winer('X WIN!')
                
                      }
                      else if( arrBoard[6] === 'X' && 
                               arrBoard[7] === 'X' &&
                               arrBoard[8] === 'X' ){
          
                                   Winer('X WIN!')
                               }
                               else if( arrBoard[0] === 'X' && 
                                        arrBoard[3] === 'X' &&
                                        arrBoard[6] === 'X' ){
                                
                                             Winer('X WIN!')
                                        }
                                        else if( arrBoard[1] === 'X' && 
                                                 arrBoard[4] === 'X' &&
                                                 arrBoard[7] === 'X' ){
                            
                                                  Winer('X WIN!')
                                                 }
                                                 else if( arrBoard[2] === 'X' && 
                                                          arrBoard[5] === 'X' &&
                                                          arrBoard[8] === 'X' ){
                                     
                                                            Winer('X WIN!')
                                                          }
                                                          else if( arrBoard[0] === 'X' && 
                                                                   arrBoard[4] === 'X' &&
                                                                   arrBoard[8] === 'X' ){
                                              
                                                                      Winer('X WIN!')
                                                                   }
                                                                   else if( arrBoard[2] === 'X' && 
                                                                            arrBoard[4] === 'X' &&
                                                                            arrBoard[6] === 'X' ){
                                                       
                                                                                Winer('X WIN!')
                                                                            }
                                                                            /* ***** check O ********** */
                                                                            
                                                                            else if( arrBoard[0] === 'O' && 
                                                                                     arrBoard[1] === 'O' &&
                                                                                     arrBoard[2] === 'O' ){
                                                                
                                                                                          Winer('O WIN!')
                                                                
                                                                            }else if( arrBoard[3] === 'O' && 
                                                                                      arrBoard[4] === 'O' &&
                                                                                      arrBoard[5] === 'O' ){
                                                                
                                                                                          Winer('O WIN!')
                                                                                      }
                                                                                      else if( arrBoard[6] === 'O' && 
                                                                                               arrBoard[7] === 'O' &&
                                                                                               arrBoard[8] === 'O' ){
                                                                          
                                                                                                    Winer('O WIN!')
                                                                                                    
                                                                                               }
                                                                                               else if( arrBoard[0] === 'O' && 
                                                                                                        arrBoard[3] === 'O' &&
                                                                                                        arrBoard[6] === 'O' ){
                                                                                                
                                                                                                         Winer('O WIN!')
                                                                                                        }
                                                                                                        else if( arrBoard[1] === 'O' && 
                                                                                                                 arrBoard[4] === 'O' &&
                                                                                                                 arrBoard[7] === 'O' ){
                                                                                            
                                                                                                                   Winer('O WIN!')
                                                                                                                 }
                                                                                                                 else if( arrBoard[2] === 'O' && 
                                                                                                                          arrBoard[5] === 'O' &&
                                                                                                                          arrBoard[8] === 'O' ){
                                                                                                     
                                                                                                                             Winer('O WIN!')
                                                                                                                          }
                                                                                                                          else if( arrBoard[0] === 'O' && 
                                                                                                                                   arrBoard[4] === 'O' &&
                                                                                                                                   arrBoard[8] === 'O' ){
                                                                                                              
                                                                                                                                       Winer('O WIN!')
                                                                                                                                   }
                                                                                                                                   else if( arrBoard[2] === 'O' && 
                                                                                                                                            arrBoard[4] === 'O' &&
                                                                                                                                            arrBoard[6] === 'O' ){
                                                                                                                       
                                                                                                                                                 Winer('O WIN!')
                                                                                                                                            }
/********************************************************************************************************************************************************************** */                                                                                                                                            
console.log(`end of function`)
}
    //console.log(val);
    
    return (
        <div>
            
            
            <div className='board'>
                < Square position={0} player={player} call={ReciveData} />
                < Square position={1} player={player} call={ReciveData}/>
                < Square position={2} player={player} call={ReciveData}/>
                < Square position={3} player={player} call={ReciveData}/>
                < Square position={4} player={player} call={ReciveData}/>
                < Square position={5} player={player} call={ReciveData}/>
                < Square position={6} player={player} call={ReciveData}/>
                < Square position={7} player={player} call={ReciveData}/>
                < Square position={8} player={player} call={ReciveData}/>
            </div>
        </div>
    )
}

export default Board;