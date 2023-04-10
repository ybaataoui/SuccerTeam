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

    return (
        <div className="">
            <SideBar />
            <div className="container">
                {
                    posts && posts.length > 0 ?
                    posts.map((post) =>
                        <Link to={`/DetailsPlayer/${post.id}/${post.name}/${post.position}/${post.number}`} style={{ color: 'inherit', textDecoration: 'inherit'}}>
                            <div key={post.id}>
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