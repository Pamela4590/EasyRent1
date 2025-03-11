import '../styles/Login.css'
const Register=()=>
{
    return(
        <div>
              {/* Register Form */}
              <div className="auth-box">
                <h2>Register</h2>
                <form>
                    <input type="text" name="fullname" placeholder="Full Name" required />
                    <input type="email" name="email" placeholder="Email" required />
                    <input type="password" name="password" placeholder="Password" required />
                    <input type="text" name="phone" placeholder="Phone Number" required />
                    <button type="submit">Register</button>
                </form>
            </div>
        </div>
    )
}
export default Register