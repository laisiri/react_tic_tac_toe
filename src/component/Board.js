import React, {useState} from "react";


const Board = (props) => {

    const [value, setValue] = useState(null);

    

    const handleBtn = () => {

        //if square === null execue in side else square !== null button not execute
        //It's mean this component can use.
        if(props.mainData === null){

            //and won === null or won === ' ' it's mean nobody won
            if(props.won === null || props.won === ' '){
                //----- check point------
                //----> console.log(`in board mainData ${props.mainData}`)
                //----> console.log(`in board xOrY ${props.xOrY}`)
                //-------end check--------
                setValue(props.xOrY);

                //-----> console.log(`in board mainDataval : ${value}`)

                //send data back to main 
                props.boardClick(props.xOrY,props.position)

                }

        }

        

    }
    return (

        <div className='boards'>
            {props.position}
            
            
            < button onClick={handleBtn}  >{props.mainData}</button>

        </div>
        
      );
}
 
export default Board;