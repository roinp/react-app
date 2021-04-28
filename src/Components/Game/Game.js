import React, {useState} from  'react'

function Game(){
     let firstNumber = Math.floor(Math.random()*10) 
     let secondNumber = Math.floor(Math.random()*10)
     const [numberOne, setNumberOne] = useState(firstNumber)
     const [numberTwo, setNumberTwo] = useState(secondNumber)
     const [result,setResult] = useState(0)

    function randomize(e) {
        setNumberOne(firstNumber)
        setNumberTwo(secondNumber)
        if (numberOne > numberTwo){
            setResult(result+1)
        }
        if(numberTwo > numberOne){
            setResult(result-1)
        }
    }
    return (
        <div className="game">
            <p onClick={randomize}>{numberOne}</p>
            <p onClick={randomize}>{numberTwo}</p>
            <h5>{result}</h5>
        </div>
    )
}

export default Game