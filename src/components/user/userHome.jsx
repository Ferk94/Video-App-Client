import React from 'react';
import './userHome.css';

const UserHome = ({userInfo}) => {
    console.log(userInfo, 'me llega la info ???')
  return (
    <div className='userHome-container'>
        <div className='userHome-navBar'>
            <p>{userInfo.email}</p>
        </div>
    </div>
  )
}

export default UserHome;
