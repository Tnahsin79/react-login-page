import React, { useEffect, useState } from "react";
import { Button } from "reactstrap";

const Post = (props) => {
    const userId = props.id;
    const postId = props.post_id;
    const id = postId.split("-")[0];
    const index = parseInt(postId.split("-")[1]);
    const name = props.name;
    const [likes,setLikes] = useState(props.likes);
    const text = props.text;
    const [liked, setLiked] = useState(null);
    const [numberOfLikes, setNumberOfLikes] = useState(likes.length);

    useEffect(() => {
        setLikes(props.likes);
        if (likes.includes(userId))
            setLiked(true);
        else
            setLiked(false);
        setNumberOfLikes(likes.length)
    });

    const like = () => {
        try {
            setLiked(true);
            var data = {
                likerId: userId,
                index: index,
                type: true
            }
            fetch("http://localhost:3001/likes/" + id, {
                method: "PUT",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json"
                }
            })
        }
        catch (error) {
            console.log(error);
        }
    }

    const dislike = () => {
        try {
            setLiked(false);
            var data = {
                likerId: userId,
                index: index,
                type: false
            }
            fetch("http://localhost:3001/likes/" + id, {
                method: "PUT",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json"
                }
            })
        }
        catch (error) {
            console.log(error);
        }
    }

    return (
        <div class="card container">
            <div class="card-body">
                <h5 class="card-title">{name}</h5>
                <p class="card-text">{text}</p>
                <p>Likes {numberOfLikes}</p>
                {
                    liked ?
                        <button class="btn btn-danger" onClick={dislike}>Dislike</button> :
                        <button class="btn btn-primary" onClick={like}>Like</button>

                }
            </div>
        </div>
    );
}
export default Post;
//<img class="card-img-top" src="..." alt="Card image cap" />