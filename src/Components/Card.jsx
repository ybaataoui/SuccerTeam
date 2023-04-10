import { Link, Outlet } from "react-router-dom";

const Card = (props) => {

    return (
        <div className="">

            <div className="card" style={{boxShadow: `5px 10px ${props.color}`}}>
                <h2 className="name">{props.name}</h2>
                <p>{props.position}</p>
                <p>{props.number}</p>
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