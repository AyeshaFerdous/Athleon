
import { createUserWithEmailAndPassword, onAuthStateChanged,  signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import auth from '../Firebase/firebase.config';



export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
     
    const [email, setEmail] = useState("")
    
    

    
    const createNewUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email,password)
    }
    const logOut =()=>{
        setLoading(true)
       return signOut(auth);
    }
    
    
 
    const updateUserProfile = (updatedData)=>{
       
        return updateProfile(auth.currentUser, updatedData);
    }
    const userLogin = (email,password)=>{
        setLoading(true)
       return signInWithEmailAndPassword(auth, email, password);
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
          
              setUser(currentUser);
              setLoading(false)
            
          })
          return ()=>{
              unsubscribe();
          }
      },[])

     
    const authInfo = {
        userLogin,
        createNewUser,
        setUser,
        user,
        logOut,
        loading,
        setLoading,
        updateUserProfile,
        email,
        setEmail
       
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;