import {Link} from 'react-router-dom'
import "../App.css"

function Navbar(){
	return(
		<div className="nav" >
			<Link to="/">Home</Link>
			<Link to="/about">About</Link>
			<Link to="/contact">Contact</Link>
		</div>
		)
}

export default Navbar