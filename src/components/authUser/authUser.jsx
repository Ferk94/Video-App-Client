import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const AuthUser = (props) => {

const [redirect, setRedirect] = useState(false);
const userInfo = useSelector(state => state.userInfo);

console.log(userInfo, 'llega ahora')
console.log(props, 'q tengo en props?')

if(userInfo?.email && userInfo.role?.includes(props.userRole))
 return <Navigate to='/user'/>
 
if(userInfo?.email && userInfo.role?.includes(props.adminRole))
return <Navigate to='/admin'/>

else

  return (
    <div>
        soy AuthUser
    </div>
  )
}

export default AuthUser