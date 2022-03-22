import { useState, useEffect } from 'react'


function LockedButton(props){

    const [disabled, SetDisabled] = useState(true)
    const [rgba, SetRgba] = useState("255,255,255,1")
    const [message, SetMessage] = useState("Try the other button a bit...")

    function changeColor() {
        const r = Math.floor(Math.random() * (255 + 1)).toString()
        const g = Math.floor(Math.random() * (255 + 1)).toString()
        const b = Math.floor(Math.random() * (255 + 1)).toString()
        const a = 1;
        const rgba = r + "," + g + "," + b + "," + a;
        SetRgba(rgba)
    }


    useEffect(() => {
        if(props.count >= 10){
            SetDisabled(false)
            SetMessage("Click me!!")
        }
    }, [props.count]);


    return(
        <div>
            <button style={{backgroundColor: `rgba(${rgba})`}} disabled={disabled} onClick={ () => changeColor() }>{message}</button>
        </div>
    )
}

export default LockedButton;