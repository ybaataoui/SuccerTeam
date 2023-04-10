import { Link, Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";
import SideBar from "./SideBar";
import Ball from '../assets/Daco_5185674.png'
import { supabase } from "../client";

const DetailsPlayer = () => {
    const {id, name, position, number} = useParams();

    const deletePlayer = async (event) => {
        event.preventDefault();
        await supabase
        .from('Posts')
        .delete()
        .eq('id', id);

        window.location = "/";
    }

    return(
        <div className="container">
            <SideBar />
            <div className="">
                <h1 className="name">Player's Name: {name}</h1>
                <h3> Position: {position}</h3>
                <h3> Age: {number}</h3>
                <br />
                {number < 26 && number > 15 ? <h2 style={{color: "green"}}>Congratulation the player is in good shape</h2>: <h2 style={{color: "red"}}>The player is too old or too young, you should consider another player</h2>}
                <br />
                <br />
                <Link to={`/editPost/${id}/${name}/${position}/${number}`}>
                    <button className="btn btn-primary editButton">Edit Player</button>
                </Link>
                
                <button className="btn btn-danger deleteButton" onClick={deletePlayer}>Delete</button>
            </div>
            <img src={Ball} alt="" className="ball"/>
            <Outlet />
        </div>
    )
}

export default DetailsPlayer;