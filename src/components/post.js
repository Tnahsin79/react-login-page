import React from "react";
import { Button } from "reactstrap";

const Post = (props) => {
    const userId = props.id;
    const postId = props.post_id;
    const id = postId.split("-")[0];
    const index = parseInt(postId.split("-")[1]);
    const name = props.name;
    const likes = props.likes;
    const text = props.text;

    const like = () => {
    }

    return (
        <div class="card container">
            <div class="card-body">
                <h5 class="card-title">{name}</h5>
                <p class="card-text">{text}</p>
                <Button class="btn btn-primary" onClick={like}>Like</Button>
            </div>
        </div>
    );
}
export default Post;
//<img class="card-img-top" src="..." alt="Card image cap" />