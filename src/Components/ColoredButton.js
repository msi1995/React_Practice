import { useState, useEffect } from 'react'

function ColoredButton(props){
    const [color, SetColor] = useState("red")

    function changeColor(){
        color == "red" ? SetColor("blue") : SetColor("red");
    }
    function doCount(){
        props.setCount(props.count+1);
    }


    const btnClass = `${color}_button`

    useEffect(() => {
        document.title = `${props.count} clicks so far...`
    });

    return(
        <div>
            <button className={btnClass} onClick={ () => {changeColor(); doCount();}}>Click me!</button>
        </div>
    )
}

export default ColoredButton;