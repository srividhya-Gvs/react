import React from 'react';
import firebase from './firebase'
import "./App.css"
class App extends React.Component{
  state={
    mobile:"+91"
  }
  change=(e)=>{
    this.setState({
      mobile:e.target.value
    })
  }
 handle=()=>{
  var recaptcha=new firebase.auth.RecaptchaVerifier("recaptcha");
  let number=this.state.mobile;
  firebase.auth().signInWithPhoneNumber(number,recaptcha).then(function(e){
    let code=prompt("enter the otp");
    if(code==null)return;
    e.confirm(code).then(function(result){
      alert("entered otp is true and you are the correct user");
      document.getElementById("recaptcha").innerHTML=""
    }).catch((error)=>{
      alert("you entered wrong otp.so please check for new otp");
      document.getElementById("recaptcha").innerHTML=""
    })
  })
 }

render(){
  return(
    <center><div className="body">
    <p>hello</p>
    <input type="text" onChange={this.change} value={this.state.mobile}/>
    <div id="recaptcha"></div>
    <button onClick={this.handle}>Submit</button>
    </div></center>
    )
  }
}
export default App;
/*import StateExample from './StateExample'
import FuncProps  from './FuncProps'
import DemoExample from './DemoExample'
import Events from './Events'
import JSX from './JSX'
import ClassComponent  from  './Class Component'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './Components/Navbar'
import NotFound from './Components/NotFound' 

function App() {
  return (
      <div>
          <BrowserRouter>
            <Navbar/>
              <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="*" element={<NotFound/>}/>
              </Routes>
          </BrowserRouter>
      <StateExample/>
      <DemoExample price="1st price"/>
      <Events/>
      <JSX/>
         <FuncProps carname="BMW"  year="1997"/>
         <h1>hello</h1>
       <section>
            <PropsExample name="srividhya"  age="19"/>
            <PropsExample name="susrutha" age="20"/> 
             <p>Hello Everyone</p>
            <h1>Heading Tag</h1>
            <img src="https://miro.medium.com/max/624/1*_Z2W8urXttbKVBaryY9PfQ.png" alt="react"/>
            <ClassComponent/>
       </section>
       </div>
     )
  }
  export default App*/
