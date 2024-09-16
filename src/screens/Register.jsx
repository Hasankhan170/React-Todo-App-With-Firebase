

function Register() {
  return (
    <>
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      margin : '0 auto',
      borderRadius: '10px',
      padding: '20px',
      flexDirection : 'column',
      height : 'auto',
      marginTop : '60px',
    }}>
      <h4>Register</h4>
    <form>
        <input style={{
          width: '100%',
          padding: '10px 80px',
          margin: '5px 0',
          borderRadius: '5px',
          border: '1px solid #ccc',
          outline: 'none',
          fontSize: '16px',
          color: '#333',
          backgroundColor: '#f1f1f1'
        }} type="text" placeholder="Enter Your Name" />
        <br />
        <input style={{
          width: '100%',
          padding: '10px 80px',
          margin: '5px 0',
          borderRadius: '5px',
          border: '1px solid #ccc',
          outline: 'none',
          fontSize: '16px',
          color: '#333',
          backgroundColor: '#f1f1f1'
        }} type="email" placeholder="Enter Your Email" />
        <br />
        <input style={{
          width: '100%',
          padding: '10px 80px',
          margin: '5px 0',
          borderRadius: '5px',
          border: '1px solid #ccc',
          outline: 'none',
          fontSize: '16px',
          color: '#333',
          backgroundColor: '#f1f1f1'
        }} type="password" placeholder="Enter Your Password" />
        <br />
        <button style= {{
          width: '100%',
          padding: '10px 20px',
          borderRadius: '5px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          cursor: 'pointer',
          fontSize: '16px',
          fontWeight: 'bold'
        }}>
          Register
        </button>
    </form>
    </div>
    </>
  )
}

export default Register