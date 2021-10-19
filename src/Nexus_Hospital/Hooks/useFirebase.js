import { getAuth, createUserWithEmailAndPassword, updateProfile, signOut, signInWithEmailAndPassword , onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, GithubAuthProvider, GoogleAuthProvider,FacebookAuthProvider, signInWithPopup  } from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseInitialize from "../Firebase/firebaseInitialize";

firebaseInitialize();
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


    const emailField = (event) => {
        setEmail(event.target.value);
    }

    const passwordField = (event) => {
        setPassword(event.target.value);
    }
    const userNameField = (event) => {
        setUserName(event.target.value);
    }
    const userImageUrlField = (event) => {
        setUserImage(event.target.value);
    }

    const emailPasswordSignIn = () => {
        setIsLoading(true)
        setError("");
       return createUserWithEmailAndPassword(auth, email, password)
       .catch(error => {
            setError(error.message);
        }).finally(() => setIsLoading(false));
    }

    const varifyEmailAdress = () => {
        sendEmailVerification(auth.currentUser)
        .then(() => {
            setError("Email Varify Mail Send Successfully")
        }).catch(error => {
            setError(error.message);
        })
    }

    
    const resetPassword = () => {
        sendPasswordResetEmail(auth, email)
        .then(() => {
            setError("Password Reset Mail Send Successfull, Check Your Email")
        }).catch(error => {
            setError(error.message);
        })
    }

   const updateUserProfile = () => {
        updateProfile(auth.currentUser, {
            displayName: userName, photoURL: userImage
        })
   }


   const loginUser = (e) => {
    setIsLoading(true)
    setError("");
   return signInWithEmailAndPassword(auth, email, password)
       .catch(error => {
            setError(error.message);
        }).finally(() => setIsLoading(false));
   }

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

   const githubSignIn = () => {
    setError("");
    setIsLoading(true)
  return signInWithPopup(auth, githubProvider)
    .catch(error => {
        setError(error.message);
    }).finally(() => setIsLoading(false));
}

    const googleSignIn = () => {
    setError("")
    setIsLoading(true)
    return signInWithPopup(auth, googleProvider)
    .catch((error) => {
        setError(error.message)
      }).finally(() => setIsLoading(false));
    }

    const facebookSignIn = () => {
    setError("")
    setIsLoading(true)
    return signInWithPopup(auth, facebookProvider)
    .catch((error) => {
        setError(error.message)
      }).finally(() => setIsLoading(false));
    }


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

console.log(email, password);
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