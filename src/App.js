import StateExample from './StateExample'
import FuncProps  from './FuncProps'
import DemoExample from './DemoExample'
import Events from './Events'
//import ClassComponent  from  './Class Component'

function App() {
  return (
      <div>
      <StateExample/>
      <DemoExample price="1st price"/>
      <Events/>
         <FuncProps carname="BMW"  year="1997"/>
         <h1>hello</h1>
      {/* <section>
            <PropsExample name="srividhya"  age="19"/>
            <PropsExample name="susrutha" age="20"/> 
            { <p>Hello Everyone</p>
            <h1>Heading Tag</h1>
            <img src="https://miro.medium.com/max/624/1*_Z2W8urXttbKVBaryY9PfQ.png" alt="react"/>
            <ClassComponent/>}
       </section>*/}
       </div>
     )
  }
  export default App