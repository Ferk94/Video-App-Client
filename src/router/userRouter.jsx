import React from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import UserHome from '../components/user/userHome';



const UserRouter = () => {

  const userInfo = useSelector((state) => state.userInfo);



  return (
    <div>
        <Routes>
          <Route path='/*' element={<UserHome userInfo={userInfo}/>}/>
        </Routes>
    </div>
  )
}

export default UserRouter;