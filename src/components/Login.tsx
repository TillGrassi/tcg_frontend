import { useDispatch } from "react-redux";
import { useState } from "react";
import { setAuthedUser } from "../actions/user";
import { getCollection } from "../actions/collection";
import { createUser, fetchCollection, loginUser } from "../utils/apiCalls";

const Login = () => {

    const dispatch = useDispatch();

    const [createProfile, setCreateProfile] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loadingScreen, setLoadingScreen] = useState(false);
    const [wrongpw, setWrongpw] = useState(false);
    const [uniqueUser, setUniqueUser] = useState(true);

    const create = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        setCreateProfile(true)
    }

    const doneCreate = () => {
        setCreateProfile(false)
    }

    // handle Login
    const handleLogin = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        const initialData = await loginUser(username, password);
        if(initialData) {
            const userData = {
                authedUser: initialData.username,
                coins: initialData.coins,
                booster: initialData.boosterpacks
            }
            setWrongpw(false)
            setLoadingScreen(true);
            setTimeout(() => dispatch(setAuthedUser(userData)),4000);
            const collection = await fetchCollection(username);
            dispatch(getCollection(collection));
            
        }
        if(!initialData) {
            setWrongpw(true);
        }
    }

    // handle Create Profile
    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        const token = await createUser(username, password);
        console.log(token)
        if(token) {
            setUniqueUser(true);
            doneCreate();
            localStorage.setItem('token', token);
        }
        if(!token) {
            setUniqueUser(false);
        }
      };   

    return (
        <div>
        {loadingScreen ?
        <div className="LoadScreen"></div>
            :
        <div className="LoginBackground">
          <div className="Login">
            {createProfile ? (
              <form onSubmit={handleSubmit}>
                <h3>Create Profile:</h3>
                <p>Username:</p>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                <p>Password:</p>
                <input type="password" autoComplete="new-password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button className="LoginBtn">Submit</button>
                <p className={uniqueUser ? "Gooduser" : "Baduser"}>This Username is already taken</p>
                <div>_________________________</div>
                <button className="LoginBtn" onClick={doneCreate}>Back to Login</button>
              </form>
            )  : 
                <form onSubmit={handleLogin}>
                    <h3>LogIn:</h3>
                    <p>Username:</p>
                    <input type="text" autoComplete="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                    <p>Password:</p>
                    <input type="password" autoComplete="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <button className="LoginBtn">Login</button>
                    <p className={wrongpw ? "Wrongpw" : "Goodpw"}>Wrong Username or Password. Please try again.</p>
                    <div>_________________________</div>
                    <button className="LoginBtn" onClick={create}>Create Profile</button>
                </form>
                }
            </div>
        </div>}
        </div>
    )
}


export default Login;
