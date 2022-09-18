import { connect } from "react-redux";
import { useState } from "react";

const Login = () => {

    const [createProfile, setCreateProfile] = useState(false);

    const create = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        setCreateProfile(true)
    }

    // handle Login

    // handle Create Profile
    return (
        <div className="LoginBackground">
            <form className="Login">
                {createProfile ? 
                <div>
                    <h3>Create Profile:</h3>
                    <p>Username:</p>
                    <input type="text" />
                    <p>Password:</p>
                    <input type="password" autoComplete="new-password" />
                    <button className="LoginBtn">Submit</button>
                </div> : 
                <div>
                    <h3>LogIn:</h3>
                    <p>Username:</p>
                    <input type="text" autoComplete="username" />
                    <p>Password:</p>
                    <input type="password" autoComplete="password" />
                    <button className="LoginBtn">Login</button>
                    <div>_________________________</div>
                    <button className="LoginBtn" onClick={create}>Create Profile</button>
                </div>
                }
            </form>
        </div>
    )
}




export default Login;