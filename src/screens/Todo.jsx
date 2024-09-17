import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase/FirebaseConfig";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TodoApp from "../components/TodoApp";


function Todo() {

  const [NotLogin,setNotLogin] = useState(null)
  const [UserUid, setUserUid] = useState('')
  const navigate = useNavigate()


  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,(user)=>{
      if(user){
        setNotLogin(true)
        setUserUid(user.uid)
        console.log('User UID:', user.uid);
      }else{
        setNotLogin(false)
        navigate('/Login')
        alert('user not login');
      }
    });

      
    // Cleanup subscription on unmount
    return ()=> unsubscribe();

  },[navigate])

  if(NotLogin === null){
    return <div>Loading...</div>; 
  }

  if (!NotLogin) {
    return <div>First You Register..</div>; 
  }





  return (
    <>
    <p>Your Uid : {UserUid}</p>
    <TodoApp/>
    </>
  )
}



export default Todo
