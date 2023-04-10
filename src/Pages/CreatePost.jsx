import React from 'react';
import SideBar from '../Components/SideBar';
import {supabase} from '../client'

const CreatePost = () => {

    const choices = ['Red', 'Green', 'Blue', 'Purple', 'Yellow', 'Orange', 'Pink', 'Rainbow']

    const creatPost = async (event) => {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const position = document.getElementById('position').value;
        const number = document.getElementById('number').value;
        const color = document.querySelector('input[name=color]:checked').value;

        const post = {
            name : name,
            position: position,
            number: number,
            color: color
        }

        await supabase
        .from('Posts')
        .insert(post)
        .select();

        window.location = "/"
    }

    return (
        <div className='container'>
            <SideBar />
            <form>
                <div className='row'>
                    <div className='col'>
                        <div className="mini-container">
                            <h3>Name</h3>
                            <div className="form-text" id="">
                                <input type="text" className='form-control' placeholder="Enter teamate's name " id='name'/>
                            </div>
                        </div>    
                    </div>
                    <div className='col'>
                        <div className="mini-container">
                            <h3>Position</h3>
                            <div className="form-text" id="">
                                <input type="text" className='form-control' placeholder="Enter teamate's position " id='position'/>
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                        <div className="mini-container">
                            <h3>Number</h3>
                            <div className="form-text" id="">
                                <input type="text" className='form-control' placeholder="Enter teamate's number " id='number'/>
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
                <input type="submit" className='btn btn-primary' value="Create Teamate" onClick={creatPost}/>
            </form>
        </div>
    )
}

export default CreatePost