import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.initialize";

initializeAuthentication();
const auth = getAuth();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState("");
  const [admin, setAdmin] = useState(false);

  const userRegister = (email, password, name, redirectUriHistory) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setAuthError("");
        const newUser = { email, displayName: name };
        setUser(newUser);
        // post to database
        saveUserToDb(email, name);
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {
            //
          })
          .catch((error) => {});
        redirectUriHistory.replace("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setAuthError(errorMessage);
      })
      .finally(() => setIsLoading(false));
  };

  const userLogin = (email, password, location, redirectUriHistory) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const destination = location?.state?.from || "/";
        redirectUriHistory.replace(destination);
        setAuthError("");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setAuthError(errorMessage);
      })
      .finally(() => setIsLoading(false));
  };

  // observe user state change
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, []);

  const logout = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        //
      })
      .catch((error) => {
        //
      })
      .finally(() => setIsLoading(false));
  };

  // post to database
  const saveUserToDb = (email, displayName) => {
    const user = { email, displayName };
    fetch("https://mysterious-brook-12035.herokuapp.com/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    }).then();
  };

  // admin getting from database
  useEffect(() => {
    fetch(`https://mysterious-brook-12035.herokuapp.com/users/${user.email}`)
      .then((res) => res.json())
      .then((data) => setAdmin(data.admin));
  }, [user.email]);

  return {
    user,
    admin,
    isLoading,
    authError,
    userRegister,
    userLogin,
    logout,
  };
};

export default useFirebase;
