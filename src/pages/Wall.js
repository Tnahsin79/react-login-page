import React, { useEffect, useState } from "react";
import Post from "../components/post";
//import { useParams } from "react-router-dom";

const Wall = (props) => {
    const [postsData, setPostsData] = useState([]);
    const id = props.id;
    const name = props.name;
    const email = props.email;

    useEffect(() => {
        fetch("http://localhost:3001/posts/" + id)
            .then((res) => res.json())
            .then((data) => setPostsData(data))
            .catch(console.error);
        console.log(postsData);
    }, []);

    return (
        <div>
            <h1>User ID: {id}</h1>
            <h1>User Name: {name}</h1>
            <h1>User Email: {email}</h1>
            {
                postsData.map((data) => <Post id={id} post_id={data.post_id} name={data.name} text={data.text} likes={data.likes} />)
            }
        </div>
    )
}
export default Wall;