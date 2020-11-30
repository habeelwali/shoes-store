import React, { useState } from 'react'

import {db} from "./Firebase"

function Contact() {
const [name,setName] = useState("")
const [email,setEmail] = useState("")
const [massage,setMassage] = useState("")
const [loader,setLoader]=useState(false)

const handleSubmit=(e)=>{
   e.preventDefault(); 
setLoader(true)
   db.collection('contacts').add({
      name:name,
      email:email ,
      massage:massage,
   })
   .then(()=>{
       alert("message has be submited")
       setLoader(false)
   })
   .catch(error=>{
    alert(error.massage);
    setLoader(false)
   })

   setName("");
   setEmail("");
   setMassage("");
   
}




    return (
        <div className="contact">
            <form className="form" onSubmit={handleSubmit} >
                <h1>Contact Us</h1>

                <label>Name</label>
                <input placeholder="name" 
                value={name}
                onChange={(e)=>setName(e.target.value)}
                />

                <label>Email</label>
                <input placeholder="Enter Email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                />

                <label>Massage</label>
                <textarea placeholder="Massage"
                value={massage}
                onChange={(e)=>setMassage(e.target.value)}
                ></textarea>
                <button type="submit" style={{background:loader? "#ccc":"red"}}>Submit</button>
            </form>

        </div>
    )
}

export default Contact;