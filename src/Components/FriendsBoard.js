import React from 'react';
import Profile from './Profile';

//Score is passed to the profile
const FriendsBoard = ({score}) => {
    return(
        <div className="bg-green tc pa0 ma0 ">
            <span>
                <Profile score={score}/> 
            </span> 
        </div>
    );
}

export default FriendsBoard;
