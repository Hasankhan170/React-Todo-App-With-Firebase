// import { signOut } from "firebase/auth";
// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { auth } from "../config/firebase/FirebaseConfig";


// function Logout() {
//     const navigate = useNavigate();

//     useEffect(() => {
//         const handleSignOut = async () => {
//             try {
//                 await signOut(auth);
//                 console.log("User signed out!");
//                 navigate('/Login');
//             } catch (error) {
//                 console.error("Error signing out: ", error);
//             }
//         };

//         handleSignOut();
//     }, [navigate]);
//   return (
//     <>
//     <h1>Logout...</h1>
//     </>
//   )
// }

// export default Logout