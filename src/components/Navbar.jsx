import { Link } from "react-router-dom"



function Navbar() {
  return (
    <>
    <div className="d-flex justify-content-center gap-5 mt-3 bg-primary p-3">
    <h5><Link style={{textDecoration: 'none', color : 'white'}} to= "/Todo">Todo</Link></h5>
    <h5><Link style={{textDecoration: 'none', color : 'white'}} to= "/">Login</Link></h5>
    <h5><Link style={{textDecoration: 'none', color : 'white'}} to= "/Register">Register</Link></h5>
    </div>
    </>
  )
}

export default Navbar