
import React, { useState } from 'react';

const Bton = (props) => {

    //const [positionO, setPositionO] = useState(null);
    const [value, setValue] = useState(null);

    const onBton = () => {
        console.log(props.position + ' ' + props.btonPlayer)
        //setPositionO(props.position);
        if(value === null){

            setValue(props.btonPlayer);
            console.log(props.position + " " + props.btonPlayer)
            props.ClickBton(props.btonPlayer,props.position)

        }
        
    }



    return (

        <div className="bton">
            < button className='btonButton' onClick={onBton}>{value}</button>
        </div>
    )
}

export default Bton;