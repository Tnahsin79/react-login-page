import React, { useState } from "react";
//https://react-login-server.herokuapp.com/
const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");
    const changeName = (e) => {
        setName(e.target.value);
    }
    const changeEmail = (e) => {
        setEmail(e.target.value);
    }
    const changePwd = (e) => {
        setPwd(e.target.value);
    }
    const submit = async () => {

        try {
            var data = {
                Name: name,
                Email: email,
                Password: pwd,
                isActivated: false,
                Friends: [],
                Posts: []
            }
            console.log(data);
            setName("");
            setEmail("");
            setPwd("");
            //let temp = await fetch("https://react-login-server.herokuapp.com/signup", {
            let temp = await fetch("http://localhost:3001/signup", {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            if (temp)
                alert("Student added");
        }
        catch (error) {
            console.log(error);
            //alert(error);
        }
    }
    return (
        <div className="container">
            <h1>SIGNUP FORM</h1>
            <form>
                <input onChange={changeName} type="text" placeholder="Enter Name" required /><br></br><br></br>
                <input onChange={changeEmail} type="text" placeholder="Enter Email" required /><br></br><br></br>
                <input onChange={changePwd} type="password" placeholder="Enter Password" required /><br></br><br></br>
                <button className="btn btn-outline-primary" onClick={submit}>SUBMIT</button>
            </form>
        </div>
    );
}
export default Signup;