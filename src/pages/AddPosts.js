import React, { useState } from "react";
//https://react-login-server.herokuapp.com/
const AddPosts = (props) => {
    const [text, setText] = useState("");
    //const [media, setMedia] = useState("");
    const id = props.id;
    const name = props.name;

    const changeText = (e) => {
        setText(e.target.value);
    }
    /*const changeMedia = (e) => {
        setMedia(e.target.value);
    }*/
    const submit = async () => {

        try {
            var data = {
                Id: id,
                Name: name,
                Text: text,
                //Media: media
            }
            console.log(data);
            setText("");
            //setMedia("");
            //let temp = await fetch("https://react-login-server.herokuapp.com/signup", {
            let temp = await fetch("http://localhost:3001/addPost", {
                method: "PUT",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            if (temp)
                alert("Post Added");
        }
        catch (error) {
            console.log(error);
            //alert(error);
        }
    }

    return (
        <div className="container">
            <h1>ADD POSTS</h1>
            <form>
                <textarea onChange={changeText} type="textarea" placeholder="Enter Text" required /><br></br><br></br>
                <button className="btn btn-outline-primary" onClick={submit}>SUBMIT</button>
            </form>
        </div>
    );
}
export default AddPosts;
//<input onChange={changeMedia} type="file" id="img" name="img" accept="video/*,image/*"></input><br></br><br></br>