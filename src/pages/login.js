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
        fetch("http://localhost:3001/login/" + email + "/" + pwd)
            .then((res) => res.json())
            .then((data) => setDat(data))
            .catch(console.error);
        if (dat.status)
            history.push(routes.dashboard.replace(":id", dat.id));
        //else
        //    setAccess(dat.status);
        console.log(dat);
    }, [email,pwd])

    const changeEmail = (e) => {
        setEmail(e.target.value);
    }
    const changePwd = (e) => {
        setPwd(e.target.value);
    }

    const submit = () => {
        setAccess(dat.status);
        console.log(dat);
        setEmail(null);
        setPwd(null);
        /*if (access)
            history.push(routes.dashboard.replace(":id", dat.id));*/
    }

    return (
        <div className="container">
            <h1>LOGIN FORM</h1>
            <form>
                <input onChange={changeEmail} type="text" placeholder="Enter Email" required /><br></br><br></br>
                <input onChange={changePwd} type="password" placeholder="Enter Password" required /><br></br><br></br>
                <button className="btn btn-outline-primary" onClick={submit}>LOGIN</button>
                {
                    access === false ? <h3>{dat.message}</h3> : null
                }
            </form>
        </div>
    );
}
export default Login;
//dat.status ? history.push(routes.dashboard.replace(":id", dat.id)) : <h3>{dat.message}</h3>