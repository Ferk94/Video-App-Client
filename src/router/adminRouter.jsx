import React from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import AdminHome from '../components/admin/adminHome';


const AdminRouter = () => {

  const adminInfo = useSelector(state => state.userInfo);

  return (
    <div>
        <Routes>
          <Route path='/*' element={<AdminHome adminInfo={adminInfo}/>}/>
        </Routes>
    </div>
  )
}

export default AdminRouter;