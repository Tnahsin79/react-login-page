import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import routes from "../routes";
//import routes from "../routes";
//import { useParams } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState(null);
    const [pwd, setPwd] = useState(null);
    const [dat, setDat] = useState({});
    const [access, setAccess] = useState(null);
    const history = useHistory();
    //console.log(history);
    //const { id } = useParams();

    useEffect(() => {
        console.log(dat);
        /*if (dat.status)
            history.push(routes.dashboard.replace(":id", dat.id));*/
        //console.log(access);
    }, [dat])

    const changeEmail = (e) => {
        setEmail(e.target.value);
    }
    const changePwd = (e) => {
        setPwd(e.target.value);
    }
    const submit = async () => {
        try {
            var data = {
                Email: email,
                Password: pwd,
            }
            setEmail(null);
            setPwd(null);
            //await fetch("https://react-login-server.herokuapp.com/login", {
                await fetch("http://localhost:3001/login/"+data.Email+"/"+data.Password)
                /*, {
                method: "GET",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json"
                }
            })*/
                .then((res) => res.json())
                .then((data) => setDat(data))
                .catch(console.error);
            setAccess(dat.status);
            console.log(dat);
            console.log(access);
            //history.push(routes.dashboard.replace(":id",dat.id));
        }
        catch (error) {
            console.log(error);
            //alert(error);
        }
    }
    return (
        <div className="container">
            <h1>LOGIN FORM</h1>
            <form>
                <input onChange={changeEmail} type="text" placeholder="Enter Email" required /><br></br><br></br>
                <input onChange={changePwd} type="password" placeholder="Enter Password" required /><br></br><br></br>
                <button className="btn btn-outline-primary" onClick={submit}>LOGIN</button>
                {
                    dat.status ? history.push(routes.dashboard.replace(":id", dat.id)) : <h3>{dat.message}</h3>
                }
            </form>
        </div>
    );
}
export default Login;
//dat.status ? history.push(routes.dashboard.replace(":id", dat.id)) : <h3>{dat.message}</h3>