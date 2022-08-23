import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate,Location } from "react-router-dom";
import { auth, db, logout } from "./firebase";
import { query, collection, getDocs, where } from "firebase/firestore";


const PrivateRoute= ({children}) => {
  const [user, loading, error] = useAuthState(auth);
  if (!user){
    return < Navigate to={'/'} />
  }
  return children;
};
export default PrivateRoute;