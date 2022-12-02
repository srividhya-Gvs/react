import {Component}  from  'react'

class Events extends Component{
	state={
		username:"",
		emailid:""
	}
	handleClick=()=>{
		  console.log(this.state.username)
		  console.log(this.state.emailid)
	}
	handleChange=(e)=>{
		this.setState({
			[e.target.name]:e.target.value
		})
	}
	render(){
		return(
			<div>
			<input
			     name="username"
			     onChange={this.handleChange}
                 placeholder="Enter username"/><br/>
            <input
                  name="emailid"
                  onChange={this.handleChange}
                  placeholder="email"/>
                  <button onClick={this.handleClick}>Submit</button>        
			</div>
			)
	}
}

export default Events