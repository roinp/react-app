import React, {useState, useRef} from  'react'
import './Render.css'

function RenderTable(){
   
    const teamsArray = useRef([
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
    ]); 

    const optionsArray = useRef(teamsArray.current.map((team, index) => <option key={index}>{team.name}</option>));

    const [teams, setTeams] = useState(teamsArray.current);

    let newTeamsArray = teams.map((team, index) => (
        <tr key={index}>
            <td>{team.name}</td>
            <td>{team.game}</td>
            <td>{team.score}</td>
        </tr>)
    );
    
    return (
        <div className="table">
            <table>
                <tbody>
                    {newTeamsArray}
                </tbody>
            </table>
            <select>{optionsArray.current}</select>
            <input type='number'></input>
            <input type="number"></input>
            <select>{optionsArray.current}</select>
        </div>
    )
}

export default RenderTable;


