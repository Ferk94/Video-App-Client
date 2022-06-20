import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AuthUserModal from './authUserModal';

const AuthUser = (props) => {

const userInfo = useSelector(state => state.userInfo);


if(userInfo?.email && userInfo.role?.includes(props.userRole))
 return <Navigate to='/user'/>
 
if(userInfo?.email && userInfo.role?.includes(props.adminRole))
return <Navigate to='/admin'/>

else

  return (
    <div>
        <AuthUserModal/>
    </div>
  )
}

export default AuthUser