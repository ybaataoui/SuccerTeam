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

        window.location = "http://localhost:5173/";
    }

    return(
        <div className="container">
            <SideBar />
            <div className="">
                <h1 className="name">Player Name: {name}</h1>
                <h3> Position: {position}</h3>
                <h3> Number: {number}</h3>
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