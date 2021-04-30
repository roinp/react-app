import React, {useState,useRef} from  'react'
import './Render.css'

function RenderTable(){
   
    let teamsArray =[
        {
            name:"Ac Milan",
            game:0,
            score:0,
        },
        {
            name:"Real madrid",
            game:0,
            score:0,
        },
        {
            name:"PSG",
            game:0,
            score:0,
        },
        {
            name:"Dinamo Batumi",
            game:0,
            score:0,
        }


    ] 

    const [teams,setTeams] = useState(teamsArray);

    let newTeamsArray=[];
    let optionsArray = [];

    teams.forEach((element,index) => {
        newTeamsArray.push(<tr><td>{teams[index].name}</td>{<td>{teams[index].game}</td>}{<td>{teams[index].score}</td>}</tr>)
        optionsArray.push(<option>{teams[index].name}</option>)
    } )  


    
    return (
        <div className="table">
            <table>
                <tbody>
                    {newTeamsArray}
                </tbody>
            </table>
            <select>{optionsArray}</select>
            <input type='number'></input>
            <input type="number"></input>
            <select>{optionsArray}</select>
        </div>
    )
}

export default RenderTable;


