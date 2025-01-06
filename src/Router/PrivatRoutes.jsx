import React from 'react';
import Loading from '../Components/Loading';
import { Navigate, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { Authcontext } from '../Provider/AuthProvider';

const PrivatRoutes = ({children}) => {
    const { user,loading } = useContext(Authcontext);
    const location = useLocation()
if(loading){
    return <Loading></Loading>
}
    if (user && user?.email) {
        return children;
    }

   
    return <Navigate state={location.pathname} to="/login" />;
};

export default PrivatRoutes;