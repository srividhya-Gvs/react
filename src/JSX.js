import React from 'react'
function JSX(){
	return React.createElement(
		"div",
		{id:"one",ClassName:"classone"},
		React.createElement("h1",null,"Good")
		)
}

export default JSX