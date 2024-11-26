import React, { createContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from '../Firebase/Firebase.config';
const provider = new GoogleAuthProvider();

export const AuthContext = createContext(null);
const auth = getAuth(app);
export default function AuthProvider( { children } ) {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    // console.log(user);
    

  /// New user signUp functionality start here noww

   const googleLogin = ()=>{
    return signInWithPopup(auth, provider)
   }

  /// New user signUp functionality start here noww

   const SignUpUser = (email, password)=>{
    setLoading(true);
   return createUserWithEmailAndPassword(auth, email, password)
   }

   /// signIn functionality start here noww

   const SignInUser = (email, password)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
   }

   // Sign Out user functionality start here noww*******************************
   
   const singOut = ()=>{
     setLoading(true);
     return signOut(auth);
   }

   // forget password functionality start here now******************************
   // forget password functionality start here now******************************

     const resetPassword = (email)=>{
      setLoading(true);
      return sendPasswordResetEmail(auth, email)
     }

   // SignUp and Updata User Info functionality start here now******************************

     const updataprofile = (updatedData)=>{
      setLoading(true);
      return updateProfile(auth.currentUser, updatedData)
     }


    /// inside the data passing in the context object

    const authInfo = {
        user,
        setUser,
        SignUpUser,
        SignInUser,
        singOut,
        loading,
        resetPassword,
        googleLogin,
        updataprofile
    }

    useEffect(()=>{
      const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
          setUser(currentUser);
          setLoading(false);
      })
      return ()=>{
          setUser(unsubscribe);
      }
  }, [])

  return (
    <>
    <AuthContext.Provider value={authInfo}> 
        {children}
    </AuthContext.Provider>
    </>
  )
}
