import { useRef, useState } from "react"
import { collection, addDoc ,doc, deleteDoc, updateDoc } from "firebase/firestore"; 
import { db } from "../config/firebase/FirebaseConfig";

// addDoc document add karne ky liye use hote ha;
// collection(db, "users") ye batata hai ke kaunsi collection (yahan "users")
// { todo: TodoText } ye object hai jo document mein store kiya jayega, jismein TodoText variable ki value hogi.

function TodoApp() {
    

    const [getValue,setGetValue] = useState([])

    const TodoInput = useRef()

    // useEffect(()=>{
    //     const fetchTodos = async ()=>{
    //         const querySnapshot = await getDocs(collection(db, "users"));
    //         const todoList = querySnapshot.docs.map((doc) =>({id : doc.id , ...doc.data()}));
    //         setGetValue(todoList)
    
    // }
    //     fetchTodos()
    // },[])


    

    const TodoValue = async (e)=>{
        e.preventDefault()

        const TodoText = TodoInput.current.value;

        if(TodoText === ''){
            alert('please enter todo')
            return ;
        }

     // Add todo to Firebase Firestore
       try { 
        const docRef = await addDoc(collection(db, "users"),{todo :TodoText});

        console.log("Document written with ID: ", docRef.id);

        // Ye line state ko update karti hai.
        // Nayi todo ko list mein add karne ke liye spread operator (...) ka istemal kiya gaya hai.
        // Naya todo object { id: docRef.id, todo: TodoText } ke saath add hota hai.
        setGetValue(prevTodos => [...prevTodos , {id : docRef.id , todo :TodoText}])


        TodoInput.current.value =''
        
      } catch (e) {
        console.error("Error adding document: ", e);
      }

        
        
    }

    const deleteTodo = async (id)=>{
        try {
            await deleteDoc(doc(db, "users", id));
            console.log('Todo deleted with ID: ', id);
            // Ye line state ko update karti hai.
            // filter method ka istemal karke aap wo todos nikaal rahe hain jinka ID id ke barabar nahi hai.
            // Iska matlab hai ke aap sirf un todos ko rakh rahe hain jo delete nahi hue hain.
            setGetValue(prevTodos => prevTodos.filter(todo => todo.id !== id))
            
        } catch (error) {
            console.log(error);
            
        }
        
    }

    const editTodo = async (id)=>{

        const updateValue = prompt('Update your Todo');
        if (updateValue === null || updateValue.trim() === '') {
            return;
        }

        await updateDoc(doc(db, 'users', id),{todo: updateValue})
        // Condition todo.id === id check karti hai
        // Agar current todo ka ID id ke barabar hai, to aap usko update karte hain ({ ...todo, todo: updateValue }).
        // Ye spread operator (...todo) ka istemal karke purani todo properties ko preserve karta hai aur todo: updateValue se naya text set karta hai.
        // Agar condition false hai, to wo current todo ko waise ka waise hi rakhte hain.
        setGetValue(prevTodos => prevTodos.map(todo =>
            todo.id === id ? { ...todo, todo: updateValue } : todo
        ));

    }


    return (
        <>
           <div style={{
            padding : '10px'
           }}>
           <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                margin: '0 auto',
                borderRadius: '10px',
                padding: '20px',
                flexDirection: 'column',
                height: 'auto',
                marginTop: '10px',
            }}>
                <h4>Todo App</h4>
                <input
                    style={{
                        width: '100%',
                        padding: '10px 60px',
                        margin: '5px 0',
                        borderRadius: '5px',
                        border: '1px solid #ccc',
                        outline: 'none',
                        fontSize: '16px',
                        color: '#333',
                        backgroundColor: '#f1f1f1'
                    }}
                    type="text"
                    placeholder="Enter Your Todo"
                    ref={TodoInput}
                />
                <br />
                <button
                    onClick={TodoValue}
                    style={{
                        width: '100%',
                        padding: '10px 20px',
                        borderRadius: '5px',
                        backgroundColor: '#4CAF50',
                        color: 'white',
                        border: 'none',
                        cursor: 'pointer',
                        fontSize: '16px',
                        fontWeight: 'bold'
                    }}
                >
                    Add Todo
                </button>
            </div>

            <div>
                {getValue.length > 0 ? (
                    getValue.map((item) => (
                        <div key={item.id}
                            style={{
                                display: 'flex',
                                justifyContent: 'space-around',
                                alignItems: 'center',
                                padding: '10px',
                                borderRadius: '5px',
                                backgroundColor: '#f1f1f1',
                                fontSize: '16px',
                                width: '97%',
                                margin : '0 auto',
                                marginBottom: '10px',
                            }}
                        >
                            <div>
                             <h4>{item.todo}</h4>
                            </div>
                            <div>
                                <button style={{
                                    color: 'white',
                                    cursor: 'pointer',
                                    backgroundColor : 'red',
                                    fontSize: '16px',
                                    border : 'none',
                                    fontWeight: 'bold',
                                    padding : '10px',
                                    marginRight: '5px',
                                }} onClick={()=>deleteTodo(item.id)}>Delete</button>
                                <button style={{
                                    color: 'white',
                                    cursor: 'pointer',
                                    backgroundColor : 'green',
                                    fontSize: '16px',
                                    border : 'none',
                                    fontWeight: 'bold',
                                    padding : '10px',
                                    marginRight: '5px',
                                }} onClick={()=>editTodo(item.id)}>Edit</button>
                            </div>
                        </div>
                    ))
                ) : (
                    <h5 className="container text-center">Todo Not found...</h5>
                )}
            </div>
           </div>
        </>
  )
}

export default TodoApp