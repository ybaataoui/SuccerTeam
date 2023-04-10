import { Link, Outlet } from "react-router-dom";
import Player from '../assets/football-player.png'

const Card = (props) => {

    return (
        <div className="">

            <div className="card mini-container d-flex align-items-center justify-content-center" style={{boxShadow: `0 0 5px 5px ${props.color}`}}>
                <img src={Player} alt="" className="player"/>
                <h3 className="name">Name of Player: {props.name}</h3>
                <p>Position of Player: {props.position}</p>
                <p>Number of Player: {props.number}</p>
                {/* <p className="color">{props.color}</p> */}
                <Link to={`/editPost/${props.id}/${props.name}/${props.position}/${props.number}/${props.color}`}>
                    <button className="btn btn-primary editButton">Edit Player</button>
                </Link>
            </div>
            
            
            <Outlet />
        </div>
    )
}

export default Card;