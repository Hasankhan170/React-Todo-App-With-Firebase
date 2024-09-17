import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase/FirebaseConfig";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


function Todo() {

  const [Login,setLogin] = useState(true)
  const [NotLogin,setNotLogin] = useState(false)
  const navigate = useNavigate()


  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,(user)=>{
      if(user){
        setNotLogin(true)
        console.log('User UID:', user.uid);
      }else{
        setNotLogin(false)
        navigate('/Login')
        console.log('not login');
      }
      setLogin(false)
    });

      
    // Cleanup subscription on unmount
    return unsubscribe();

  },[navigate])

  if (Login) {
    return <div>First You Register..</div>; 
  }


  return (
    <>
    <h1>Todo</h1>
    </>
  )
}

export default Todo
