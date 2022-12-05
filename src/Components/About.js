import {useState}  from 'react'

function About(){
	const [village,setVillage]=useState("america");
	const [country,setCountry]=useState("India")
	const [pssword,setPassword]=useState("password")
	return(
		<div>
		<h1>{country}</h1>
		<p>{village}</p>
		<p>{pssword}</p>
		<input 
		 	onChange={(e)=>setVillage(e.target.value)}/><br/>
	    <input 
	         onChange={(e)=>setPassword(e.target.value)}/>
		 <button onClick={()=>console.log(village)}>Submit</button>
		 </div>

		)
}

export default About