import React from 'react';

const Profile = ({score}) => {
    return(
        <div className="tc">
            <span>
                <div className=" pa4 tl flex items-center">
                    <img
                        src="profile_pic_1.jpeg"
                        className="ba bw2 h4 w4 pink" alt="Yep. Thats Me"/>
                    <div className="ph2 dib white b helvetica"> 
                        <p>Name: AndruixXD</p>
                        {/* score will be showned to the user and since its a variable it will be updated */}
                        <p>Score: {score}</p>
                        <p>Type: Simp</p> 
                    </div>
                    <img
                        src="profile_pic_2.jpeg"
                        className="ba bw2 h4 w4 pink" alt="Yep. Thats Him"/>
                    <div className="ph2 dib white b helvetica"> 
                        <p>Name: Yeomans</p>
                        <p>Score: 6000</p>
                        <p>Type: Guy</p>
                    </div>
                    <div>
                        <img
                            src="bt_add.png"
                            className="ph4 pw1 h2 w2 self-end-ns dim pointer" alt="Add friend button"/>
                    </div>
                </div>
            </span> 
        </div>
    );
}

export default Profile;
