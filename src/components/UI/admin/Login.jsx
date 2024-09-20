import React, {useState} from "react"
import "../../../styles/login.css"
import axios from "axios"
import { useNavigate  } from "react-router-dom"

const Login = ({ setLoginUser}) => {

    const history = useNavigate ()

    const [ user, setUser] = useState({
        email:"",
        password:""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const login = () => {
        axios.post("https://gymbackend-uyoa.onrender.com/Login", user)
        .then(res => {
            alert(res.data.message)
            setLoginUser(res.data.user)
            console.log("no work")
            history.push("/Admin")
        })
    }

    return (
        <div className="login" style={{margin:"auto"}}>
            <h1>Login</h1>
            <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email"></input>
            <input type="password" name="password" value={user.password} onChange={handleChange}  placeholder="Enter your Password" ></input>
            <div  className="button" onClick={login}>Login</div>
        </div>
    )
}

export default Login