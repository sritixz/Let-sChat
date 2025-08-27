import React from 'react'
import { useState } from "react";
import addIcon from "../img/addAvatar.png";
import {createUserWithEmailAndPassword,updateProfile} from 'firebase/auth'
import { auth } from "../firebase";
import { db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";

const Register = () => {
  const [err,setErr]=useState(false);
  const handleSubmit= async (e)=>{
    
    e.preventDefault();
    const displayName=e.target[0].value;
    const email=e.target[1].value;
    const password=e.target[2].value;
    const file=e.target[3].files[0];

    

try{

const res=await createUserWithEmailAndPassword(auth, email, password);
await updateProfile(res.user,{
  displayName:displayName,
});
console.log("User registered")
await setDoc(doc(db, "users", res.user.uid), {
  uid: res.user.uid,
  displayName,
  email,
  photoURL: null // or add avatar later
});

}catch(err){
  console.log("Error registeration")
   setErr(true);
}

  };
  return (
    <div className='formContainer'>
        <div className="formWrapper">
            
                <span className="logo">Let'sChat</span>
                <span className="title">Register</span>
                <form onSubmit={handleSubmit}>
                <input type="text" placeholder="display name"/>
                <input type="email" placeholder="email"/>
                 <input type="password"placeholder="password"/>
                <input style={{display:"none"}}type="file" id="file"/>
                <label htmlFor="file">
                    <img src={addIcon} alt=""/>
                    <span>Add an avatar</span>
                </label>
                
                <button>Sign Up</button>
                {err &&<span>Something Went Wrong</span>}

            </form>
      <p>You already have an account? <a href="/login">Login</a></p>
        </div>
      
    </div>
  )
}

export default Register