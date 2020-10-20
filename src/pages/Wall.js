import React, { useEffect, useState } from "react";
import Post from "../components/post";
//import { useParams } from "react-router-dom";

const Wall = (props) => {
    const [postsData, setPostsData] = useState([]);
    const [friends, setFriends] = useState([]);
    const id = props.id;

    useEffect(() => {
        fetch("http://localhost:3001/friends/" + id)
            .then((res) => res.json())
            .then((data) => setFriends(data))
            .catch(console.error);
        console.log(friends);
        fetch("http://localhost:3001/posts/" + id)
            .then((res) => res.json())
            .then((data) => setPostsData(data))
            .catch(console.error);
        console.log(postsData);

    }, [friends, postsData]);

    return (
        <div>
            <h1>User ID: profileData.id</h1>
            <h1>User Name: profileData.name</h1>
            <h1>User Email: profileData.email</h1>
            <Post />
        </div>
    )
}
export default Wall;