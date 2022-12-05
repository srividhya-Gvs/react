/*import StateExample from './StateExample'
import FuncProps  from './FuncProps'
import DemoExample from './DemoExample'
import Events from './Events'
import JSX from './JSX'*/
//import ClassComponent  from  './Class Component'
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
      {/*<StateExample/>
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
       </section>*/}
       </div>
     )
  }
  export default App