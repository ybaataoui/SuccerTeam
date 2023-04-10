import { useEffect, useState } from "react";
import { supabase } from "../client";
import Card from "../Components/Card";
import SideBar from "../Components/SideBar";
import { Link } from "react-router-dom";

const ReadPosts = () => {

    const [posts, setPosts] = useState([]);
    //console.log(posts)

    useEffect(() => {
        const fetchPost = async () => {
            const {data} = await supabase
                .from('Posts')
                .select()
                .order('created_at', { ascending: true})

                setPosts(data);
        }
        fetchPost().catch(console.error)
    },[])

    // goalkeeper, defense, midfield, and attack
    const numberOfAttackers = posts.filter(item => item.position === "Attacker");
    const numberOfGoalkeepers = posts.filter(item => item.position === "Goalkeeper");
    const numberOfDefense = posts.filter(item => item.position === "Defense");
    const numberOfMidfield = posts.filter(item => item.position === "Midfield");

    // console.log(player.length);

    return (
        <div className="container">
            <SideBar />
            <h1 className="title">Your Teamate Gallery!</h1>
            <div className="statistics">
                <h3>So far your team has :</h3>
                <h5 style={{color: "dark blue"}}>
                    {numberOfAttackers.length} Attacker(s) &nbsp;&nbsp; {numberOfGoalkeepers.length} Goalkeeper(s) &nbsp;&nbsp; 
                    {numberOfDefense.length} Defense(s) &nbsp;&nbsp; {numberOfMidfield.length} Midfielder(s)
                </h5>
            </div>
            <div className="playersContainer">
                
                {
                    posts && posts.length > 0 ?
                    posts.map((post) =>
                        <Link to={`/DetailsPlayer/${post.id}/${post.name}/${post.position}/${post.number}`} style={{ color: 'inherit', textDecoration: 'inherit'}}>
                            <div key={post.id} className="playerCard">
                                <Card id={post.id} name={post.name} position={post.position} number={post.number} color={post.color} key={post.id}/>
                            </div>
                        </Link>   
                    ) : <h2>{'No Team Have Add  Yet 😞'}</h2>
                }
            </div>
        </div>

    )
}

export default ReadPosts;