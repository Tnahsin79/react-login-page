import React, { useEffect, useState } from 'react';
//import './App.css';
import { Switch, Route, useParams } from 'react-router-dom';
import routes from '../routes';
import DashHeader from "../components/DashHeader";
import Profile from "./Profile";
import AddPosts from "./AddPosts";
import Wall from "./Wall";
import Friends from "./Friends";

const Dashboard = () => {
    const { id } = useParams();
    const [profileData, setProfileDate] = useState({});

    useEffect(() => {
        fetch("http://localhost:3001/profile/" + id)
            .then((res) => res.json())
            .then((data) => setProfileDate(data))
            .catch(console.error);
        console.log(profileData);
    }, []);

    return (
        <div className="container">
            <DashHeader id={id} />
            <Switch>
                <Route path={routes.wall.replace(":id", id)}>
                    <Wall id={profileData._id} name={profileData.Name} email={profileData.Email}/>
                </Route>
                <Route path={routes.profile.replace(":id", id)}>
                    <Profile id={profileData._id} name={profileData.Name} email={profileData.Email} />
                </Route>
                <Route path={routes.posts.replace(":id", id)}>
                    <AddPosts id={id} name={profileData.Name}/>
                </Route>
                <Route path={routes.friends.replace(":id", id)}>
                    <Friends id={id} email={profileData.Email} name={profileData.Name}/>
                </Route>
                <Route path={routes.dashHome.replace(":id", id)}>
                    <Wall id={profileData._id} name={profileData.Name} email={profileData.Email}/>
                </Route>
            </Switch>
        </div>
    );
}

export default Dashboard;
/*
<header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>
*/