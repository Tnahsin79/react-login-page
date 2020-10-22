import React, { useEffect, useState } from "react";
//import { useParams } from "react-router-dom";

const Friends = (props) => {
    const [users, setUsers] = useState([]);
    const [friends, setFriends] = useState([]);
    const id = props.id;
    const email = props.email;
    const name = props.name;

    useEffect(() => {
        fetch("http://localhost:3001/friends/" + id)
            .then((res) => res.json())
            .then((data) => setFriends(data))
            .catch(console.error);
        console.log(friends);
        fetch("http://localhost:3001/users")
            .then((res) => res.json())
            .then((data) => setUsers(data))
            .catch(console.error);
        console.log(users);
    }, []);

    console.log(friends);
    {
        var result = users.filter((user) => {
            if (user.Email !== email) {
                if (!friends.includes({
                    email: user.Email,
                    name: user.Name
                }))
                    return user;
            }
            //return null;
        })
    }

    const addFriend = (e) => {
        //let mail = e.target.id;
        var data = {
            Email: e.target.id,
            Name: e.target.name
        }
        fetch("http://localhost:3001/addFriend/" + id, {
            method: "PUT",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })
    }

    return (
        <div>
            <h1>User ID: {id}</h1>
            <h1>User Name: {name}</h1>
            <h1>User Email: {email}</h1>
            {
                result.map((user) =>

                    <div>
                        <h3>{user.Name}</h3>
                        <button id={user.Email} onClick={addFriend} name={user.Name}>Add friend</button>
                        <hr></hr>
                    </div>

                )
            }
        </div>
    )
}
export default Friends;