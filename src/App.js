import "./Todos.css";
import Todos from "./Todos";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import firebase from "./firebase";
//import {firebase} from '@firebase/app'
//import '@firebase/auth'

const sighInWithGoogle = () =>{
  try {
    auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    
  } catch (error) {
    
    console.log(error)
  }
}

 const SignIn = () => (
  <main>
     <h1>TODO APP</h1>
     <button className="custom-btn btn-9" onClick={sighInWithGoogle}>Sign In With Google</button>
  </main>
);

const App = () => {
  const [user] = useAuthState(auth);

  return user ? <Todos /> : <SignIn />;
};

export default App;