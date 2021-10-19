import { getAuth, createUserWithEmailAndPassword, updateProfile, signOut, signInWithEmailAndPassword , onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, GithubAuthProvider, GoogleAuthProvider,FacebookAuthProvider, signInWithPopup  } from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseInitialize from "../Firebase/firebaseInitialize";

// Firebase Config Initialized 
firebaseInitialize();

// All Auth Providers 
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const githubProvider = new GithubAuthProvider();

const useFirebase = () => {
    const auth = getAuth();
    const [user, setUser] = useState('');
    const [error, setError] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userName, setUserName] = useState('');
    const [userImage, setUserImage] = useState('');
    const [isLoading , setIsLoading] = useState(true);

    // Email Field
    const emailField = (event) => {
        setEmail(event.target.value);
    }
    // Password Field
    const passwordField = (event) => {
        setPassword(event.target.value);
    }

    // User Name Field
    const userNameField = (event) => {
        setUserName(event.target.value);
    }

    // User Image Url Field
    const userImageUrlField = (event) => {
        setUserImage(event.target.value);
    }

    // Sign In Email And Password Provider 
    const emailPasswordSignIn = () => {
        setIsLoading(true)
        setError("");
       return createUserWithEmailAndPassword(auth, email, password)
       .catch(error => {
            setError(error.message);
        }).finally(() => setIsLoading(false));
    }

    // Varify Email Send Message In Email
    const varifyEmailAdress = () => {
        sendEmailVerification(auth.currentUser)
        .then(() => {
            setError("Email Varify Mail Send Successfully")
        }).catch(error => {
            setError(error.message);
        })
    }

    // Reset Password 
    const resetPassword = () => {
        sendPasswordResetEmail(auth, email)
        .then(() => {
            setError("Password Reset Mail Send Successfull, Check Your Email")
        }).catch(error => {
            setError(error.message);
        })
    }

    // Update Profile Name And Profile Image
   const updateUserProfile = () => {
        updateProfile(auth.currentUser, {
            displayName: userName, photoURL: userImage
        })
   }

// Log In Email And Password Provider 
   const loginUser = (e) => {
    setIsLoading(true)
    setError("");
   return signInWithEmailAndPassword(auth, email, password)
       .catch(error => {
            setError(error.message);
        }).finally(() => setIsLoading(false));
   }

   // Log Out All Provider
   const logOutUser = () => {
    setError("");
    signOut(auth)
    .then(()=>{
        setError("");
        setUser("");
    }).catch(error => {
        setError(error.message);
    })
   }

   // GitHub Sign In
   const githubSignIn = () => {
    setError("");
    setIsLoading(true)
  return signInWithPopup(auth, githubProvider)
    .catch(error => {
        setError(error.message);
    }).finally(() => setIsLoading(false));
}

    // Google Sign In
    const googleSignIn = () => {
    setError("")
    setIsLoading(true)
    return signInWithPopup(auth, googleProvider)
    .catch((error) => {
        setError(error.message)
      }).finally(() => setIsLoading(false));
    }

    // Facebook Sign In
    const facebookSignIn = () => {
    setError("")
    setIsLoading(true)
    return signInWithPopup(auth, facebookProvider)
    .catch((error) => {
        setError(error.message)
      }).finally(() => setIsLoading(false));
    }

    // On Auth State Chainge Realoading Stored User Data
   useEffect(() => {
    const unsubscribed =   onAuthStateChanged(auth, user => {
           if (user) {
               setUser(user);
           }else{
               setUser("")
           }
          setIsLoading(false);
       })
       return () => unsubscribed;
   }, [auth] )

   // Return All 
return {
    user,
    error,
    emailField,
    setUser,
    setError,
    passwordField,
    userNameField,
    userImageUrlField,
    emailPasswordSignIn,
    loginUser,
    updateUserProfile,
    logOutUser,
    isLoading,
    varifyEmailAdress,
    resetPassword,
    googleSignIn,
    githubSignIn,
    facebookSignIn
}
};

export default useFirebase;