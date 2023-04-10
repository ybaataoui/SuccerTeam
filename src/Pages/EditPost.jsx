import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { supabase } from "../client";
import SideBar from "../Components/SideBar";

const EditPost = () => {

    const choices = ['Red', 'Green', 'Blue', 'Purple', 'Yellow', 'Orange', 'Pink', 'Rainbow']
    const {id, name, position, number, color} = useParams();

   // console.log(id, name, position, number, color)
//     const [player, setPlayer] = useState({newName: "", playerID: id})
//    const handleChange = (event) => {
//     const {name, value} = event.target;
//     setPlayer((prev) => {
//         return {
//             ...prev,
//             [name]:value,
//         }
//     })}

   //update player
   const updatePlayer = async (event) => {
        event.preventDefault();

        const newName = document.getElementById('name').value;
        const newPosition = document.getElementById('position').value;
        const newNumber = document.getElementById('number').value;
        const newColor = document.querySelector('input[name="color"]:checked').value;

        await supabase
        .from('Posts')
        .update({name: newName, position: newPosition, number: newNumber, color: newColor})
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
                                <input type="text" className='form-control' placeholder="Enter teamate's name " id="name" defaultValue={name}
                                 />
                            </div>
                        </div>    
                    </div>
                    <div className='col'>
                        <div className="mini-container">
                            <h3>Position</h3>
                            <div className="form-text" id="">
                                <input type="text" className='form-control' placeholder="Enter teamate's position " id='position' defaultValue={position}/>
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                        <div className="mini-container">
                            <h3>Number</h3>
                            <div className="form-text" id="">
                                <input type="text" className='form-control' placeholder="Enter teamate's number " id='number' defaultValue={number}/>
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