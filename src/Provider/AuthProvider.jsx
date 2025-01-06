import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';
import app from '../Firebase/firebase.config';



export const Authcontext = createContext(); 
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const[loading,setloading]=useState(true);

    const createnewUser = (email, password) => {
        setloading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    };
const logOut=()=>{
    setloading(true)
    return signOut(auth)
    
}

 const userLogin=(email,password)=>{
    setloading(true)
    return signInWithEmailAndPassword(auth,email,password)
 }

 const updateUserProfile = (updateData)=>{
      return updateProfile(auth.currentUser, updateData)
 }


 const provider = new GoogleAuthProvider();

 const handleGoogleSignup = () => {
     setloading(true)
     signInWithPopup(auth, provider)
         .then((result) => {
            //  console.log("User signed in with Google:", result.user);
             setUser(result.user);
           
         
         })
         .catch((error) => {
            //  console.error("Error signing in with Google:", error);
            //  toast.error("Google Sign-In failed");
         });
 };
 const updateCurrentUserProfile = async (updateData) => {
    if (!auth.currentUser) {
        throw new Error("No user is currently logged in!");
    }

    try {
        await updateProfile(auth.currentUser, {
            displayName: updateData.displayName || auth.currentUser.displayName,
            photoURL: updateData.photoURL || auth.currentUser.photoURL,
        });

        // Update the local user state
        setUser({
            ...auth.currentUser,
            displayName: updateData.displayName || auth.currentUser.displayName,
            photoURL: updateData.photoURL || auth.currentUser.photoURL,
        });

        toast.success("Profile updated successfully!");
    } catch (error) {
        // console.error("Error updating profile:", error);
        toast.error("Failed to update profile.");
        throw error;
    }
};
;
  

    const authinfo = {
        user,
        setUser,
        createnewUser,
        loading,
        logOut,
        updateUserProfile ,
        userLogin,
        handleGoogleSignup,
        updateCurrentUserProfile,
   
    };
 

useEffect(()=>{

const unsubscribe = onAuthStateChanged(auth,currentUser=>{
    setUser(currentUser);
    setloading(false)
})

return()=>{
    unsubscribe()
}

},[])


    return (
        <Authcontext.Provider value={authinfo}>{children}</Authcontext.Provider>
   
    );
};

export default AuthProvider;
