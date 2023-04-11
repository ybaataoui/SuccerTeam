import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { supabase } from "../client";
import SideBar from "../Components/SideBar";

const EditPost = () => {

    const choices = ['Red', 'Green', 'Blue', 'Purple', 'Yellow', 'Orange', 'Pink']
    const positions = ['Goalkeeper', 'Defense', 'Midfield',  'Attacker']

    const {id, name, position, number, color} = useParams();

    const [newName, setNewName] = useState(name);
    const [newAge, setNewAge] = useState(number);
    const [selectedColor, setSelectedColor] = useState(color);
    const [newPosition, setPosition] = useState(position);

   //update player
   const updatePlayer = async (event) => {
        event.preventDefault();

       //const newColor = document.querySelector('input[name="color"]:checked').value; Get a radio button value
        await supabase
        .from('Posts')
        .update({name: newName, position: newPosition, number: newAge, color: selectedColor})
        .eq('id', id);

        window.location = "/";
    }

    //Delete Function
    const deletePlayer = async (event) => {
        event.preventDefault();
        await supabase
        .from('Posts')
        .delete()
        .eq('id', id);

        window.location = "/";
    }
    return (
        <div>
            <SideBar />
            <div>
                <h2>Current Player's Information</h2>
                <p>Name: {name} &nbsp; Position: {position} &nbsp; Number: {number}</p>
            </div>
            <form>
                <div className='row'>
                    <div className='col'>
                        <div className="mini-container">
                            <h3>Name</h3>
                            <div className="form-text" id="">
                                <input type="text" className='form-control' placeholder="Enter teamate's name " 
                                    id="name" value={newName} onChange={(e) => setNewName(e.target.value)}
                                 />
                            </div>
                        </div>    
                    </div>
                    <div className='col'>
                        <div className="mini-container">
                            <h3>Position</h3>
                            <div className="form-check ">
                                <select className='form-select form-select-lg mb-2' onChange={(e) => setPosition(e.target.value)} >
                                <option >Select a teamate's position</option>
                                    {positions &&
                                        positions.map((item) => (
                                            <option 
                                                className='form-check-input me-1'
                                                id="position"
                                                value={item}    
                                                selected={position}
                                            >
                                                {item}
                                            </option>    
                                        
                                        ))}
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                        <div className="mini-container">
                            <h3>Age</h3>
                            <div className="form-text" id="">
                                <input type="text" className='form-control' placeholder="Enter teamate's number " 
                                id='number' value={newAge} onChange={(e) => setNewAge(e.target.value)}/>
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                        <div className="mini-container">
                            <h3>Color :</h3>
                            <div className="form-check ">
                                <ul className='list-group'>
                                    {choices &&
                                        choices.map((choice) => (
                                        <li key={choice} className=''>
                                                <input
                                                    className='form-check-input me-1'
                                                    id="color"
                                                    value={choice}    
                                                    type="radio"
                                                    name='color'
                                                    defaultChecked ={choice == color}
                                                    onChange={(e) => setSelectedColor(e.target.value)}
                                                />
                                                <label className="form-check-label">{choice}</label>
                                            </li>
                                        ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <br/>
                
                {/* <input type="submit" className='btn btn-primary btn-lg' value="Submit" onClick={update}/> */}
                <button className="btn btn-primary btn-margin btn-lg" onClick={updatePlayer}>Update</button>
                <button className="btn btn-danger btn-margin btn-lg" onClick={deletePlayer}>Delete</button>
                
            </form>
        </div>
    )
}

export default EditPost;