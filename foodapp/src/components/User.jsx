import React, { useEffect, useState } from "react";
import ProfileUserClass from './ProfileUserClass';
import ProfileRepoClass from './ProfileRepoClass';
import { Github_API_User, Github_UserName, options } from "../utils/constants";

const User = () => {
    const [userInfo, setUserInfo] = useState(null);

    const fetchData = async () => {
        try {
            const data = await fetch(Github_API_User + Github_UserName, options);
            const jsondata = await data.json();
            setUserInfo(jsondata);
        } catch (error) {
            console.log("Error fetching data", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    if (userInfo === null) {
        // Data is still loading
        return <p>Loading...</p>;
    }

    return (
        <div className="profile-class-container">
            <div className="profile-container">
                <h1 className="profile-title">About Me</h1>
               {
                 <ProfileUserClass data={userInfo} />
               }
            </div>
            <div className="repo-container">
                {
                    <ProfileRepoClass followers={userInfo.followers} />
                }
                
            </div>
        </div>
    );
};

export default User;







