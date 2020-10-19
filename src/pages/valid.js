import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const Valid = () => {
    const { id } = useParams();
    useEffect(() => {
        try {
            console.log(id);
            var data = {
                Id: id
            }
            //fetch("https://react-login-server.herokuapp.com/valid", {
                fetch("http://localhost:3001/valid", {
                method: "PUT",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json"
                }
            })
        }
        catch (error) {
            console.log(error);
            //alert(error);
        }
    });

    return (
        <div className="container">
            <h1>
                your account has been activated....
            </h1>
            <h3>
                proceed to login....
            </h3>
        </div>
    )
}
export default Valid;