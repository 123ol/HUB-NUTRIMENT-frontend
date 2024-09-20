import React, { useEffect, useRef, useState } from "react";
import Bord from "./Bord";
import './SignInSignUp.css';
function SignInSignupWithLocalStorage(){
   const name=useRef()
   const email=useRef()
   const password=useRef()
   const [showHome,setShowHome]=useState(false)
   const [show,setShow]=useState(false)
    const localSignUp=localStorage.getItem("signUp")
    const localEmail=localStorage.getItem("email")
    const localPassword=localStorage.getItem("password")
    const localName=localStorage.getItem("name")
   useEffect(()=>{
    if(localSignUp){
        setShowHome(true)
    }
    if(localEmail){
        setShow(true)
    }
   })
   const handleClick=()=>{
       if(name.current.value&&email.current.value&&password.current.value)
      {
        localStorage.setItem("name",name.current.value)
        localStorage.setItem("email",email.current.value)
        localStorage.setItem("password",password.current.value)
        localStorage.setItem("signUp",email.current.value)
        alert("Account created successfully!!")
        window.location.reload()
      }
   }

   const handleSignIn=()=>{
    if(email.current.value==localEmail&&password.current.value==localPassword){
        localStorage.setItem("signUp",email.current.value)
        window.location.reload()
    }else{
        alert("Please Enter valid Credential")
    }
   }

   const deleteAccount=()=>{ 
    localStorage.clear()
    window.location.reload()
}
    return(
        <div>
            {showHome?<Bord/>:
            
            (show?
                <sec>
                <div >
                <h2>Login</h2>
                        <div className="inputbox">
                            <input placeholder="Email" type='text' ref={email} />
                        </div>
                        <div className="inputbox">
                            <input placeholder="Password" type='password' ref={password} />
                        </div>
                        <button onClick={handleSignIn}>Sign In</button>

                        <div class="register">
                        <p>Don't have a account <a  onClick={deleteAccount}>Register</a></p>
                    </div>
                </div>
                </sec>
                :
                <sec>
                <div>
                <h2>signup</h2>
                        <div className="inputbox">
                            <input placeholder="Name" type='text' ref={name} />
                        </div>
                        <div className="inputbox">
                            <input placeholder="Email" type='text' ref={email} />
                        </div>
                        <div className="inputbox">
                            <input placeholder="Password" type='password' ref={password} />
                        </div>
                        <button onClick={handleClick}>Sign Up</button>
                </div>
                </sec>
                )
            }
        </div>
    );
}
export default SignInSignupWithLocalStorage;